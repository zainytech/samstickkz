import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import {ImGooglePlus} from 'react-icons/im'
import {TfiFacebook} from 'react-icons/tfi'
import {BsApple} from 'react-icons/bs'
function Login(){
    return(
        <>
        <div class="signup-main">
            <div class="signup-main2">
                <div class="signup-div1">
                Don’t have an account yet? <Link to="/"><span class="signup-div1-txt">SignUp</span></Link>
                </div>
                {/* <h1>Welcome to WS</h1> */}
                {/* <h4>Renewable Energy Solutions within your reach. Start investing in the future today.</h4> */}
                <div class="signup-div2">
                <label>Email:</label><br/><input type="text"></input><br/><br/>
                <label>Password:</label><br/><input type="text"></input>
                </div>
                <div class="signup-div3">
                    <Link to="/home"><button>Login</button></Link>
                </div>
                <h5 class="forgot-pass-txt">Forgot your password?</h5>

                <div class="signup-div4">
                    <h2 class="signup-div1-resp-txt2">or login with</h2>
                    <div class="signup-div4-btn">
                        <button><ImGooglePlus/></button>
                        <button><TfiFacebook/></button>
                        <button><BsApple/></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login