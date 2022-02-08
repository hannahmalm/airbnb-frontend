//Components must have capital letter 
//STATEFUL component 1
//Since this is built in redux, need a reducer and action
import React from 'react'
//always need to import action creator
import { connect } from 'react-redux'

//props get passed into a functional component as an argument & object
const Login = ({username, password}) => {
    return (
        <form onSubmit={}>
            <input type="text" onChange={} value={username} name="username" placeholder='username'></input>
            <input type="text" onChange={} value={password} name="password" placeholder='password'></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

//gives argument coming to component
const mapStateToProps = state => {
    //this is what connects the data coming in here to the store
    //what state is needed? Username and Pasword
    //Get the state from the store and lets us use these as props
    username: state.loginForm.username
    pasword: state.loginForm.password
}

export default connect(mapStateToProps)(login);