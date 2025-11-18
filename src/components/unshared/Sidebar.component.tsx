import { NavLink } from "react-router-dom";
import { type Dispatch, type SetStateAction } from 'react';
import "../../styles/components/header.component.css";
import { FaArrowRight } from "react-icons/fa";
import { NAVITEM_BANKING_PLUS, NAVITEM_PAYMENTS } from "../../utils/constants";
import { NavItem } from "./../shared/Components.shared.component";

export interface SidebarPropTypes {
    isHamActive:boolean;
    setIsHamActive:Dispatch<SetStateAction<boolean>>;
    //isSearchActive:boolean;
    //setIsSearchActive:Dispatch<SetStateAction<boolean>>;
};

function Sidebar({isHamActive, setIsHamActive}:SidebarPropTypes) {
    
    return(
        <aside
            className="sidebar_aside fixed top-0 left-[0%] h-screen w-[101vw] flex justify-between transition-all duration-1000 ease-in-out z-200 bg-amber-600"
            style={{
                left:isHamActive?"0%":"-105%",
                backgroundColor:isHamActive?"rgba(0,0,0,0.86)":"rgba(0,0,0,0.0)"
            }}
        >
            <section className="side_nav_section h-full w-[80%] top-0 left-0 absolute bg-white overflow-y-scroll">
                <div className="flex justify-between items-center p-3">
                    <div className="w-[40%]"><img src="logo_large.jfif" alt="logo_large.jfif" /></div>
                    <NavLink to="/login" className="border border-blue-600 text-blue-600 flex items-center gap-1 text-[22px] px-3 py-2 rounded-[4px] font-semibold">Login<FaArrowRight className="text-[14px] mt-1" /></NavLink>
                </div>
                <nav className="side_nav_nav flex flex-col flex-wrap gap-1 pb-10 text-center text-xl">

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

                    {/*<NavLink to="/home" className="nav_item font-semibold" onClick={() => setIsHamActive(false)}>Home</NavLink>
                    <NavLink to="/my_profile" className="nav_item font-semibold" onClick={() => setIsHamActive(false)}>Profile</NavLink>

                    <NavLink to="/wishlist" className="nav_item font-semibold relative" onClick={() => setIsHamActive(false)}>
                        <span>Wishlist</span>
                        <span className="border-2 text-[12px] font-semibold w-[23px] h-[23px] grid place-items-center rounded-2xl absolute left-[58%] top-[0px] bg-[#b11433] text-white">{2}</span>
                    </NavLink>
                    <NavLink to="/cart" className="nav_item font-semibold relative" onClick={() => setIsHamActive(false)}>
                        <span>Cart</span>
                        <span className="border-2 text-[12px] font-semibold w-[23px] h-[23px] grid place-items-center rounded-2xl absolute left-[58%] top-[0px] bg-[#b11433] text-white">{3}</span>
                    </NavLink>*/}
                </nav>
            </section>
            <section className="side_closer_section h-full w-[20%] absolute top-0 right-0 text-right p-4">
                <div className="w-full h-10 text-center text-white absolute top-10 left-0"
                    style={{
                        opacity:isHamActive?"1":"0"
                    }}
                >X</div>
                <input type="checkbox" name="" id=""
                    className="w-full h-screen transition-all duration-1000 ease-in-out absolute top-0 left-0 opacity-0"
                    onClick={() => {
                        document.body.style.overflow = "unset";
                        setIsHamActive(!isHamActive)
                    }}
                />
            </section>
        </aside>
    )
};

export default Sidebar;