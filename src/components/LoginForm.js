//Components must have capital letter 
//Since this is built in redux, need a reducer and action
import React from 'react'
import { login } from '../actions/currentUser'

const Login = () => {
    return (
        <form onSubmit={}>
            <input type="text" onChange={} value={} name="username"></input>
            <input type="text" onChange={} value={} name="password"></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

export default login;