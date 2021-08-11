import React, { useContext } from 'react'

function Drawer(prop) {

    return (
        <div class={prop.drawerState ? "drawer-container" : "drawer-container drawer-closed"}>
            <div class="drawer-bg" onClick={prop.closeHandle}></div>
            <div class="drawer">
                <div class="close-btn" onClick={prop.closeHandle}></div>
                <div class="">
                    <h1>Login</h1>
                    <p>Or <a href="">create a new account</a></p>
                    <form action="">
                        <div class="input-field">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div class="input-field">
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div class="btn btn-primary">Login</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Drawer
