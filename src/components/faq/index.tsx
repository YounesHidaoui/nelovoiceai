import React ,{useState} from 'react';
import Image from "next/image";
import Link from "next/link";


interface Section1Props {
  // Define any props here if needed
}

const Section1: React.FC<Section1Props> = () => {
  // const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR."
    }
  ]
  return (
  <section className=' p-10 rounded-md  container mt-20'>
            
    <div className='grid sm:grid-cols-2 sm:gap-20 container mx-auto'>
      <h2 className='font-polysans text-5xl font-bold mb-5'>
      Frequently 
        <br />
        Asked Questions ?
      </h2>

      <div className='flex flex-col gap-0 [&:has([open])_details:not([open])_summary]:text-gray-400'>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Can I create a phone agent that speaks non-English languages?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Yes, you can! NELOVOICE supports voice cloning functionality to create a voice for any language, including French, German, Spanish, and more.
         </p>
         </details>
      
    
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>How many phone calls can NELOVOICE handle at any given time?


          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         NELOVOICE can dispatch or receive thousands of phone calls simultaneously. For further scaling, we provide dedicated infrastructure for your enterprise. Connect with one of our solutions engineers for more information.
         </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Can I create a custom phone agent with my company’s data?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Absolutely. NELOVOICE can fine-tune a custom language model for your enterprise using your prior conversation data. To inquire about a custom model, contact our team.
                  </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Can I use my current number?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Yes, you can easily enable conditional call forwarding with your current telephone provider to integrate with NELOVOICE.
                  </p>
        </details>

          
      
   
    </div>
    </div>

  </section>
  );
};

export default Section1;
