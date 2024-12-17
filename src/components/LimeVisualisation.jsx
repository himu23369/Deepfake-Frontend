import React, { useState } from "react";

export const LimeVisualisation = () => {
  const [imageFile, setImageFile] = useState(null);
  const [limeResults, setLimeResults] = useState({});

  const handleFileUpload = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleGenerateLime = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch("http://127.0.0.1:5000/lime", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setLimeResults(data);
      } else {
        console.error("Error generating LIME Visualisation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerateLime}
      >
        Generate LIME
      </button>
      {limeResults.lime_green_red && limeResults.lime_boundaries && (
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <h3 className="text-center">Green and Red Contributions</h3>
            <img
              src={limeResults.lime_green_red}
              alt="LIME explanation green and red"
              className="border rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-center">Bold Yellow Boundaries</h3>
            <img
              src={limeResults.lime_boundaries}
              alt="LIME explanation boundaries"
              className="border rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
