import React from 'react';

const FeatureCard = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-bold text-indigo-500 title-font mb-1">Our Kids Castle Products</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Choose your toys from here</h1>
            </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Animal toys</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Animal toys are playthings designed to resemble or represent animals. These toys can come in various forms, such as plush toys, figurines, puzzles, and interactive electronic devices. </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Disney dolls</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Disney dolls are toys that depict characters from Disney movies and franchises. These dolls are often made with attention to detail, resembling the appearance of beloved Disney characters.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium">Electronic Toys</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Electronic toys are playthings that incorporate electronic components and technology to provide interactive and engaging experiences for children. These toys often feature buttons, sensors, lights, sounds, and screens to offer a wide range of functionalities</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureCard;