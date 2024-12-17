import React, { useState } from 'react';
import { FileUpload } from './ui/file-upload';
import {LimeVisualisation} from './LimeVisualisation.jsx'; // Import the LimeVisualization component

export const FileUploadSection = () => {
  const [activeTab, setActiveTab] = useState("Image");

  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col items-center justify-center text-center">
        
        <div className="inline-flex mb-2">
          {["Image", "Audio", "Video"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-white font-normal ${
                activeTab === tab ? "bg-gray-400" : "bg-white/20"
              } ${tab === "Image" ? "rounded-l" : tab === "Video" ? "rounded-r" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border-4 border-dotted border-gray-300 p-4 rounded-lg">
          <div className="backdrop-blur-sm bg-white/20">
            {/* Render components based on active tab */}
            {activeTab === "Image" && (
              <div>
                <FileUpload type="image" />
                {/* <LimeVisualisation />  */}
              </div>
            )}
            {activeTab === "Audio" && <FileUpload type="audio" />}
            {activeTab === "Video" && <FileUpload type="video" />}
          </div>
        </div>
      </div>
    </div>
  );
};
