import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./Submenu";
import { IconContext } from "react-icons/lib";
import profilepic from "../../Images/profilepic.png";
import '../../Stylesheets/Sidebar.css'

const Nav = styled.div`
background: #15171c;
height: 50px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100%;
display: flex;
justify-content: center;
position:absolute;
top: 174px;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
		{/* <h1
			style={{ textAlign: "center",
					marginLeft: "200px",
					color: "green" }}
		>
			GeeksforGeeks
		</h1> */}
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>

	<div className="full">
    </div>
    <div className="det">

        <div className="Detailstext">
        <div className="photobox">
            <img className="profilepic" src={profilepic} alt="HeadLogo"/>
        </div>
		<div className="info">

			<p>Name:Divagaran</p>
			<p>Department:CSE</p>
			<p>Section:A</p>
			<p>Roll Number:17cs035</p>
		</div>


        </div>
    </div>
	</>
);
};

export default Sidebar;

