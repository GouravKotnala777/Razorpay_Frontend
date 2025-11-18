import type { ReactNode } from "react";

interface SheetTypes{
    isOpen:boolean;
    element:ReactNode;
    rounded?:boolean;
};

function Sheet({element, rounded}:SheetTypes) {


    return(
        <div className="sheet fixed top-4 left-0 mx-2 w-full h-max bg-white z-10"
            //style={{display:isOpen?"block":"none"}}
        >
            <div className="px-10 py-6 [box-shadow:0px_0px_1px_2px_#00000010]"
                style={{borderRadius:rounded?"8px":"0"}}
            >
                {element}
            </div>
        </div>
    )
};

export default Sheet;