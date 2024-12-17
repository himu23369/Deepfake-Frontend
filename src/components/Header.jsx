import React from 'react';

export const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-8'>
      <h1 className="z-10 text-6xl text-slate-300 font-mono">
        Deep Fake Detector
      </h1>
      <h2 className='mt-2 z-10 text-2xl text-gray-400 '>
        {/* Welcome to our Deepfake Detection Platform, where you can quickly 
        and easily verify the authenticity of your images. Simply upload 
        your files, and our advanced algorithms will analyze them for any 
        signs of deepfake manipulation. Receive instant, reliable results 
        in a secure and user-friendly environment. Protect your content and 
        ensure its authenticity with our cutting-edge technology. */}

        Welcome to our Deepfake Detection Platform, where you can swiftly verify the authenticity of your images, audio, and video content. Upload your files, and our advanced algorithms will analyze them for any signs of deepfake manipulation, delivering reliable results instantly. Protect your content and ensure its authenticity with our cutting-edge technology. 
      </h2>
    </div>
  );
};
