import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
function FirstViewCom ({scrool, ease}) {
    let scrolback = useRef(null);
    let scrolapple = useRef(null);
    let scrolhalfapple = useRef(null);
    let scrolleaf = useRef(null);
    let OpatityText = useRef(null)
    let botom = useRef(null)

    useEffect(() => {
        let eleback = scrolback.current;
        gsap.fromTo(eleback, {translateX: -1400}, {translateX: 0 ,duration:.5, delay: 1});
        let eleapple = scrolapple.current;
        gsap.fromTo(eleapple, {translateY: -1000}, {translateY: 0 ,duration:.5, delay: 1.2});
        let elescrolhalfapple = scrolhalfapple.current;
        gsap.fromTo(elescrolhalfapple, {translateY: -1000}, {translateY: 0 ,duration:.5, delay: 1.5});
        let elescrolleaf = scrolleaf.current;
        gsap.fromTo(elescrolleaf, {translateY: -1000}, {translateY: 0 ,duration:.5, delay: 1.5});
        let eleOpatityText = OpatityText.current;
        gsap.fromTo(eleOpatityText, {opacity: 0, translateY: 100}, {opacity: 1, translateY: 0,duration:.5, delay: .5});
        
    }, [])

    return (
        <>
        <div className="FirstView">
            <div className="LeftView" ref={OpatityText}>
                <div className="BigText">
                        Get Fresh <br />
                        <span className="FrstCol">Juiceables</span> <br />
                        EveryDay <br />
                </div>
                <div className="SmallText">
                Satrtind at $360 per month, get <br />
                those benefits and more. <br />
                </div>
                {/* <div >
                    <button className="Button">Details</button>
                </div> */}
            </div>
            <div className="RightView">
                <div className="Imges">
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/liquid-fruit.png?raw=true" 
                ref={scrolback}
                alt="apple" className="ImagesFrute1 position"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/juice.png?raw=true" 
                ref={scrolapple}
                alt="apple" className="ImagesFrute2 position"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/apple2.png?raw=true" 
                ref={scrolhalfapple}
                alt="apple" className="ImagesFrute3 position"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/apple1.png?raw=true" 
                ref={scrolleaf}
                alt="apple" className="ImagesFrute4 position"/>
                    <div>
                    <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                <img src="https://github.com/bedimcode/responsive-juice-website/blob/main/assets/img/leaf.png?raw=true" alt="apple" className="ImagesFrute5 position leafImge"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default FirstViewCom;