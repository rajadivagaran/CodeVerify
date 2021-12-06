import React,{useState} from "react";
import "../Stylesheets/Login.css"
import axios from "axios"

function Login(){

    const [studentCredtionals,setCreditionals] = useState({studentID:"",studentName :"",password:""});

    let checkLogin = () =>{
         
        let checkdata="";

        axios.get(`https://7yqcnood3j.api.quickmocker.com/${studentCredtionals}`).then(res => {
            checkdata = res.data;
        }).catch(err => {
            console.log(err);
        });
    }



    return(
        <div className="content">
                <fieldset class="loginField">
                    <label for="username">Username:</label>
                    <input type="text" id="username" value="studentName" name="username" 
                    onChange={(e)=>setCreditionals({studentCredtionals : e.target.value})} required autofocus />



                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" 
                    onChange={(e)=>setCreditionals({password : e.target.value})} required />




                    <button type="submit" id="loginBtn" onClick={checkLogin}>Login</button>



                    <p>If you don't have an account please Register</p>



                    <button id="registerBtn" class="tooltip">Register<span 
                    class="tooltiptext">New Registration</span></button>
                </fieldset>
        </div>
    );
}
export default Login;