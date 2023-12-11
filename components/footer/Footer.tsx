import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import Link from "next/link"
 


const Footer = () => {
  return (
    <div className="border-t border-slate-900 w-full h-32 flex items-center justify-between mt-12 py-10">
      <div>©2023 Laim.prosperity. All rights reserved.</div>
      <div className="social_item">
        <Link href="https://www.facebook.com/t.bilguuntuguldur/" target="_blank"><FaFacebook /></Link>
        <Link href="https://www.instagram.com/tuguldur.tb/" target="_blank"><FaInstagram /></Link>
      </div>
    </div>
  );
};

export default Footer;