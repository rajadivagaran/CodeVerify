import "../Stylesheets/Login.css"

function Login(){
    return(
        <div className="content">
                <fieldset class="loginField">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required autofocus />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit" id="loginBtn">Login</button>
                    <p>If you don't have an account please Register</p>
                    <button id="registerBtn" class="tooltip">Register<span 
                    class="tooltiptext">New Registration</span></button>
                </fieldset>
        </div>
    );
}
export default Login;