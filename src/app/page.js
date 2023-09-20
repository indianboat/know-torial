"use client";

import Image from "next/image";
import Accordion from "./components/Accordion";
import { useState } from "react";
import {IoLogoWhatsapp} from "react-icons/io";
import ThemeMode from "./components/ThemeMode";

export default function Home() {

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordions = [
    { title: 'experience lightning-fast loading times!', content: 'Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple- we understand that our success is measured by the success of our esteemed clients.' },

    { title: 'best in designing', content: 'Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple- we understand that our success is measured by the success of our esteemed clients.' },

    { title: 'protect your site with hosting and SSL', content: 'Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple- we understand that our success is measured by the success of our esteemed clients.' },
  ];


  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 px-10 py-12">
        <div className="">
          <div className="flex lg:justify-start md:justify-start sm:justify-start justify-center">
          <h1 className="capitalize bg-[#DBEAFE] font-normal text-[#3B82F6] text-md w-fit px-3 rounded py-1">we are leading software company</h1>
          </div>
          <h1 className="capitalize lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:text-left md:text-left sm:text-left text-center font-semibold my-4">your one-stop solution for <span className="text-[#1D4CD4]">all web development needs</span></h1>
          <span className="h-2 flex lg:w-72 md:w-60 sm:w-52 w-full bg-[#1D4CD4] mb-4"></span>
          <p className="lg:text-left md:text-left sm:text-left text-center">Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple- we understand that our success is measured by the success of our esteemed clients.</p>

          <div className="">
            {accordions.map((accordion, index) => (
              <Accordion
                key={index}
                title={accordion.title}
                content={accordion.content}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="">
          <Image src="/images/bg.png" width={800} height={800} alt="background" />
        </div>
      </div>
      <footer className="flex lg:justify-end md:justify-end sm:justify-center justify-center items-center gap-x-3 my-4 px-10">
        <button className="bg-[#16BE45] px-4 py-2 text-md flex justify-center items-center gap-x-2 rounded-full shadow-md text-white font-light">
         <IoLogoWhatsapp className="flex" size={20}/>
          WhatsApp Us</button>
          <ThemeMode />
      </footer>
    </>
  )
}
