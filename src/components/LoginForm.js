import React from 'react'
import {connect} from 'react-redux' //The connect() function connects a React component to a Redux store.
import { login } from "../actions/currentUser.js"


//basic login form boilerplate

const Login = (loginFormData) => {


    //onSubmit is when the form submit button is pressed
    const handleSubmit = e => {
        console.log("submit form")
        e.preventDefault()
        login(loginFormData)
    }

    return (
        <form id="login_form" onSubmit={handleSubmit}>
            <input name="username" type="text" value={loginFormData.username} placeholder='Username'/>
            <input name="password" type="text" value={loginFormData.password} placeholder='Password'/>
            <input type="submit" value="Log In"></input>
        </form>

    )

}


// Connect - Extracting data with mapStateToProps
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
function mapState(state) {
    // const { login } = state
  return { 
      loginFormData: state.loginForm
   }
 }
  
  export default connect(mapState, {login})(Login);