import React from "react";
import {Nav} from 'react-bootstrap';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import Library from './Library';
import Announcement from "./Announcement";
import Examination from './Examination';
import '../Stylesheets/NavigationBar.css';


function NavigationBar(){


    return(
        <div>

            
            <BrowserRouter>
            <div className="NavBar">
                <Nav.Link as={Link} className="link" to='/' id='home'>Personal Details</Nav.Link>
                <Nav.Link as={Link} className="link" to='/library' id='library'>Library</Nav.Link>
                <Nav.Link as={Link} className="link" to='/Announncement' id='announcement'>Announcement</Nav.Link>
                <Nav.Link as={Link} className="link" to='/Examination' id='examination'>Examination</Nav.Link>

            </div>

                <Switch>
                    <Route exact path="/" component={PersonalDetails} />
                    <Route path="/library" component={Library} />
                    <Route path="/Announcement" component={Announcement} />
                    <Route path="/Examination" component={Examination} />
                </Switch>
            </BrowserRouter>
            
        </div>

    );
}
export default NavigationBar;