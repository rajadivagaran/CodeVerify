import React, { useState, useEffect,useRef} from 'react';
import State from './State';
import reactDom from 'react-dom';


const UserContext = React.createContext("Rajamanickam");
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer
const AgeContext = React.createContext(22);
const AgeProvider = AgeContext.Provider
const AgeConsumer = AgeContext.Consumer

function PropertyDemo(props){
const {name} = props;


const[age,setData] = useState(10);

const [count, setCount] = useState(0);

const previousValue =useRef("");

useEffect(()=>{
    setCount(count+1);
    previousValue.current=age;
},[age]);
  
// useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count + 1);
//     }, 1000);
// },[]);
// function updateData(){
//     setData(age+10);
// }

    // props.name="Abi";
    return(

        <div>
            <h1>Hello {name} , Good Evening.</h1>
            <h1>{age}</h1>
            <h1>I've rendered {count} times!</h1>
            {/* <button onClick={updateData}>UpdateName</button> */}
            <h4>Referenc value :{previousValue.current}</h4>

            <button onClick={() => setData(age+10)}>UpdateName</button>
            <State name="Rajamankickam" age={age}/>

        </div>
        
    )
}

export {UserProvider,UserConsumer}
export {AgeProvider,AgeConsumer}
export default PropertyDemo; 


