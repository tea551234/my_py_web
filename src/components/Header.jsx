//標頭
// log  home 個人資料  專業訓練  在學期間 作品集
import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Header extends Component {
    state = {}
    render() {
        const navStyle = {
            backgroundColor: 'while'
        }

        return (

            <div >

                <header id="header" class="fixed-top d-flex align-items-center">
                    <div class="container d-flex align-items-center">
                        <h1 class="logo me-auto"><a href="index.html">首頁</a></h1>

                        <nav id="navbar" class="navbar order-last order-lg-0">
                            <ul>
                                <li><a class="nav-link scrollto" href="#about">個人資料</a></li>
                                <li><a class="nav-link scrollto " href="#portfolio">專業訓練</a></li>
                                <li><a class="nav-link scrollto" href="#team">學習經歷</a></li>
                                <li class="dropdown"><a href="#"><span>作品集</span> <i class="bi bi-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="#">大學時期</a></li>
                                        <li class="dropdown"><a href="#"><span>資策會時期</span> <i class="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">小專</a></li>
                                                <li><a href="#">個人網站 </a></li>
                                                <li><a href="#">大專 </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>

                    </div>
                </header>

            </div>
        );
    }
}

export default Header;