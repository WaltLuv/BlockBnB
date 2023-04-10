import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
//import FilterMenu from '../components/FilterMenu'
import Listings from '../components/Listings/Listings'
import NewListingModal from '../components/Listings/NewListingModal'
import BookingModal from '../components/Listings/BookingModal'
import { useAirbnb } from '../hooks/useAirbnb'
import Link from "next/link";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  const [showReservedListing, setShowReservedListing] = useState(false)
  const [showNewListingModal, setShowNewListingModal] = useState(false)
  const [showReserveListingModal, setShowReserveListingModal] = useState(false)

  const { userAddress } = useAirbnb()

  return (
    <div>
      <Head>
        <title>Blocklock Rentals</title>
      </Head>

      <Header />
      <main className='pb-20'>
        <div className= 'bg-black text-white'>
        {/*<FilterMenu />*/}
        <section className="flex items-center space-x-2 bg-black text-white">
          <div className="flex justify-center">
            Blocklock Rental Marketplace
          </div>
        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-400" />
          <input
            className="flex-1 outline-none text-black"
            placeholder="Search by seller wallet address"
            type="text"
          />
        </div>

        <Link href="/listing">
          <button className="border-2 border-white px-5 md:px-10 py-2 bg-black text-white hover:bg-purple-600 hover:text-white  cursor-pointer mb-2 mt-2 ">
          List Rental
          </button>
        </Link>
      </section>
      <hr />

      <section className="flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center px-6 bg-black text-white">
        <p className="link">Avatars</p>
        <p className="link">NFT Passports</p>
        <p className="link">Documents</p>
        <p className="link">Inspections</p>
        <p className="link">Titles</p>
        <p className="link hidden sm:inline">Appraisals</p>
        <p className="link hidden md:inline">Photos</p>
        <p className="link hidden md:inline">Videos</p>
        <p className="link hidden sm:inline">3D Models</p>
      </section>
    </div>
      
        <Listings setShowReserveListingModal={setShowReserveListingModal} />

        <NewListingModal
          showNewListingModal={showNewListingModal}
          setShowNewListingModal={setShowNewListingModal}
        />

        <BookingModal
          showReserveListingModal={showReserveListingModal}
          setShowReserveListingModal={setShowReserveListingModal}
        />
      </main>

      <Footer />
    </div>
  )
}
