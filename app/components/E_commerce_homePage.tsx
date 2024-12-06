import React from 'react'
import Image from "next/image";
import Blackdropdown from "../../public/images/BlackDropDown.png";
import WhiteArrow from "../../public/images/white arrow.png";
import AppleLogo from "../../public/images/1200px-Apple_gray_logo 1.png"
import HeroFrame from "../../public/images/hero_endframe.png"
import Rectangle from "../../public/images/Rectangle 18.png"
import SemiColon from "../../public/images/Semiclone.png"
import RightArrow from "../../public/images/Fill with Right Arrow.png"
import LeftArrow from "../../public/images/Fill With Left Arrow.png"
import card1 from "../../public/images/card 1.png"
import Heart from "../../public/images/Fill Heart.png"
import Eyes from "../../public/images/Fill Eye.png"
import FiveStars from "../../public/images/Five star.png"
import Card2 from "../../public/images/card 2.png"
import FourStars from "../../public/images/Four Star.png"
import Card3 from "../../public/images/card3.png"
import Card4 from "../../public/images/card 4.png"
import FourHalfStars from "../../public/images/Four Half Star.png"
import frame623 from "../../public/images/Frame 623.png"
import CategoryCellphone from "../../public/images/Category-CellPhone.png"
import CategoryComputer from "../../public/images/Category-Computer.png"
import CategorySmartwatch from "../../public/images/Category-SmartWatch.png"
import CategoryCamera from "../../public/images/Category-Camera.png"
import CategoryHeadPhone from "../../public/images/Category-Headphone.png"
import CategoryGaming from "../../public/images/Category-Gamepad.png"
const E_commerce_homePage = () => {
    return (
        <>
            {/* Lines */}
            <div className="absolute w-[384px] h-0 left-[170px] top-[334px] opacity-30  border-black border-[0.5px] rotate-90"></div>
            <div className="  absolute w-[1170px] h-0 left-[1305px] top-[1798px] opacity-30 border-black border-[0.5px] rotate-180"></div>
            <div className="absolute w-[1170px] h-0 left-[1305px] top-[1335px] opacity-30  border-black border-[0.5px] rotate-180"></div>
            {/* frame768 */}
            <div className="absolute flex flex-col items-start p-0 gap-4 w-[217px] h-[344px] left-[135px] top-[182px]">
                <div className="flex flex-row items-start p-0 gap-[51px] w-[217px] h-[24px]">
                    <p className="w-[142px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                        Woman’s Fashion
                    </p>
                    <Image src={Blackdropdown} alt='Blackdropdown' className="w-[24px] h-[24px]"></Image>
                </div>

                <div className=" flex flex-row items-start p-0 gap-[81px] w-[217px] h-[24px]">
                    <p className="w-[112px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                        Men’s Fashion
                    </p>
                    <Image src={Blackdropdown} alt='Blackdropdown' className="w-[24px] h-[24px]"></Image>
                </div>
                <div className="w-[87px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Electronics
                </div>
                <div className="w-[132px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Home & Lifestyle
                </div>
                <div className="w-[73px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Medicine
                </div>
                <div className="w-[137px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Sports & Outdoor
                </div>
                <div className="w-[109px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Baby’s & Toys
                </div>
                <div className="w-[131px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Groceries & Pets
                </div>
                <div className="w-[128px] h-[24px] text-center text-black font-poppins text-[16px] leading-[24px] font-normal">
                    Health & Beauty
                </div>
            </div>
            {/* image */}
            <div className="absolute w-[892px] h-[344px] left-[413px] top-[182px] bg-black">

                <div className="flex items-center gap-[12px] absolute w-[110px] h-[14px] left-[353px] top-[319px] p-0">
                    {/* 883 */}
                    <div className="w-[12px] h-[12px] bg-white opacity-50 rounded-full"></div>
                    <div className="w-[12px] h-[12px] bg-white opacity-50 rounded-full"></div>
                    <div className="w-[14px] h-[14px] ">
                        <div className="absolute w-[14px] h-[14px] left-[48px] top-0 "> </div>
                        <div className="absolute w-[10px] h-[10px] top-[2px] bg-[#DB4444] rounded-full border-2 border-white box-border"> </div>
                    </div>
                    <div className="w-[12px] h-[12px] bg-white opacity-50 rounded-full"></div>
                    <div className="w-[12px] h-[12px] bg-white opacity-50 rounded-full"></div>
                </div>

                <div className=" flex items-center gap-[8px] absolute w-[113px] h-[28px] left-[67px] top-[269px] p-0">
                    {/* 562 */}
                    <div className=" flex flex-col items-start p-0 gap-1 w-20 h-7">
                        <h2 className="flex flex-col items-start p-0 gap-1 w-20 h-7 text-white">Shop Now</h2>
                        <hr className="w-20 h-0 border-1 border-gray-100" />
                    </div>
                    <Image src={WhiteArrow} alt='WhiteArrow'></Image>
                </div>
                <div className="flex items-center gap-[24px] absolute w-[190px] h-[49px] left-[64px] top-[58px] p-0">
                    {/* 563 */}
                    <Image src={AppleLogo} alt='AppleLogo'></Image>
                    <h3 className="w-32 h-5 text-center text-gray-100 font-poppins text-base leading-6">iPhone 14 Series</h3>
                </div>
                <Image src={HeroFrame} alt='HeroFrame' className="absolute w-[496px] h-[302px] left-[396px] top-4"></Image>
            </div>
            {/* frame 728 */}
            <div className=" absolute flex flex-col items-start p-0 gap-10 w-[1308px] h-[493px] left-[135px] top-[666px]">

                <div className=" flex flex-row items-end p-0 gap-[470px] w-[1170px] h-[103px]">
                    {/* 727 */}
                    <div className=" flex flex-row items-end p-0 gap-[87px] w-[600px] h-[103px]">
                        {/* 725 */}
                        <div className=" flex flex-col items-start p-0 gap-6 w-[211px] h-[103px]">
                            {/* 626 */}
                            <div className=" flex flex-row items-center p-0 gap-4 w-[100px] h-[40px]">
                                {/* 625 */}
                                <Image src={Rectangle} alt='Rectangle' className="w-[20px] h-[40px]"></Image>
                                <h2 className="w-[64px] h-[20px] text-[#DB4444] font-semibold text-[16px] leading-[20px]">Today’s</h2>
                            </div>
                            <h2 className="w-[211px] h-[48px] text-[#000000] font-semibold text-[35px] leading-[48px] tracking-[0.04em]">Flash Sales</h2>
                        </div>
                        {/* groups */}
                        <div className=" w-[302px] h-[50px] flex flex-row gap-7">
                            <div className='flex flex-col border-1 border-gray-400 shadow-sm shadow-rgba(0, 0, 0, 0.6) '>
                                <span className="w-[31px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-black">
                                    Days
                                </span>
                                <span className="w-[46px] h-[28px] font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] text-black">
                                    03
                                </span>
                                <Image src={SemiColon} alt='semicolon' className='absolute left-[351px] top-[76px]'></Image>
                            </div>
                            <div>
                                <div className='flex flex-col shadow-sm shadow-rgba(0, 0, 0, 0.6)'>
                                    <span className="w-[31px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-black">
                                        Hours
                                    </span>
                                    <span className="w-[46px] h-[28px] font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] text-black">
                                        23
                                    </span>
                                </div>
                                <Image src={SemiColon} alt='semicolon' className='absolute left-[427px] top-[76px]'></Image>
                            </div>
                            <div>
                                <div className='flex flex-col shadow-sm shadow-rgba(0, 0, 0, 0.6)'>
                                    <span className="w-[31px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-black">
                                        Minutes
                                    </span>
                                    <span className="w-[46px] h-[28px] font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] text-black">
                                        19
                                    </span>
                                </div>
                                <Image src={SemiColon} alt='semicolon' className='absolute left-[500px] top-[76px]'></Image>
                            </div>
                            <div>
                                <div className='flex flex-col shadow-sm shadow-rgba(0, 0, 0, 0.6)'>
                                    <span className="w-[31px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-black">
                                        Seconds
                                    </span>
                                    <span className="w-[46px] h-[28px] font-inter font-bold text-[32px] leading-[30px] tracking-[0.04em] text-black">
                                        56
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrows */}

                    <div className=" flex flex-row items-start p-0 gap-2 w-[100px] h-[46px]">
                        {/* 726 */}
                        <div>
                            {/* left arrow */}
                            <Image src={LeftArrow} alt='LeftArrow'></Image>
                        </div>
                        <div>
                            {/* right arrrow */}
                            <Image src={RightArrow} alt='RightArrow'></Image>
                        </div>
                    </div>
                </div>
                {/* 557 */}

                <div className=" flex flex-row items-start p-0 gap-8 w-[1308px] h-[350px]  ">
                    <div className=" flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card1 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">
                            {/* 570 */}
                            <div className=" absolute w-[190px] h-[180px] top-[165px] left-[40px]"> <Image src={card1} alt='card1'></Image></div>
                            <div>
                                <div className="w-[34px] h-[34px] absolute left-[218px] top-[150px] "><Image src={Heart} alt='Heart'></Image></div>
                                <div className="w-[34px] h-[34px] absolute left-[218px] top-[200px] "><Image src={Eyes} alt='Eyes'></Image></div>
                            </div>
                            <div className="flex flex-row justify-center items-center p-[4px] px-[12px] gap-[5px] absolute w-[55px] h-[26px] left-[12px] top-[150px] bg-[#DB4444] rounded-[4px] text-white">-40%</div>
                        </div>
                        <div className=" flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
                            <h2 className="w-[201px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-black">
                                HAVIT HV-G92 Gamepad
                            </h2>
                            <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px] ">
                                <h3 className="flex flex-row items-start p-0 gap-3 w-[85px] h-[24px] text-[#DB4444]">$120</h3>
                                <h3 className="w-[37px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] line-through text-black opacity-50 absolute left-[45px]">$160</h3>
                            </div>
                            <div className=" flex flex-row items-start p-0 gap-2 w-[140px] h-[20px]">
                                <Image src={FiveStars} alt='FiveStars'></Image>
                                <h2 className=" w-[32px] h-[20px] font-poppins font-semibold text-[14px] leading-[21px] text-black opacity-50 ">(88)</h2>
                            </div>
                        </div>
                    </div>


                    <div className=" flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card2 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">
                            <div className=" absolute w-[190px] h-[180px] top-[165px] left-[340px]"><Image src={Card2} alt='Card2'></Image></div>
                            <div className="absolute h-[41px] left-[302px] right-[736px] top-[353px] bottom-0 bg-black rounded-bl-[4px] rounded-br-[4px]">
                                <div className=" absolute w-[96px] h-[24px] left-[95px] top-[10px] font-poppins font-medium text-white text-[16px] leading-[24px]">
                                    Add To Cart
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[34px] h-[34px] absolute left-[525px] top-[150px] "><Image src={Heart} alt='Heart'></Image></div>
                            <div className="w-[34px] h-[34px] absolute left-[525px] top-[200px] "><Image src={Eyes} alt='Eyes'></Image></div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] px-[12px] gap-[5px] absolute w-[55px] h-[26px] left-[315px] top-[150px] bg-[#DB4444] rounded-[4px] text-white">-35%</div>

                        <div className=" flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
                            <h2 className="w-[195px] h-[24px] font-poppins font-medium text-black text-[16px] leading-[24px]">
                                AK-900 Wired Keyboard
                            </h2>
                            <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px] ">
                                <h3 className="flex flex-row items-start p-0 gap-3 w-[85px] h-[24px] text-[#DB4444]">$960</h3>
                                <h3 className="w-[37px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] line-through text-black opacity-50 absolute left-[350px]">$1160</h3>
                            </div>
                            <div className=" flex flex-row items-start p-0 gap-2 w-[140px] h-[20px]">
                                <Image src={FourStars} alt='FourStars'></Image>
                                <h2 className=" w-[32px] h-[20px] font-poppins font-semibold text-[14px] leading-[21px] text-black opacity-50 ">(75)</h2>
                            </div>
                        </div>

                    </div>



                    <div className=" flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card3 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">
                            <div className=" absolute w-[190px] h-[180px] top-[165px] left-[640px]"><Image src={Card3} alt='Card3'></Image></div>
                        </div>
                        <div>
                            <div className="w-[34px] h-[34px] absolute left-[827px] top-[150px] "><Image src={Heart} alt='Heart'></Image></div>
                            <div className="w-[34px] h-[34px] absolute left-[827px] top-[200px] "><Image src={Eyes} alt='Eyes'></Image></div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] px-[12px] gap-[5px] absolute w-[55px] h-[26px] left-[615px] top-[150px] bg-[#DB4444] rounded-[4px] text-white">-30%</div>
                        <div className=" flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
                            {/* 569 */}
                            <h2 className="w-[194px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-black">
                                IPS LCD Gaming Monitor
                            </h2>
                            <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px] ">
                                <h3 className="flex flex-row items-start p-0 gap-3 w-[85px] h-[24px] text-[#DB4444]">$370</h3>
                                <h3 className="w-[37px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] line-through text-black opacity-50 absolute left-[650px]">$400</h3>
                            </div>
                            <div className=" flex flex-row items-start p-0 gap-2 w-[140px] h-[20px]">
                                <Image src={FiveStars} alt='FiveStars'></Image>
                                <h2 className=" w-[32px] h-[20px] font-poppins font-semibold text-[14px] leading-[21px] text-black opacity-50 ">(99)</h2>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card4 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">
                            <div className=" absolute w-[190px] h-[180px] top-[165px] left-[940px]"><Image src={Card4} alt='Card4'></Image></div>
                        </div>
                        <div>
                            <div className="w-[34px] h-[34px] absolute left-[1127px] top-[150px] "><Image src={Heart} alt='Heart'></Image></div>
                            <div className="w-[34px] h-[34px] absolute left-[1127px] top-[200px] "><Image src={Eyes} alt='Eyes'></Image></div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] px-[12px] gap-[5px] absolute w-[55px] h-[26px] left-[920px] top-[150px] bg-[#DB4444] rounded-[4px] text-white">-25%</div>
                        <div className=" flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
                            {/* 569 */}
                            <h2 className="w-[194px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-black">
                                S-Series Comfort Chair
                            </h2>
                            <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px] ">
                                <h3 className="flex flex-row items-start p-0 gap-3 w-[85px] h-[24px] text-[#DB4444]">$370</h3>
                                <h3 className="w-[37px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] line-through text-black opacity-50 absolute left-[950px]">$400</h3>
                            </div>
                            <div className=" flex flex-row items-start p-0 gap-2 w-[140px] h-[20px]">
                                <Image src={FourHalfStars} alt='FourHalfStars'></Image>
                                <h2 className=" w-[32px] h-[20px] font-poppins font-semibold text-[14px] leading-[21px] text-black opacity-50 ">(99)</h2>
                            </div>
                        </div>
                    </div>




                    <div className="flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card5 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">
                            <div className=" absolute w-[190px] h-[180px] top-[165px] left-[1240px]"><Image src={Card4} alt='Card3'></Image></div>
                        </div>
                        <div>
                            <div className="w-[34px] h-[34px] absolute left-[1127px] top-[150px] "><Image src={Heart} alt='Heart'></Image></div>
                            <div className="w-[34px] h-[34px] absolute left-[1127px] top-[200px] "><Image src={Eyes} alt='Eyes'></Image></div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-[4px] px-[12px] gap-[5px] absolute w-[55px] h-[26px] left-[920px] top-[150px] bg-[#DB4444] rounded-[4px] text-white">-25%</div>
                        <div className=" flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">
                            {/* 569 */}
                            <h2 className="w-[194px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-black">
                                IPS LCD Gaming Monitor
                            </h2>
                            <div className="flex flex-col items-start p-0 gap-2 w-[201px] h-[84px] ">
                                <h3 className="flex flex-row items-start p-0 gap-3 w-[85px] h-[24px] text-[#DB4444]">$370</h3>
                                <h3 className="w-[37px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] line-through text-black opacity-50 absolute left-[1450px]">$400</h3>
                            </div>
                            <div className=" flex flex-row items-start p-0 gap-2 w-[140px] h-[20px]">
                                <Image src={FiveStars} alt='FiveStars'></Image>
                                <h2 className=" w-[32px] h-[20px] font-poppins font-semibold text-[14px] leading-[21px] text-black opacity-50 ">(99)</h2>
                            </div>
                        </div>

                    </div>
                    <div className="bg-purple-950 flex flex-col items-start p-0 gap-4 w-[270px] h-[350px]">
                        {/* card6 */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] rounded-[4px]">570</div>
                        <div className="bg-blue-600 flex flex-col items-start p-0 gap-2 w-[201px] h-[84px]">569</div>
                    </div>
                </div>
            </div>
            {/* Frame 601 */}
            <div className=" flex flex-row justify-center items-center p-4 px-12 gap-2 absolute w-[234px] h-[56px] left-[603px] top-[1219px] bg-[#DB4444] rounded-md">
                <button className='text-white'>View All Products</button>
            </div>
            {/* line */}
            <div className="absolute w-[1170px] h-0 left-[130px]  right-[20px]  top-[1335px] opacity-30 border border-black border-t-[0.5px]"></div>
            {/* frame730 */}
            <div className="flex flex-col items-start p-0 gap-[60px] absolute w-[1170px] h-[313px] left-[135px] top-[1415px]">
                <div className="flex flex-row items-end p-0 gap-[691px] w-[1170px] h-[108px]">
                    {/* 729 */}
                    <div className="flex flex-col items-start p-0 gap-[20px] w-[379px] h-[108px]">
                        {/* 624 */}
                        <Image src={frame623} alt='frame623'></Image>
                        <h1 className="w-[379px] h-[48px] font-inter font-semibold text-[36px] leading-[48px] tracking-[0.04em] text-black">
                            Browse By Category
                        </h1>
                    </div>
                    <div className=" flex flex-row items-start p-0 gap-[8px] w-[100px] h-[46px]">
                        {/* 615 */}
                        <div>
                            {/* left arrow */}
                            <Image src={LeftArrow} alt='LeftArrow'></Image>
                        </div>
                        <div>
                            {/* right arrrow */}
                            <Image src={RightArrow} alt='RightArrow'></Image>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start p-0 gap-[30px] w-[1170px] h-[145px]">
                    {/* 597 */}
                    <div className="bg-red-400 box-border w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">
                        <Image src={CategoryCellphone} alt='CategoryCellphone'className="absolute w-[56px] h-[56px] left-[50px] top-[200px]"></Image>
                    </div>
                    <div className="bg-purple-400 box-border w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">2</div>
                    <div className="bg-green-500 box-border w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">3</div>
                    <div className="w-[170px] h-[145px] bg-[#DB4444] shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded-[4px]">4</div>
                    <div className="bg-teal-700 box-border w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">5</div>
                    <div className="bg-yellow-900 box-border w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] rounded-[4px]">6</div>
                </div>
            </div>
        </>
    )
}

export default E_commerce_homePage 