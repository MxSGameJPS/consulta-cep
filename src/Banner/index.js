import  "./Banner.css";
import bannerfoto from "./banner.png"

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerfoto} alt=''/>
        </div>
    );
};

export default Banner;