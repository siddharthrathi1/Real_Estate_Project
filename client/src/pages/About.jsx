import React from 'react';
import logo from '/Black Gold Modern Real Estate Logo.png'; 

export default function About() {
  return (
    <div className='py-10 px-4 max-w-6xl mx-auto'>
       <h1 className='text-4xl font-bold mb-3 text-gray-800' style={{ marginLeft: '80px', marginTop: '20px' }}>About Rathi Estate</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex items-center justify-center'>
        <img src={logo} alt='Rathi Estate' className='w-full md:max-w-md md:max-h-md rounded-lg shadow-md' />
     </div>
        <div>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            Rathi Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            At Rathi Estate, we value integrity, professionalism, and transparency. We understand that real estate transactions can be complex, and we strive to ensure that our clients are fully informed and supported throughout the process. Whether you are a first-time buyer or an experienced investor, we are here to guide you and help you achieve your real estate goals.
          </p>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            Contact us today to learn more about how Rathi Estate can help you with your real estate needs. We look forward to working with you and helping you find your dream home or investment property.
          </p>
        </div>
      </div>
    </div>
  );
}

