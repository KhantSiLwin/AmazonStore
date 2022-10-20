import Image from 'next/image'
import {MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/outline'
import {signIn,signOut,useSession} from 'next-auth/react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';



export const Header = () => {
    const {data:session}= useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    return (
        <header>
            {/* top nav  */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">

             <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
                <Image
                    onClick={()=>router.push('/')}
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
             </div>

             {/* search  */}
             <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
                 <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                <SearchIcon className="h-12 p-4"/>
             </div>

            {/* right */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut } className="cursor-pointer hover:underline">
                    <p className="hover:underline">
                    {session ? `Hello ,${session.user.name}` :'Sign In'}
                    </p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="cursor-pointer hover:underline">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div onClick={()=>router.push('/checkout')} className="relative cursor-pointer hover:underline flex items-center">
                    <span className="bg-yellow-400 h-4 absolute top-0 right-0 md:right-10 font-bold text-black w-4 rounded-full text-center">
                        {items.length}
                        </span>
                    <ShoppingCartIcon className="h-10" />
                    <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                </div>
            </div>

            </div>

            {/* bottom nav  */}
            <div className="flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white">
                <p className="cursor-pointer hover:underline flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p> 
                <p className="cursor-pointer hover:underline">Prime Video</p>
                <p className="cursor-pointer hover:underline">Amazon Business</p>
                <p className="cursor-pointer hover:underline">Today's Deals</p>
                <p className="cursor-pointer hidden lg:inline-flex hover:underline">Prime Video</p>
                <p className="cursor-pointer hidden lg:inline-flex hover:underline">Prime Video</p>
                <p className="cursor-pointer hidden lg:inline-flex hover:underline">Prime Video</p>
                <p className="cursor-pointer hidden lg:inline-flex hover:underline">Prime Video</p>
            </div>


        </header>
    )
}
