import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import iconSend from "../../public/images/icon-send.png";
import QRcode from "../../public/images/Qrcode 1.png";
import AppStore from "../../public/images/AppStore.png";
import GooglePlay from "../../public/images/GooglePlay.png";
import Facebook from "../../public/images/facebook.png";
import Twitter from "../../public/images/Icon-Twitter.png";
import Instagram from "../../public/images/icon-instagram.png";
import LinkDin from "../../public/images/Icon-Linkedin.png";
import CopyRight from "../../public/images/icon-copyright.png";

export default function Home() {
  return (
    <>
      <div className="absolute w-[1440px] h-[440px] left-0 top-[1346px] bg-black">
        <div className="absolute flex flex-row justify-center items-start p-0 gap-[87px] w-[1170px] h-[236px] left-[135px] top-[80px] ">
          <div className="flex flex-col items-start p-0 gap-[16px] w-[217px] h-[188px]">
            <div className="flex flex-col items-start p-0 gap-[24px] w-[206px] h-[124px] ">
              <div className=" flex flex-col items-start p-0 gap-[24px] w-[118px] h-[76px]">
                <Image
                  className="w-[118px] h-[24px]"
                  src={Logo}
                  alt="Logo"
                ></Image>
                <button className="w-[101px] h-[28px] font-poppins font-medium text-[20px] leading-[28px] text-[#FAFAFA]">
                  Subscribe
                </button>
                <p className="w-[206px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                  Get 10% off your first order
                </p>
              </div>
            </div>
            <div className="box-border flex flex-row items-center p-[12px_0px_12px_16px] gap-[32px] w-[217px] h-[48px] border-[1.5px] border-[#FAFAFA] rounded-[4px]">
              <p className="w-[130px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA] opacity-40">
                Enter your email
              </p>
              <Image src={iconSend} alt=" iconSend "></Image>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 gap-[24px] w-[175px] h-[180px] ">
            {/* 713 */}
            <p className="w-[81px] h-[28px] font-poppins font-medium text-[20px] leading-[28px] text-[#FAFAFA]">
              Support
            </p>
            <div className="flex flex-col items-start p-0 gap-[16px] w-[175px] h-[128px] ">
              <p className="w-[175px] h-[48px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="w-[175px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                exclusive@gmail.com
              </p>
              <p className="w-[165px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                +88015-88888-9999
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 gap-[24px] w-[123px] h-[236px] ">
            <p className="w-[85px] h-[28px] font-poppins font-medium text-[20px] leading-[28px] text-[#FAFAFA]">
              Account
            </p>
            <div className="flex flex-col items-start p-0 gap-[16px] w-[123px] h-[184px]">
              <p className="w-[94px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                My Account
              </p>
              <p className="w-[123px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Login / Register
              </p>
              <p className="w-[35px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Cart
              </p>
              <p className="w-[61px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Wishlist
              </p>
              <p className="w-[41px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Shop
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 gap-[24px] w-[109px] h-[196px] ">
            {/* 709 */}
            <p className="w-[101px] h-[28px] font-poppins font-medium text-[20px] leading-[28px] text-[#FAFAFA]">
              Quick Link
            </p>
            <div className="flex flex-col items-start p-0 gap-[16px] w-[109px] h-[144px] ">
              <p className="w-[109px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Privacy Policy
              </p>
              <p className="w-[105px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Terms Of Use
              </p>
              <p className="w-[32px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                FAQ
              </p>
              <p className="w-[66px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                Contact
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 gap-[24px] w-[198px] h-[210px]">
            <p className="w-[148px] h-[28px] font-poppins font-medium text-[20px] leading-[28px] text-[#FAFAFA]">
              Download App
            </p>
            <div className="flex flex-col items-start p-0 gap-[8px] w-[198px] h-[110px] ">
              <p className="w-[194px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-[#FAFAFA] opacity-[0.7]">
                Save $3 with App New User Only
              </p>

              <div className="flex flex-row items-center p-0 gap-[8px] w-[198px] h-[84px]">
                <div className="w-[80px] h-[80px] bg-[#000000]">
                  <Image src={QRcode} alt="QRcode"></Image>
                </div>

                <div className="flex flex-col items-start p-0 gap-[4px] w-[110px] h-[84px] ">
                  <div className="w-[110px] h-[40px] bg-[#030406]">
                    <Image src={AppStore} alt="AppStore"></Image>
                  </div>
                  <div className="w-[110px] h-[40px] bg-[#000000]">
                    <Image src={GooglePlay} alt="GooglePlay"></Image>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="flex flex-col items-start p-0 gap-[24px] w-[198px] h-[162px] bg-yellow-600">
              721
            </div> */}

            <div className="flex flex-row items-start p-0 gap-[24px] w-[168px] h-[24px] ">
              {/* 741 */}
              <div className="w-[24px] h-[24px]">
                <Image src={Facebook} alt="Facebook"></Image>
              </div>
              <div className="w-[24px] h-[24px]">
                <Image src={Twitter} alt="Twitter"></Image>
              </div>
              <div className="w-[24px] h-[24px]">
                <Image src={Instagram} alt="Instagram"></Image>
              </div>
              <div className="w-[24px] h-[24px]">
                <Image src={LinkDin} alt="LinkDin"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex flex-col items-center p-0 gap-[16px] w-[1440px] h-[40px] left-0 top-[376px] opacity-40">
          {/* Frame643 */}
          <div className="w-[1440px] h-0 bg-[#000000] opacity-[0.5]">
            <div className="absolute left-0 right-0 top-[-10%] bottom-[-10%] opacity-[0.4] border-[1px] border-[#FFFFFF]"></div>
          </div>
          <div className=" flex flex-row items-center p-0 gap-[12px] w-[337px] h-[24px] opacity-[0.6]">
            <div className=" flex flex-row items-center p-0 gap-[6px] w-[337px] h-[24px]">
              <Image src={CopyRight} alt="CopyRight"></Image>
              <p className="w-[311px] h-[24px] text-white font-poppins text-[16px] leading-[24px]">
                Copyright Rimel 2022. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
