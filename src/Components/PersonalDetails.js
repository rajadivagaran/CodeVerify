import react from "react";
import Sidebar from "./HomePage/Sidebar";
import { AboutUs, OurAim, OurVision } from "./HomePageData/About";
import { Services, ServicesOne, ServicesTwo, ServicesThree} from "./HomePageData/MedicalDetails";
import { Events, EventsOne, EventsTwo } from "./HomePageData/ParentDetails";
import Contact from "./HomePageData/ContactDetails";
import Support from "./HomePageData/AttendanceDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import profilepic from '../Images/profilepic.png';
import Options from '../Components/Options';


import '../Stylesheets/PersonalDetails.css' 


function PersonalDetails(){
    return(
        <div className="details">
        <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
    {/* <div className="full">
        <h1>Details</h1>
    </div>
    <div className="det">

        <div className="text">
        <div className="photobox">
            <img className="profilepic" src={profilepic} alt="HeadLogo"/>
        </div>

        </div>
    </div> */}
            <div className="page">
                {/* <aside className="sidenav">
                        <li>Personal Details</li>
                        <li>Personal Details</li>
                        <li>Personal Details</li>
                        <li>Personal Details</li>
                </aside>
                <article>
                    <div className="personal">
                        <p>Personal Details</p>
                    </div>
                </article> */}
            </div>
        </div>
        );
}

export default PersonalDetails;