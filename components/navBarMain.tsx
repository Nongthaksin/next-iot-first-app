import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
  return (
    <div className='flex justify-center space-x-4 p-4 bg-gray-600 text-white'>
        <Link href="/" className="hover:underline font-bold">
            Home
        </Link>
        <Link href="/about" className="hover:underline font-bold">
            About
        </Link>
        <Link href="/contact" className="hover:underline font-bold">
            Contact
        </Link>
    </div>
  )
}
