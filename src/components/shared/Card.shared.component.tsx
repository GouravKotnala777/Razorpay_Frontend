import "../../styles/components/utility.css";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface CartPropTypes{
    Icon:IconType;
    heading:string;
    para:string;
    buttonElement?:ReactNode;
    isHoverActive?:boolean;
}

function Card({Icon, heading, para, buttonElement, isHoverActive}:CartPropTypes) {
    
    return(
        <div className="hover_raise flex flex-col text-[17.6px] gap-1 p-2 rounded-[8px]">
            <div>{Icon&&<Icon />}</div>
            <div className="font-semibold">{heading}</div>
            <div className="text-[#ffffff89]">{para}</div>
            {buttonElement}
        </div>
    )
};

export default Card;