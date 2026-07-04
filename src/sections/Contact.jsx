import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Mail, Smartphone, Link as LinkIcon, ArrowUpRight } from "lucide-react";
import { mySocials } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Manyata",
          from_email: formData.email,
          to_email: "manyata.gupta@example.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section className="relative bg-transparent py-24 md:py-32 overflow-hidden" id="contact">
      <div className="c-space mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="font-clash font-bold text-5xl md:text-7xl text-white tracking-tight leading-none mb-6 uppercase">
            LET'S <span className="text-[#a586ff]">TALK</span>
          </h2>
          <p className="font-satoshi font-medium text-base md:text-lg text-gray-400 max-w-2xl">
            Got a project idea, a question, or just want to connect? Drop me a message!
          </p>
        </motion.div>

        {showAlert && (
          <div className="mb-8 flex justify-center">
            <Alert type={alertType} text={alertMessage} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-sm rounded-3xl p-8 hover:border-[#a586ff]/30 hover:shadow-[0_10px_30px_rgba(165,134,255,0.1)] transition-all duration-500"
            >
              <Mail className="text-[#a586ff] mb-6" size={28} />
              <div className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">Email</div>
              <a href="mailto:manyatagupta@example.com" className="text-white text-lg font-satoshi hover:text-[#a586ff] transition-colors">
                manyatagupta@example.com
              </a>
            </motion.div>


            {/* Social Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-sm rounded-3xl p-8 hover:border-[#a586ff]/30 hover:shadow-[0_10px_30px_rgba(165,134,255,0.1)] transition-all duration-500"
            >
              <LinkIcon className="text-[#a586ff] mb-6" size={28} />
              <div className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Social</div>
              <div className="flex flex-col gap-4">
                {mySocials.map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="flex items-center text-white text-lg font-satoshi hover:text-[#a586ff] transition-colors group">
                    {social.name}
                    <ArrowUpRight size={18} className="ml-2 text-gray-400 group-hover:text-[#a586ff] transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 md:p-12"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-white text-xs font-bold tracking-[0.1em] uppercase ml-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-base font-satoshi text-white placeholder:text-gray-500 focus:outline-none focus:border-[#a586ff] focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-white text-xs font-bold tracking-[0.1em] uppercase ml-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-base font-satoshi text-white placeholder:text-gray-500 focus:outline-none focus:border-[#a586ff] focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-white text-xs font-bold tracking-[0.1em] uppercase ml-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-base font-satoshi text-white placeholder:text-gray-500 focus:outline-none focus:border-[#a586ff] focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-white/10 hover:bg-[#a586ff] border border-white/10 text-white py-5 rounded-2xl font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                {!isLoading ? (
                  <>Send Message <ArrowUpRight size={20} /></>
                ) : (
                  "Sending..."
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
