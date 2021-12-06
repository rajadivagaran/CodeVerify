import React ,{useState}from 'react'

function Register() {


    const [studentCredtionals,setCreditionals] = useState({studentID:"",studentName :"",password=""});


    let Register = () =>{
        let xhr = new XMLHttpRequest();
        
            xhr.onload = function() {
                console.log(JSON.parse (this.responseText));
                // resolve(JSON.parse (this.responseText));
            }
            xhr.onerror = function(){
                reject(new Error("Error"));
            }
            xhr.open("POST","", true);
        
            xhr.send();
    }

    return (
        <div>
            <fieldset class="loginField">
                    <label for="username">Username:</label>
                    <input type="text" id="username" value="studentName" name="username" 
                    onChange={(e)=>setCreditionals({studentName = e.target.value})} required autofocus />



                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" 
                    onChange={(e)=>setCreditionals({password = e.target.value})} required />


                    <label for="confirmpassword">ConfirmPassword:</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" required />



                    <button id="registerBtn" class="tooltip" onClick={Register}>Register<span 
                    class="tooltiptext">New Registration</span></button>
                </fieldset>
        </div>
    )
}

export default Register
