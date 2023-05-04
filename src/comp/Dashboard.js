import React from "react";
import './Dashboard.css'
import { useState } from "react";
import {BiCopy} from 'react-icons/bi'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from "react-router-dom";
function Dashboard(){
    const [level1, setlevel1] = useState(true);
    const onClicklevel1 = ()=>{
        setlevel1(true);
        setlevel2(false);
        setlevel3(false);

    };
    const [level2, setlevel2] = useState('');
    const onClicklevel2 = ()=>{
        setlevel1(false);
        setlevel2(true);
        setlevel3(false);

    };
    const [level3, setlevel3] = useState('');
    const onClicklevel3 = ()=>{
        setlevel1(false);
        setlevel2(false);
        setlevel3(true);

    };
    return(
        <>
        <div class="dash-main">
        <div class="sk-home-nav">
                <Link to="/home" style={{textDecoration:'none'}}><span>Home</span></Link>
                <Link to="/dashboard" style={{textDecoration:'none'}}><span class="active-nav-item">Dashboard</span></Link>
                <span>Family Tree</span>
                <span>Wallet</span>
                <span>Settings</span>
                <Link to="/" style={{textDecoration:'none'}}><span>Logout</span></Link>
            </div>
        
        
            <div class="dash-container">
                <div class="dash-div1">
                    <h1 class="dash-div1-txt1">Invite a friend and get $15</h1>
                    <h4 class="dash-div1-txt2">Give a friend promo code on $15 and you'll get $15 off your next NFT post.</h4>
                    <div class="dash-div1a">
                        <div class="dash-div1a-box1">
                            <BiCopy class="dash-copy-icon"/><span>GBD21</span>
                        </div>
                        <div class="dash-div1a-box2">
                            Invite Friends
                        </div>
                    </div>
                </div>
                <div class="dash-div2">
                    <div class="dash-div2a">
                        <div class="dash-div2a-box1">
                            <h2 class="dash-div2a-box1-resp-txt">Today Earning</h2>
                            <div class="dash-div1a-box1">
                            <span>99$</span>
                            </div>
                        </div>
                        <div class="dash-div2a-box1">
                            <h2 class="dash-div2a-box1-resp-txt">Active People</h2>
                            <div class="dash-div1a-box1">
                            <span>1900</span>
                            </div>
                        </div>
                        <div class="dash-div2a-box1">
                            <h2 class="dash-div2a-box1-resp-txt">Total People</h2>
                            <div class="dash-div1a-box1">
                            <span>1900</span>
                            </div>
                        </div>
                        <div class="dash-div2a-box1">
                            <h2 class="dash-div2a-box1-resp-txt">Total Revenue</h2>
                            <div class="dash-div1a-box1">
                            <span>999999$</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dash-div3">
                    <div class="dash-div3a">
                        <h1 class="dash-div1-txt1">Team People</h1>
                        <div class="dash-div3a-div1">
                        {level1? <span>Level 1</span>:null}
                        {level2? <span>Level 2</span>:null}
                        {level3? <span>Level 3</span>:null}
                        <AiOutlineDown class="dash-drop-arrow-icon"/>
                        <div class="dash-div3a-div1-hover">
                            <span onClick={onClicklevel1}>Level 1</span>
                            <span onClick={onClicklevel2}>Level 2</span>
                            <span onClick={onClicklevel3}>Level 3</span>
                        </div>
                        </div>
                    </div>
                    <div class="dash-div3b">
                        <table>
                            <tr class="row1">
                                <th>Name</th>
                                <th>Hierarchhy</th>
                                <th>Registration Date</th>
                                <th>Active</th>
                            </tr>
                            {level1? <>
                                <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            </>:null}
                            {level2? <>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            </>:null}
                            {level3? <>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            <tr>
                                <th>Arslan Ahmad</th>
                                <th>3</th>
                                <th>24-April-2023</th>
                                <th>Yes</th>
                            </tr>
                            </>:null}
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard