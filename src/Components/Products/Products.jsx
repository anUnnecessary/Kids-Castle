import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products = [] }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            products.map(product => {
                                const {_id, title,img, description, ratings, price} = product;
                                return (<div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={img} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-900 text-bold  title-font mb-1">{title}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{description}</h2>
                                        <p className="mt-1 text-md font-semibold">${price}</p>
                                    </div>
                                    <Link to={`/checkout/${_id}`} className="btn btn-outline btn-accent justify-end">Show More Details</Link>
                                </div>
                                )

                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;