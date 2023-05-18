import React from 'react';

const Middle = () => {
    return (
        <>
            <section className="text-gray-600 body-font mt-20">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Kids Castle
                        </h1>
    
                        <p className="mb-8 leading-relaxed">
                            Sports toys are popular among children and sports enthusiasts. <br /> They allow individuals to engage in physical activity and develop various skills while having fun.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Middle;