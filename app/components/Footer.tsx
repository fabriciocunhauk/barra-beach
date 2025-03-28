"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-primary  py-6 outline">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-red-primary">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-red-primary">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-red-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
