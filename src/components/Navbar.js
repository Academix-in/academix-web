import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import Drawer from './Drawer';

function Navbar() {

    const [drawerState, setDrawerState] = useState(false);

    const loginHandle = () => {
        setDrawerState(true);
        document.querySelector('body').classList.add("drawer-open");
    }

    const closeHandle = () => {
        setDrawerState(false);
        document.querySelector('body').classList.remove("drawer-open");
    }

    return (
        <>
            <Drawer drawerState={drawerState} closeHandle={closeHandle} />
            <header>
                <div class="container">
                    <nav>
                        <div class="logo-container">
                            <img class="logo" src="images/logo.png" alt="Logo" />
                        </div>
                        <div class="login-btn" onClick={loginHandle}>Login</div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
