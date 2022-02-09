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
            <input name="username" type="text" value={loginFormData.username} placeholder='Username' onChange={}/>
            <input name="password" type="text" value={loginFormData.password} placeholder='Password' onChange={}/>
            <input type="submit" value="Log In"></input>
        </form>

    )

}


// Connect - Extracting data with mapStateToProps
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
//mapState is what connects the data to the store -> take sttate from redux to get what the state is from redux
function mapState(state) {
    // const { login } = state
  return { 
      username: state.loginForm.username,
      password: state.loginForm.password
   }
 }
  
 //ability to connect from react-redux
 //returns a component(the Login component)
 //mapstae is the first argument in connect
 //second argument is 
  export default connect(mapState)(Login);