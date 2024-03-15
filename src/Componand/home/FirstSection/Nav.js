import { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {scroolHomeFun,scroolAbouFun, scroolServFun, scroolConFun,scroolAbouFunMOP, scroolConFunMOP } from '../../../rtk/Slices/Scrool-Slice';
function Nav () {
    let dispatsh = useDispatch();
    


    let [toggleNav, settoggleNav] = useState(false)

    let toggleNavFun = () => {
    toggleNav ? settoggleNav(false) : settoggleNav(true)
    }
    return (
        <>
        <div className="Nav"> 
            <h3 className="LogoNav"><span className="FrstCol">Juise</span>ables</h3>
            <div className="NavList">
                <ul className="ULnav">
                    <li className="LiNav FrstCol" onClick={() => dispatsh(scroolHomeFun())}>Home</li>
                    <li className="LiNav"  onClick={() => dispatsh(scroolAbouFun())}>About</li>
                    <li className="LiNav" onClick={() => dispatsh(scroolServFun())}>Servece</li>
                    <li className="LiNav" onClick={() => dispatsh(scroolConFun())}>contact</li>
                </ul>
            </div>
                <div><FaListUl className={toggleNav? "IcoToggle" : "Icon"} onClick={toggleNavFun}/></div>
        </div>
                <div className={ toggleNav ? "NavMopile Down" : "NavMopile "}>
                    <div className="NavList2">
                        <ul className="ULnav2">
                    <li className="LiNav2 FrstCol" onClick={() => {
                        dispatsh(scroolHomeFun())
                        toggleNavFun()
                    }}>Home</li>
                        <li className="LiNav2" onClick={() => {
                        dispatsh(scroolAbouFunMOP())
                        toggleNavFun()
                    }}>About</li>
                        <li className="LiNav2" onClick={() => {
                        dispatsh(scroolServFun())
                        toggleNavFun()
                    }}>Servece</li>
                        <li className="LiNav2" onClick={() => {
                        dispatsh(scroolConFunMOP())
                        toggleNavFun()
                    }}>contact</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}
export default Nav