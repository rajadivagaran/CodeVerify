import '../Stylesheets/Footer.css';
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <footer>
        <div className="preFinal">
            <div className="about">
                <p>ABC college of Engineering and Technology</p>
                <p>Abcdef (post),DDDDDDD (via), FFFFFFF,</p>
                <p>Coimbatore – 641 202,Tamil Nadu.</p>
                <p>+91 4259 567894 | +91 0000000000</p>
            </div>
            <div className="links">
                {/* <Link Quick Links/> */}
                <p class="">Quick Links</p>
                <a href="#">Academics</a>
                <a href="#">Sports</a>
                <a href="#">Placements</a>

            </div>
            <div className="social">
                <p class="">Social Media</p>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </div>
        <div className="final">
            <div className="rights">
                <p>Copyright, ABC College of Engineering and Technology. All Right Reserved.</p>
            </div>
        </div>
    </footer>

    );
}
export default Footer;