// import Link from 'next/link';
// import React from 'react';
// import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
// import { IoLogoSkype } from "react-icons/io";

// const Footer = () => {
//     return (
//         <>
//         <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
//           <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
//             {/* Menu Section */}
//             <div className="text-gray-500 w-full sm:w-auto">
//               <h1 className="text-lg md:text-xl font-bold">Menu</h1>
//               <div className='space-y-2'>
//                 <h1><Link href={'/'}>New Arrivals</Link></h1>
//                 <h1><Link href={'/'}>Best sellers</Link></h1>
//                 <h1><Link href={'/'}>Recently viewed</Link></h1>
//                 <h1><Link href={'/'}>Popular this week</Link></h1>
//                 <h1><Link href={'/'}>All Products</Link></h1>
//               </div>
//             </div>

//             {/* Categories Section */}
//             <div className="text-gray-500 w-full sm:w-auto">
//               <h1 className="text-lg md:text-xl font-bold">Categories</h1>
//               <div className='space-y-2'>
//                 <h1><Link href={'/'}>Crockery</Link></h1>
//                 <h1><Link href={'/'}>Furniture</Link></h1>
//                 <h1><Link href={'/'}>Homeware</Link></h1>
//                 <h1><Link href={'/'}>Plant pots</Link></h1>
//                 <h1><Link href={'/'}>Chairs</Link></h1>
//               </div>
//             </div>

//             {/* Company Section */}
//             <div className="text-gray-500 w-full sm:w-auto">
//               <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
//               <div className='space-y-2'>
//                 <h1><Link href='/about'>About us</Link></h1>
//                 <h1><Link href={'/'}>Vacancies</Link></h1>
//                 <h1><Link href={'/'}>Contact us</Link></h1>
//                 <h1><Link href={'/'}>Privacy</Link></h1>
//                 <h1><Link href={'/'}>Return policy</Link></h1>
//               </div>
//             </div>

//             {/* Mailing List Section */}
//             <div className="text-white w-full sm:w-auto">
//               <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
//               <div className='mt-4'>
//                 <input
//                   type="text"
//                   placeholder="your@email.com"
//                   className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
//                 />
//                 <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
//                   Sign up
//                 </button>
//               </div>
//             </div>
//           </div>

//           <hr className='bg-[#4E4D93] my-8' />

//           {/* Footer Bottom Section */}
//           <div className='flex flex-wrap justify-between items-center text-white gap-4'>
//             <div>
//               <h1>Copyright 2022 Avion LTD</h1>
//             </div>
//             <div className='flex gap-4'>
//               <Link href={'/'}><FaLinkedin size={20} /></Link>
//               <Link href={'/'}><FaFacebookSquare size={20} /></Link>
//               <Link href={'/'}><FaInstagram size={20} /></Link>
//               <Link href={'/'}><IoLogoSkype size={20} /></Link>
//               <Link href={'/'}><FaTwitter size={20} /></Link>
//               <Link href={'/'}><FaPinterest size={20} /></Link>
//             </div>
//           </div>
//         </div>
//         </>
    
// );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white min-h-[380px] flex flex-col justify-center items-center px-6 lg:px-20">
      <div className="max-w-[1440px] w-full flex flex-wrap gap-8 lg:gap-[120px]">
        {/* Menu Section */}
        <div className="w-full sm:w-auto">
          <h1 className="font-[ClashDisplay] text-lg md:text-xl mb-4">Menu</h1>
          <ul className="space-y-2 text-[16px] font-[Satoshi]">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="w-full sm:w-auto">
          <h1 className="font-[ClashDisplay] text-lg md:text-xl mb-4">Categories</h1>
          <ul className="space-y-2 text-[16px] font-[Satoshi]">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="w-full sm:w-auto">
          <h1 className="font-[ClashDisplay] text-lg md:text-xl mb-4">Our company</h1>
          <ul className="space-y-2 text-[16px] font-[Satoshi]">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Return policy</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="w-full sm:w-auto">
          <h1 className="font-[ClashDisplay] text-lg md:text-xl mb-4">
            Join our mailing list
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-[300px] h-[48px] px-4 bg-[#2A254B] border border-white rounded-md text-[16px] font-[Satoshi]"
            />
            <button className="h-[48px] px-6 bg-white text-[#2A254B] rounded-md text-[16px] font-[Satoshi]">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full max-w-[1440px] mt-8">
        <hr className="border-[#4E4D93] mb-4" />
        <div className="flex flex-wrap justify-between items-center text-[16px] font-[Satoshi]">
          <div>Copyright 2022 Avion LTD</div>
          <div className="flex gap-4">
            <span className="cursor-pointer">LinkedIn</span>
            <span className="cursor-pointer">Facebook</span>
            <span className="cursor-pointer">Instagram</span>
            <span className="cursor-pointer">Skype</span>
            <span className="cursor-pointer">Twitter</span>
            <span className="cursor-pointer">Pinterest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
