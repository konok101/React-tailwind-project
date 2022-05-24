import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefits/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits}= props.option;
    return (
        <div className='bg-white  p-3'>
            <h1 className='bg-indigo-300 py-2 rounded text-2xl font-bold'>{name}</h1>
            <p>
                <span className='font-bold text-5xl'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo </span>
            </p>
            <div >
                <h3 className='text-left text-xl'>Benefits: </h3>
                 {
                     benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                 }
            </div>
             <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>
                 Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
                 </button>
        </div>
    );
};

export default PricingOption;