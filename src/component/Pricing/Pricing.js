import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOPtions = [
        { id: 1, name: 'free', price: 20 , benefits: [
            'lifetime free',
            'Unlimited deals',
            'localized deals',
            'Crazy deals',
            'Couples deals',
            'Fantastic deals'
        ]},
        { id: 2, name: ' Regular', price: 40  , benefits: [
            'lifetime free',
            'Unlimited deals',
            'localized deals',
            'Crazy deals',
            'Couples deals',
            'Fantastic deals'
        ] },
        { id: 3, name: 'Premium', price: 80  , benefits: [
            'lifetime free',
            'Unlimited deals',
            'localized deals',
            'Crazy deals',
            'Couples deals',
            'Fantastic deals'
        ]},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl '>Best deals pricing</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptate iusto magnam cupiditate quos, explicabo nam harum molestiae architecto minus, ducimus neque laboriosam. Dolorem saepe delectus earum odit eos qui.</p>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOPtions.map(option => <PricingOption
                         option={option} key={option.id}>

                         </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;