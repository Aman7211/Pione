import React, { useState } from "react";
import data1 from '../assets/data/data1';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState("Media");
    const [selectedImage, setSelectedImage] = useState(null);
    const [data, setData] = useState(data1);

    const openImage = (imageLink) => {
        setSelectedImage(imageLink);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const handleOverlayClick = (e) => {

        if (e.target === e.currentTarget) {
            closeImage();
        }
    };

    return (
        <div className="mb-20  mt-8 container mx-auto overflow-hidden">
            {/* Tabs Header */}
            <div className="flex flex-wrap border-b border-gray-300 ">
                {data.map(({ label, value }) => (
                    <button
                        key={value}
                        className={`py-2 px-4 focus:outline-none ${activeTab === value
                                ? "border-b-2 border-[#780604] text-[#780604] font-bold"
                                : " text-[#05577D] font-semibold"
                            }`}
                        onClick={() => setActiveTab(value)}>
                        {label}
                    </button>
                ))}
            </div>

            {/* Tabs Body */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                {data.map(
                    ({ value, images }) =>
                        activeTab === value && (
                            <div
                                key={value}
                                className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {images.map(({ imageLink }, index) => (
                                    <div key={index}>
                                        <img
                                            className="h-[300px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
                                            src={imageLink}
                                            alt={`Gallery image ${index + 1}`}
                                            onClick={() => openImage(imageLink)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )
                )}
            </div>

            {/* Modal for Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleOverlayClick}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="md:w-[70vw] md:h-[70vh] rounded-lg"/>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={closeImage}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
