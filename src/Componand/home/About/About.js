import Vid from "../../../Media/Videos/Vid.mp4";
import "./AboutUs.css";
function About () {
    return (
        <>
        <div className="About-Us">
            <div className="TextAbout">
                <div className="H4About">Juiseables</div>
                <div className="Text">When you wanna feel your best, when you are flavor obsessed there's only one way to refresh, you just gotta Jamba. For over 25 years we have been bringing the whoa to your whirl'd and the fresh to flavor with our smoothies, bowls, juices and shots. Now you can also taste the impossible with our snacks or stay chill with iced bevvies. Find your nearest Jamba or order ahead, you know you just gotta.</div>
            </div>
            <div className="ImgAbout">
                <img src="https://img.freepik.com/foto-gratis/jarra-agua-pina-grande_23-2148255621.jpg?w=1060&t=st=1688740586~exp=1688741186~hmac=7e67ef4ed829ea0c3a13e826d87c93bee0e1168011bd304f13e6272357f5c106" 
                alt="phot" 
                className="ImgAb" />
                {/* <img src="https://v1.cdnpk.net/videvo_files/video/premium/video0441/large_watermarked/05_klubn_sok_20_put_klubn_FPpreview.mp4" /> */}
            </div>
            <div className="VideoBout">
                <video  className="FirVid" autoPlay loop muted >
                    <source src={Vid} />
                </video>
            </div>
        </div>
        </>
    )
}
export default About;