import type { ReactNode } from "react";
import "../../styles/components/marquee.component.css";

interface MarqueePropTypes{
    items:(string|ReactNode)[];
}

function Marquee({items}:MarqueePropTypes) {
    
    return(
        <div className="marquee">
            <div className="marquee-track">
                {
                    items.map((item) => (
                        item
                    ))
                }
            </div>
        </div>
        //<section>

        //</section>
    )
};

export default Marquee;


//.hero_slider{
//    flex-direction: row;
//    padding: 0 10px;
//    .hero_slider_left{
//        /*width: 65vw;*/
//        margin: 0 auto;
//    }
//    .hero_slider_right{
//        width: 45vw;
//        height: 82vh;
//        background-image: url("/hero_slider_img1_bg.avif"), url("/hero_slider_img2.1_bg.avif");
//        background-size: 40% 80%, 80% 100%;
//        background-position: 70%, right;
//        background-repeat: no-repeat, no-repeat;
//        .hero_slider_img{
//            /*margin-left: auto;*/
//            width: 60%;
//            height: 90%;
//            margin-top: auto;

//        }
//    }
//}