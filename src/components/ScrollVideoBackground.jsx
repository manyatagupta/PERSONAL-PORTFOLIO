import { useEffect, useRef, useState } from 'react';

const ScrollVideoBackground = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const framesRef = useRef([]);
  const [framesReady, setFramesReady] = useState(false);
  const lastFrameIndexRef = useRef(-1);
  const requestRef = useRef(null);

  // Use the locally downloaded video to bypass CORS and ensure smooth extraction!
  const VIDEO_URL = '/flower.mp4';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      lastFrameIndexRef.current = -1;
    };

    const extractFrames = async () => {
      try {
        const response = await fetch(VIDEO_URL);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.src = objectUrl;

        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => resolve();
          video.onerror = () => reject();
          setTimeout(() => reject(), 15000);
        });

        // Scale down slightly more to allow extracting MORE frames without crashing memory
        const scale = Math.min(1, 960 / video.videoWidth);
        const scaledWidth = Math.round(video.videoWidth * scale);
        const scaledHeight = Math.round(video.videoHeight * scale);
        
        // Extract up to 250 frames for maximum smoothness
        const frameCount = Math.max(60, Math.min(250, Math.round(video.duration * 40)));

        for (let i = 0; i < frameCount; i++) {
          const time = (i / (frameCount - 1)) * (video.duration - 0.05);
          video.currentTime = time;
          await new Promise((resolve, reject) => {
            const onSeeked = () => { video.removeEventListener('seeked', onSeeked); resolve(); };
            video.addEventListener('seeked', onSeeked);
            setTimeout(() => { video.removeEventListener('seeked', onSeeked); reject(); }, 3000);
          });
          const bitmap = await createImageBitmap(video, { resizeWidth: scaledWidth, resizeHeight: scaledHeight });
          framesRef.current.push(bitmap);
        }

        if (framesRef.current.length > 0) {
          setFramesReady(true);
        }
        URL.revokeObjectURL(objectUrl);
      } catch(e) {
        console.warn('Failed to extract frames', e);
      }
    };

    const getScrollBounds = () => {
      const vh = window.innerHeight;
      // Map the video to a shorter distance (300vh instead of 400vh) so the animation progresses faster
      return { start: 0, end: vh * 3 };
    };

    const getProgress = () => {
      const { start, end } = getScrollBounds();
      const range = end - start;
      if (range <= 0) return 0;
      return Math.max(0, Math.min(1, (window.scrollY - start) / range));
    };

    const drawFrame = (frame) => {
      const cw = canvas.width, ch = canvas.height;
      const s = Math.max(cw / frame.width, ch / frame.height);
      const dw = frame.width * s, dh = frame.height * s;
      ctx.drawImage(frame, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    let currentSmoothIdx = 0;

    const videoTick = () => {
      const progress = getProgress();
      if (framesRef.current.length > 0) {
        const targetIdx = progress * (framesRef.current.length - 1);
        
        // Increased lerp factor from 0.15 to 0.35 to make the animation much faster and responsive!
        currentSmoothIdx += (targetIdx - currentSmoothIdx) * 0.35;
        const idx = Math.round(currentSmoothIdx);

        if (idx !== lastFrameIndexRef.current) {
          lastFrameIndexRef.current = idx;
          if (framesRef.current[idx]) drawFrame(framesRef.current[idx]);
        }
      } else if (videoRef.current && videoRef.current.readyState >= 1) {
          const target = progress * (videoRef.current.duration - 0.1);
          if (Math.abs(videoRef.current.currentTime - target) > 0.05) {
              videoRef.current.currentTime = target;
          }
      }
      requestRef.current = requestAnimationFrame(videoTick);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    requestRef.current = requestAnimationFrame(videoTick);
    extractFrames();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0a] pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${framesReady ? 'opacity-100' : 'opacity-0'}`}
      />
      <video 
        ref={videoRef}
        muted 
        playsInline 
        preload="auto" 
        src={VIDEO_URL}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${framesReady ? 'opacity-0' : 'opacity-100'}`}
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default ScrollVideoBackground;
