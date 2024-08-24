import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 py-6 border-b bg-white z-0">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="DjangoBnb logo"
              width={180}
              height={38}
            />
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertyButton/>
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
