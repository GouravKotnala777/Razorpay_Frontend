import type { IconType } from "react-icons";
import { RxComponentPlaceholder } from "react-icons/rx";
import { NavLink } from "react-router-dom";

interface NavItemPropTypes{
    Icon?:IconType;
    heading:string;
    para:string;
    haveArrow?:boolean;
    isNew?:boolean|undefined;
};

export function NavItem({Icon, heading, para, isNew}:NavItemPropTypes) {
    
    return(
        <NavLink to={`/${heading}`} className="flex items-center px-4 py-3 gap-4 hover:[box-shadow:0px_0px_1px_2px_#00000010] rounded-sm cursor-pointer">
            <div className="rounded-2xl text-gray-100 bg-blue-600 grid place-items-center text-[1.1rem] w-7 h-7">{Icon?<Icon />:<RxComponentPlaceholder />}</div>
            <div>
                <h3 className="text-[1.1rem] font-semibold flex justify-between text-black">{heading} {isNew&&<span className="text-[0.6rem] px-2 py-0 grid place-items-center bg-green-100 text-green-700 rounded-[7px]">New</span>}</h3>
                <p className="text-[0.84rem] text-gray-500">{para}</p>
            </div>
        </NavLink>
    )
};