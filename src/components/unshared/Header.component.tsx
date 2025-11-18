import React, { type Dispatch, type SetStateAction } from "react";
import Sheet from "./../shared/Sheet.shared.component";
import "../../styles/components/header.component.css";
import { NAVITEM_BANKING_PLUS, NAVITEM_CUSTOMER_CARE, NAVITEM_LANGUAGE, NAVITEM_PARTNERS, NAVITEM_PAYMENTS, NAVITEM_PAYROLL, NAVITEM_RESOURCES } from "../../utils/constants";
import { NavItem } from "./../shared/Components.shared.component";
import PaperPiece from "./../shared/PaperPiece.shared.component";
import { RiCustomerService2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface HeaderPropTypes{
  isHeaderVisible:boolean;
  isHamActive:boolean;
  setIsHamActive:Dispatch<SetStateAction<boolean>>;
  glassSurface?:"2px"|"5px"|"8px"|"10px"|"15px";
};

function Header({isHeaderVisible, isHamActive, setIsHamActive, glassSurface}:HeaderPropTypes) {
  //const [open, setOpen] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);



  return (
    <header id="header" className="p-6 fixed w-full z-101 text-white"
      style={{
        top:isHeaderVisible?"0px":"-14%",
        backdropFilter:glassSurface?`blur(${glassSurface})`:"blur(0px)",
        mixBlendMode:isHovering?"normal":"difference",
        //transition:"0.4s"
      }}
    >
        <div className="flex text-[1.1rem] gap-3 justify-between items-center">
          <div className="header_logo_sec flex gap-4">
            <img src="logo_large.jfif" alt="logo_small"
              className="w-[120px]"
            />
          </div>
          <div className="header_nav_sec flex gap-4 ">
            <div id="payments" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Payments <Sheet isOpen={false} rounded={true} element={
              <div className="flex flex-col flex-wrap gap-1 h-[80vh]">
                {
                  NAVITEM_PAYMENTS.map(({label, items}, index) => (
                    <>
                      <div className="text-[0.8rem] h-min text-gray-500 font-semibold">{label}</div>
                      {items.map((item) => (
                        <NavItem Icon={item.Icon} heading={item.heading} para={item.para} haveArrow={index===1} isNew={item.isNew} />
                      ))}
                    </>
                  ))
                }
              </div>
            } /></div>
            <div id="banking" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Banking+ <Sheet isOpen={false} rounded={false} element={
              <div className="flex flex-col flex-wrap gap-1 h-[80vh]">
                {
                  NAVITEM_BANKING_PLUS.map(({label, items}, index) => (
                    <>
                      <div className="text-[0.8rem] h-min p-0 text-gray-500 font-semibold">{label}</div>
                      {items.map((item) => (
                        <NavItem Icon={item.Icon} heading={item.heading} para={item.para} haveArrow={index===1} isNew={item.isNew} />
                      ))}
                    </>
                  ))
                }
              </div>
            } /></div>
            <div id="payroll" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Payroll <PaperPiece isOpen={false} rounded={true} width="250px" left="-80px" top="100%" element={
              <div className="">
                {
                  NAVITEM_PAYROLL.map(({label, items}) => (
                    <div className="">
                      <div className="text-[0.8rem] h-min p-0">{label}</div>
                      {
                        items.map(({heading, isNew}) => (
                          <NavLink to={`/${heading}`} className="text-[1.1rem] mt-2 text-gray-700 flex justify-between cursor-pointer hover:underline">
                            {heading} {isNew&&<span className="text-[0.6rem] px-2 py-0 grid place-items-center bg-green-200 text-green-700 rounded-[7px]">New</span>}
                          </NavLink>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            } /></div>
            <div id="engage" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Engage <Sheet isOpen={false} element={<h1>Sheet 4</h1>} /></div>
            <div id="partners" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Partners <PaperPiece isOpen={false} rounded={true} width="350px" left="-80px" top="100%" element={
              <div className="">
                {
                  NAVITEM_PARTNERS.map(({headings}) => (
                    <div>
                      {
                        headings.map((heading) => (
                          <NavLink to={`/${heading}`} className="text-[1.1rem] mt-2 block text-gray-700 cursor-pointer hover:underline">{heading}</NavLink>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            } /></div>
            <div id="resources" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Resources <Sheet isOpen={false} rounded={true} element={
              <div className="flex justify-between">
                {
                  NAVITEM_RESOURCES.map(({label, items}) => (
                    <div className="">
                      <div className="text-[0.8rem] text-gray-400 mb-6">{label}</div>
                      {
                        items.map(({heading, isNew}) => (
                          <NavLink to={`/${heading}`} className="resources_item cursor-pointer py-2 text-[1.1rem] mt-1 text-gray-700 font-semibold my-5 w-[200px]">
                            <div className="resources_item_left_part"></div>
                            <div className="resources_item_middle_part flex justify-between">{heading} {isNew&&<span className="text-[0.6rem] px-2 py-0 grid place-items-center bg-green-200 text-green-700 rounded-[7px]">New</span>}</div>
                            <div className="resources_item_right_part">&gt;</div>
                          </NavLink>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            } /></div>
            <div id="pricing" className="relative"
             onMouseEnter={()=>{setIsHovering(true)}}
             onMouseLeave={()=>{setIsHovering(false)}}
            >Pricing <Sheet isOpen={false} element={<h1>Sheet 7</h1>} /></div>
          </div>
          <div id="care_lang" className="header_care_lang_sec flex items-center gap-4 ml-auto">
            <div id="customer_care" className="w-10 relative"><RiCustomerService2Line className="text-[25px]" /> <PaperPiece isOpen={false} rounded={true} width="400px" left="-500%" top="87%" element={
              <div className="flex justify-between">
                {
                  NAVITEM_CUSTOMER_CARE.map(({label, headings}) => (
                    <div className="">
                      <div className="text-[0.8rem] text-gray-400 mb-6">{label}</div>
                      {
                        headings.map((heading) => (
                          <h3 className="text-[1.1rem] mt-2 text-gray-700 font-semibold my-10">{heading}</h3>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            } /></div>
            <div id="languages" className="w-10 relative">Lang 
              <PaperPiece isOpen={false} rounded={true} width="180px" left="-200%" top="87%" element={
                <div className="flex justify-between">
                  {
                    NAVITEM_LANGUAGE.map(({label, headings}) => (
                      <div className="">
                        <div className="text-[0.8rem] text-gray-400 mb-6">{label}</div>
                        {
                          headings.map((heading) => (
                            <h3 className="text-[1rem] mt-2 text-gray-700 font-semibold my-4">{heading}</h3>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              } /></div>
            <div><button className="text-yellow-600 border border-yellow-600 px-2 py-1 rounded-sm">Login</button></div>
            <div><button className="bg-yellow-600 text-black px-2 py-1 rounded-sm">SignUp</button></div>
          </div>

          <div className="ham_cont w-[22px] h-[22px] relative hidden">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="border-b-[3px]"></div>
                <div className="border-b-[3px]"></div>
                <div className="border-b-[3px]"></div>
            </div>
            <input type="checkbox" name="" id=""
                className="absolute top-0 left-0 w-full h-full opacity-0"
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setIsHamActive(!isHamActive)
                }}
            />
          </div>
        </div>
    </header>
  );
};

export default Header;