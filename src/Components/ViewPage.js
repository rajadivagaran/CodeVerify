// import React from "react";
import "../Stylesheets/ViewPage.css"

function ViewPage() {
    return(

        <div>

        <header>
            <div class="logo">
                {/* <img src="../Images/collegelogo.jpeg" height="60px" width="60px"> */}
            </div>
            <div class="title"> 
                <p>ABC college of Engineering and Technology</p>
            </div>
        </header>
        <section class="navigationBar">
        <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li class="achievementsList">
                <a href="" class="dropdownButton">Achievements</a>
                <div class="dropdownContent">
                    <a href="#">Academics</a>
                    <a href="#">Sports</a>
                    <a href="#">Placements</a>
                </div>
            </li>
            <li><a href="#">Student Details</a></li>
        </ul>
    </section>
    <footer>
        <div class="preFinal">
            <div class="about">
                <p class="footTitle">ABC college of Engineering and Technology</p>
                <p>Abcdef (post),DDDDDDD (via), FFFFFFF,</p>
                <p>Coimbatore – 641 202,Tamil Nadu.</p>
                <p>+91 4259 567894 | +91 0000000000</p>
            </div>
            <div class="links">
                <p class="footTitle">Quick Links</p>
                <a href="#">Academics</a>
                <a href="#">Sports</a>
                <a href="#">Placements</a>

            </div>
            <div class="social">
                <p class="footTitle">Social Media</p>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
            <div class="rights">
                <p>Copyright, ABC College of Engineering and Technology. All Right Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
    );
}
export default ViewPage;