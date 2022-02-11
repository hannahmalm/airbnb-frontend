//renders register form
//HAS STATE
import React from 'react';
import {connect} from 'react-redux' //The connect() function connects a React component to a Redux store.

const Register = () => {
    return (
        <form onSubmit={undefined}>
            <input name="username" type="text" value={loginForm.username} placeholder='Username' onChange={undefined}/>
            <input name="password" type="text" value={loginForm.password} placeholder='Password' onChange={undefined}/>
            <input type="submit" value="Log In"></input>
        </form>
    )

}