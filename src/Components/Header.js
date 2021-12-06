import logo from '../Images/collegelogo.jpeg';
import '../Stylesheets/Header.css';
function Header(){
    return(
        <div>
            <header>
                <div className="logo">
                    <img className="headLogo" src={logo} alt="HeadLogo"/>
                </div>
                <div className="title"> 
                    <p>ABC college of Engineering and Technology</p>
                </div>
            </header>
        </div>
    )
}
export default Header;