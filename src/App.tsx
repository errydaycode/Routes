import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import {Site} from "./components/Site";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";
import {useWindowSize} from "./hooks/useWindowSize";


function App() {
    const size = useWindowSize()
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>


            <div className={styles.body}>
                { size > 1100
                 ? <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'/page/0'}>Page 1 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page 2 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page 3 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/protected'}>Protected Page</NavLink></S.NavWrapper>
                </div>
                    : <div>=</div>
                }
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default App;
