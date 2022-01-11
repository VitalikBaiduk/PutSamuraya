import React from 'react';
import classes from "../Login/Login.module.css"


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginComponent = () => {
    debugger
    return (
        <div className={classes.form}>
            <form className={classes.formInner}>
                <div>
                    <input className={classes.input} placeholder="email"/>
                </div>
                <div>
                    <input className={classes.input} placeholder="password" />
                </div>
                <div>
                    <button className={classes.send}>Send</button>
                </div>
            </form>
        </div>
    )
}

export const Login = () => {
    return (
        <>
            <LoginComponent/>
        </>
    )
}
