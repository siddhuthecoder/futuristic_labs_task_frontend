import React, { useState } from 'react';

export const HeaderComponent = ({ text, link }) => {
  const [headerText, setHeaderText] = useState(text);
  const [headerLink, setHeaderLink] = useState(link);

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-md p-4">
      <input
        type="text"
        value={headerText}
        onChange={(e) => setHeaderText(e.target.value)}
        placeholder="Header Text"
        className="bg-gray-800 text-white px-3 py-2 mb-2 rounded-md focus:outline-none focus:bg-gray-700"
      />
      <input
        type="text"
        value={headerLink}
        onChange={(e) => setHeaderLink(e.target.value)}
        placeholder="Header Link"
        className="bg-gray-800 text-white px-3 py-2 mb-2 rounded-md focus:outline-none focus:bg-gray-700"
      />
      <div className="w-full flex mt-3 items-center justify-between h-[50px]">
        <a href={headerLink} className="text-green-500 hover:underline">
          <h1 className="text-3xl text-green-500 logo  font-bold">{headerText} <span className="font-bold text-5xl text-red-500">.</span></h1>
        </a>
        <div className="flex gap-3 items-center">
          <span className="text-green-500 font-bold ">Home</span>
          <span className="text-green-500 font-bold ">Contact</span>
        </div>
      </div>
      
    </div>
  );
};


export const FooterComponent = ({ text, link }) => {
  const [footerText, setFooterText] = useState(text);
  const [footerLink, setFooterLink] = useState(link);

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-md p-4 mt-4">
      <input
        type="text"
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
        placeholder="Footer Text"
        className="bg-gray-800 text-white px-3 py-2 mb-2 rounded-md focus:outline-none focus:bg-gray-700"
      />
      <input
        type="text"
        value={footerLink}
        onChange={(e) => setFooterLink(e.target.value)}
        placeholder="Footer Link"
        className="bg-gray-800 text-white px-3 py-2 mb-2 rounded-md focus:outline-none focus:bg-gray-700"
      />
      <div className="w-full flex-wrap flex mt-3 items-center justify-evenly h-[50px]">
        <a href={footerLink} className="text-green-500 hover:underline">
          <h1 className="text-3xl text-green-500 logo  font-bold">{footerText} <span className="font-bold text-5xl text-red-500">.</span></h1>
        </a>
        <div className="flex  ms-3  flex-col">
          <span className=" text-zinc-500 ">Home</span>
          <span className=" text-zinc-500 ">Contact</span>
        </div>
        <div className="flex  ms-3  flex-col">
          <span className=" text-zinc-500 ">About</span>
          <span className=" text-zinc-500 ">Cources</span>
        </div>
        <div className="flex  ms-3  flex-col">
          <span className=" text-zinc-500 ">Address</span>
          <span className=" text-zinc-500 ">example@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

