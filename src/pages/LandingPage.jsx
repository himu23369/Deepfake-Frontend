import React from "react";
import { Vortex } from '../components/ui/vortex.tsx';
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect.jsx";
import { people } from "../data/developerData.js";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials.tsx";
import { modelEfficiency } from "../data/modelEfficiency.js";
import { BsCheck } from "react-icons/bs";
import { MagicCard } from "../components/ui/accuracyGraphBox.tsx";
import { useNavigate } from 'react-router-dom';



export const LandingPage = () => {
    const words = [
        {
          text: "AI-Powered",
        },
        {
          text: "Deepfake",
        },
        {
          text: "Detection",
        },
        {
          text: "for",
        },
        {
          text: "Audio,",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Video,",
            className: "text-blue-500 dark:text-blue-500",
          },
          {
            text: "&",
            className: "text-blue-500 dark:text-blue-500",
          },
          {
            text: "Images.",
            className: "text-blue-500 dark:text-blue-500",
          },
      ];

      const navigate = useNavigate();

    return (
        <>
        
            {/* Landing page introduction section */}
            <div className="w-[calc(100%)] mx-auto h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Replace the text here with your own content
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                        Replace here too with the content you want to display on the landing page
                    </p> */}

                    <div className="flex flex-col items-center justify-center h-[40rem]  ">
                        <p className="text-white text-2xl md:text-6xl font-bold text-center">
                            See Beyond the Fake, Trust the Real
                        </p>

                        <TypewriterEffectSmooth words={words} />
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                            <button onClick={() => navigate('/signin')} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                            Get Started
                            </button>
                            <button onClick={() => navigate('/signup')} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                            Signup
                            </button>
                        </div>
                    </div>
                </Vortex>
            </div>       

            {/* section talking about the accuracy and efficency of the model */}
            <div className="w-[calc(100%)] bg-black overflow-hidden">

                <div className="w-3/4 mx-auto bg-black  overflow-hidden">
                    <h1 className="text-white text-5xl my-5 font-bold">Experimental Results</h1>

                    {/* We need to replace the text here */}
                    <p className="text-white my-5 text-xl">
                        We have performed extensive training and hyperparameter tuning, such as comparing different EfficientNet models, number of convolution layers, weights, data augmentations, dropout rates, and regularizers. In the end, the following settings give us the best results:
                    </p>
                    <div className="text-white">
                        <ul>
                            {modelEfficiency.map((item, index) => (
                                <li key={index} className="text-white my-1 text-lg" > <BsCheck style={{ display: "inline" }} /> {item}</li>
                            ))}
                        </ul>
                    </div>


                    {/* Accuracy Graphs */}

                    <div className="flex flex-row my-10">
                        {/* Images ki css set krni hai */}

                        <MagicCard className=" w-2/5 mx-auto h-96">
                            <img
                                src="src\assets\model_metrices\Training_Val_loss.jpg"
                                className="h-full w-full object-contain object-center"
                                draggable={false}
                            />
                        </MagicCard>
                        <MagicCard className=" w-2/5 mx-auto h-96">
                            <img
                                src="src\assets\model_metrices\Training_val_Accuracy.jpg"
                                className="h-full w-full object-contain object-center"
                                draggable={false}
                            />
                        </MagicCard>
                    </div>            
                    {/* Developers card section */}
                    <div className="bg-black">
                        <div className="flex">
                        <AnimatedTestimonials testimonials={people} />;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};