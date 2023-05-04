import React from "react";
import './Home.css'
import { useState } from "react";
import coin from './assets/coin.png'
import coinsilver from './assets/coin-silver.png'
import coinplat from './assets/coin-plat.png'

import { Link } from "react-router-dom";

function Home(){
    const [gold, setgold] = useState(true);
    const onClickgold = ()=>{
        setgold(true);
        setsilver(false);
        setplat(false);

    };
    const [silver, setsilver] = useState('');
    const onClicksilver = ()=>{
        setgold(false);
        setsilver(true);
        setplat(false);

    };
    const [plat, setplat] = useState('');
    const onClickplat = ()=>{
        setgold(false);
        setsilver(false);
        setplat(true);

    };
    return(

        <>
            <div class="sk-home-main">
                <div class="sk-home-nav">
                <Link to="/home" style={{textDecoration:'none'}}><span class="active-nav-item">Home</span></Link>
                <Link to="/dashboard" style={{textDecoration:'none'}}><span>Dashboard</span></Link>
                    <span>Family Tree</span>
                    <span>Wallet</span>
                    <span>Settings</span>
                    <Link to="/" style={{textDecoration:'none'}}><span>Logout</span></Link>
                </div><br/>
                <div class="sk-home-container">
                <h1 class="sk-home-heading-resp">Welcome, Arslan</h1>
                <div class="sk-home-div1">
                    <h3 class="sk-home-heading-resp2">Your total asset portfolio</h3>
                    <h1 class="sk-home-heading-resp">N203,935</h1>
                    <button>Invest Now</button>
                </div>
                <div class="sk-home-div2">
                    <h1 class="sk-home-heading-resp">Best Plans</h1>
                    <div class="sk-home-div2-main">
                    <div onClick={onClickgold} class="sk-home-div2a sk-home-div2a-gold">
                        <h1 class="sk-home-heading-resp">Gold</h1>
                        <h3 class="sk-home-heading-resp2">30% return</h3>
                        <div class="coin-img"><img src={coin}></img></div>
                    </div>
                    <div onClick={onClicksilver} class="sk-home-div2a sk-home-div2a-silver">
                        <h1 class="sk-home-heading-resp">Silver</h1>
                        <h3 class="sk-home-heading-resp2">60% return</h3>
                        <div class="coin-img"><img src={coinsilver}></img></div>
                    </div>
                    <div onClick={onClickplat} class="sk-home-div2a sk-home-div2a-platinum">
                        <h1 class="sk-home-heading-resp">Platinum</h1>
                        <h3 class="sk-home-heading-resp2">90% return</h3>
                        <div class="coin-img"><img src={coinplat}></img></div>
                    </div>
                    </div>
                    <div class="sk-home-div3">
                        <h1 class="sk-home-heading-resp">Current Plans</h1>
                        {gold?
                        <>
                        <h1 class="sk-home-div3-gold sk-home-heading-resp">Gold</h1>
                        <div class="sk-home-div3a">
                            <h3 class="sk-home-heading-resp2">History</h3>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-gold sk-home-heading-resp2">Rp 200.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-gold sk-home-heading-resp2">Rp 150.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Sell “TLKM” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-gold sk-home-heading-resp2">Rp 1.000.240</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                        </div>
                        </>:null}
                        {silver?
                        <>
                        <h1 class="sk-home-div3-silver sk-home-heading-resp">Silver</h1>
                        <div class="sk-home-div3a">
                            <h3 class="sk-home-heading-resp2">History</h3>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-silver sk-home-heading-resp2">Rp 200.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-silver sk-home-heading-resp2">Rp 150.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Sell “TLKM” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-silver sk-home-heading-resp2">Rp 1.000.240</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                        </div>
                        </>:null}
                        {plat?
                        <>
                        <h1 class="sk-home-div3-plat sk-home-heading-resp">Platinum</h1>
                        <div class="sk-home-div3a">
                            <h3 class="sk-home-heading-resp2">History</h3>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-plat sk-home-heading-resp2">Rp 200.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-plat sk-home-heading-resp2">Rp 150.000</h2>
                                <span class="sk-home-div3a-div1-txt1">Sell “TLKM” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                            <div class="sk-home-div3a-div1">
                                <h2 class="sk-home-div3a-div1-txt1-plat sk-home-heading-resp2">Rp 1.000.240</h2>
                                <span class="sk-home-div3a-div1-txt1">Buy “APPL” Stock</span>
                                <span class="sk-home-div3a-div1-txt2">TUE 22 Jun 2020</span>
                            </div>
                        </div>
                        </>:null}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home