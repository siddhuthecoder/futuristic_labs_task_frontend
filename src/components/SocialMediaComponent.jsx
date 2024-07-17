import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const SocialMediaComponent = () => {
  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  return (
    <div className="border border-gray-700 bg-gray-900 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-green-500 mb-4">Social Media Links</h3>
      <div className="flex flex-col gap-4">
        <label className="text-white">
          Facebook:
          <input
            type="text"
            name="facebook"
            value={links.facebook}
            onChange={handleChange}
            placeholder="Enter Facebook URL"
            className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
          />
        </label>
        <label className="text-white">
          Twitter:
          <input
            type="text"
            name="twitter"
            value={links.twitter}
            onChange={handleChange}
            placeholder="Enter Twitter URL"
            className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
          />
        </label>
        <label className="text-white">
          Instagram:
          <input
            type="text"
            name="instagram"
            value={links.instagram}
            onChange={handleChange}
            placeholder="Enter Instagram URL"
            className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
          />
        </label>
        <label className="text-white">
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={links.linkedin}
            onChange={handleChange}
            placeholder="Enter LinkedIn URL"
            className="block w-full mt-1 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:bg-gray-700"
          />
        </label>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        {links.facebook && (
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-3xl   hover:underline">
            <FaFacebookF />
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-3xl   hover:underline">
            <FaSquareXTwitter />
          </a>
        )}
        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-3xl   hover:underline">
            <LuInstagram />
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 text-3xl  hover:underline">
            <FaLinkedin/>
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialMediaComponent;
