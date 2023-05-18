import React, { useEffect, useState } from 'react';
import Middle from '../Middle/Middle';
import Products from '../Products/Products';
import FeatureCard from '../Feature/FeatureCard';
import Stats from '../Stats/Stats';
import Footer from '../Footer/Footer';

const Home = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('products.json')
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProducts()
    },[])

    return (
        <div>
            <Middle></Middle>
            <div className='text-center'>
            <h2 className='font-bold mt-5 text-indigo-500'>Our Kids Castle Product</h2>
            <p className='font-semibold'>Choose your toys from here</p>
            </div>
            {
                products.length > 0 ? 
                <Products products={products}/>
                :
               <div>Loading...</div>
            }
         
            <Products></Products>
            <FeatureCard></FeatureCard>
            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;