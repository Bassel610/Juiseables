import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLemon, faAppleWhole, faCarrot, faPepperHot } from '@fortawesome/free-solid-svg-icons'
import "./Service.css"
function Servace ( ){
    return (
        <>
            <div className="Servace">
                <h4 className='H4Serv'>About Our Servece</h4>
                <div className='icon PostionSerc'>
                <FontAwesomeIcon icon={faLemon} className='Ico '/>
                <div className='TextIco'>
                    <h4 className='H4Ico'>Delivery</h4>
                    <p className='PIco'>FasT Delivery</p>
                </div>
                </div>
                <div className='icon'>
                <FontAwesomeIcon icon={faAppleWhole} className='Ico' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Fresh</h4>
                <p className='PIco'>All Our Fruits Is Freshly</p>
                </div>
                
                </div>
                <div className='icon PostionSerc'>
                <FontAwesomeIcon icon={faCarrot} className='Ico ' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Organic</h4>
                <p className='PIco'>The Fruits Is From Our Farm</p>
                </div>
                </div>
                <div className='icon'>
                <FontAwesomeIcon icon={faPepperHot} className='Ico Dis' />
                <div className='TextIco'>
                <h4 className='H4Ico'>Best Test</h4>
                <p className='PIco'>Will Not Found Our Test IN Any Place</p>
                </div>
                </div>
            </div>
        </>
    )
} 

export default Servace;