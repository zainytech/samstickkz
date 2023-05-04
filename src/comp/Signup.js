import React from "react";
import './Signup.css'
import { Link } from "react-router-dom";
import {ImGooglePlus} from 'react-icons/im'
import {TfiFacebook} from 'react-icons/tfi'
import {BsApple} from 'react-icons/bs'

function Signup(){
    return(
        <>
        <div class="signup-main">
            <div class="signup-main2">
                <div class="signup-div1">
                Already have an account? <Link to="/login"><span class="signup-div1-txt">Login</span></Link>
                </div>
                <h1 class="signup-div1-resp-txt1">Welcome to WS</h1>
                <h4 class="signup-div1-resp-txt2">Renewable Energy Solutions within your reach. Start investing in the future today.</h4>
                <div class="signup-div2">
                <label>Email:</label><br/><input type="text"></input><br/><br/>
                <label>Password:</label><br/><input type="text"></input>
                </div>
                <div class="signup-div3">
                    <Link to="/home"><button>Sign up</button></Link>
                </div>
                <div class="signup-div4">
                    <h2 class="signup-div1-resp-txt2">or sign up with</h2>
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
export default Signup