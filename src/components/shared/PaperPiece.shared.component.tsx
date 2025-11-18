import type { ReactNode } from "react";

interface PaperPieceTypes{
    isOpen:boolean;
    element:ReactNode;
    rounded?:boolean;
    width?:string;
    top?:string;
    left?:string;
};

function PaperPiece({element, rounded, width, top, left}:PaperPieceTypes) {


    return(
        <div className="paper_piece absolute px-2 pt-8 h-max bg-transparent"
            style={{
                //display:isOpen?"block":"none",
                width:width?width:"200px",
                top:top?top:"0px",
                left:left?left:"0px"
            }}
        >
            <div className="px-4 py-6 [box-shadow:0px_0px_1px_2px_#00000010] bg-white"
                style={{borderRadius:rounded?"8px":"0"}}
            >
                {element}
            </div>
        </div>
    )
};

export default PaperPiece;