import react from "react";
import Props from "./Props";
import reactDom from 'react-dom';
import {useContext,createContext} from 'react';
import Third from "./Third";

function StateDemo(props){
    // const age = useContext(UserContext);
    return (
        <div>
            <h4>Hello from {props.name}</h4>
            {/* <h5>And my age is {age}</h5> */}
            <Third/>
        </div>
    )
}

export default StateDemo;