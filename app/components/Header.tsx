import React from "react";
import Image from "next/image";
import dropdownVector from "../../public/images/dropdown-Vector.png";
import Logo from "../../public/images/Logo.png";
import Wishlist from "../../public/images/Wishlist.png";
import cart from "../../public/images/Cart1 with buy.png";
import user from "../../public/images/user.png";
import SearchingComponent from "../../public/images/Search Component Set.png";
import Link from "next/link";
const Header = () => {
  return (
    <>
      {/* top header */}
      <div className="absolute w-[1440px] h-[48px] left-0 top-0 bg-black">
        top header
        <div className="absolute flex flex-row items-start p-0 gap-[231px] w-[859px] h-[24px] right-[136px] top-[12px] ">
          <div className="flex flex-row items-center p-0 gap-[8px] w-[550px] h-[24px] ">
            <p className="w-[474px] h-[18px] font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <h2 className="w-[68px] h-[24px] font-poppins font-semibold text-[14px] leading-[24px] text-center underline text-[#FAFAFA]">
              ShopNow
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center gap-1 w-[78px] h-[24px] ">
            <h2 className="w-[49px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA]">
              English
            </h2>
            {/* dropdown */}
            <div className="w-[24px] h-[24px] ">
              <Image
                src={dropdownVector}
                alt="dropdownVector"
                className="absolute top-[33.33%]  "
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="absolute flex flex-row items-center p-0 gap-[130px] w-[1170px] h-[38px] left-[135px] top-[88px] ">
        <div className="flex flex-row items-start p-0 gap-[160px] w-[645px] h-[24px] ">
          <Image className="w-[118px] h-[24px]" src={Logo} alt="Logo"></Image>

          <div className="flex flex-row items-start p-0 gap-[48px] w-[367px] h-[24px] font-poppins text-base leading-6 text-center text-black">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/contact">Contact</Link></div>
            <div><Link href="/about">About</Link></div>
            <div><Link href="/sign-up"> Sign Up</Link></div>
          </div>
        </div>

        {/* seacrchin componets */}
        <div className="flex flex-row items-center p-0 gap-[24px] w-[395px] h-[38px] ">
          <div className="flex flex-col justify-center items-center p-[7px_12px_7px_20px] gap-[10px] w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px]">
            <Image src={SearchingComponent} alt="SearchingComponent"></Image>
          </div>
          <div className="flex flex-row justify-center items-center p-0 gap-[16px] w-[128px] h-[32px]">
            <div className="w-[32px] h-[32px] ">
              <Image src={Wishlist} alt=" Wishlist"></Image>
            </div>
            <div className="w-[32px] h-[32px] ">
              <Image src={cart} alt="cart"></Image>
            </div>
            <div className="w-[32px] h-[32px] ">
              <Image src={user} alt="user"></Image>
            </div>
          </div>
        </div>
      </div>
      {/* line 03 */}
      <div className="absolute w-[1440px] h-0 left-0 top-[142px]">
      <div className="absolute left-0 right-[-100%] top-0 bottom-[100%] opacity-30 border-[0.5px] border-black transform rotate-180">
      </div>
      </div>
    </>
  );
};

export default Header;
