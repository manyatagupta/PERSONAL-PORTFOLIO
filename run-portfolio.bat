@echo off
echo Cleaning up old files...
rmdir /s /q node_modules
del /q package-lock.json

echo Setting up Node.js...
set PATH=%PATH%;C:\Program Files\nodejs

echo Installing dependencies (this may take a minute)...
call npm install

echo Starting development server...
call npm run dev
pause
