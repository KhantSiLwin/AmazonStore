import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux';

const CheckOutProduct = ({id,title,price,rating,description,category,image,hasPrime}) => {
    
    const dispatch= useDispatch();

    const addItemToBasket=()=>{
        const product= {id,title,price,rating,description,category,image,hasPrime};
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket=()=>{
        
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain"/>

            {/* Middle */}
            <div className="col-span-3 mx-5" key={id}>
                <p>{title}</p>
                <div className="flex">
             {Array(rating).fill().map((_,i)=>(<StarIcon key={i} className="h-5 text-yellow-500"/>))}
                 
             </div>

             <p className="text-xs my-2 line-clamp-2">{description}</p>

             <div className="mb-5">
                 <Currency quantity={price} currency="GBP"/>
             </div>

             {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5 ">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">Free Next Day Delivery</p>
                </div>
             )}

            </div>
            {/* Right add /remove buttons  */}
           <div className="flex flex-col space-y-2 my-auto justify-self-end">
             <button onClick={addItemToBasket} className="button">Add to Basket</button>
             <button onClick={removeItemFromBasket} className="button">Remove to Basket</button>
           </div>
        </div>
    )
}

export default CheckOutProduct
