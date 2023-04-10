import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  GlobeAmericasIcon,
  Bars3Icon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import Link from "next/link";


const Header = ({
  publicKey,
  initializeUser,
  initialized,
  transactionPending,
}) => {
  return (
    <header className='sticky top-0 transition-all md:grid md:grid-cols-3 items-center px-10 xl:px-20 py-4 z-50 bg-black text-white border-b'>
      <Link href='/' className='cursor-pointer'>
        <div className='cursor-pointer'>
          <Image src='/logo.png' alt='logo' className='cursor-pointer' height={75} width={75} />
        
        </div>
      </Link>
      <div className='flex-1 flex xl:justify-center px-6 transition-all duration-300'>
          <div className='flex items-center divide-x'>
            <p className='text-white bg-transparent text-sm font-medium px-4'>
              Escrow
            </p>
            <p
              className='text-white bg-transparent text-sm font-medium px-4'
              type='text'
            >
              Buy
            </p>
            <p
              className='text-white bg-transparent text-sm font-medium px-4'
              type='text'
            >
              Sell
            </p>
            <p className='text-white bg-transparent text-sm font-medium px-4'>
              Rent
            </p>
            <p className='text-white bg-transparent text-sm font-medium px-4'>
              Syndicate
            </p>
          </div>
      </div>

      <div className='flex items-center justify-end'>
        <div className='border border-transparent cursor-pointer hover:bg-gray-100 rounded-full px-3 py-2'>
          {/*<a
            className='text-sm font-medium transition-all duration-300 text-gray-800'
            href='#'
          >
            Become a Host
          </a>*/}
        </div>

        <div className='border border-transparent cursor-pointer hover:bg-gray-100 rounded-full p-3'>
          <GlobeAmericasIcon className='h-5 w-5 transition-all duration-300 text-gray-800' />
        </div>
        <ConnectButton />
      </div>
    </header>
    
  )
}

export default Header
