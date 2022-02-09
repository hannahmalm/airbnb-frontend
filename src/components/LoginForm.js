import React from 'react'
import {connect} from 'react-redux' //The connect() function connects a React component to a Redux store.
import { login } from "../actions/currentUser.js"


//basic login form boilerplate



return (
    <form id="login_form" onSubmit={handleSubmit}>
        <input name="username" type="text" onChange={handleChange} value={}/>
        <input name="password" type="text" onChange={handleChange} value={}/>
        <input type="submit" value="Log In"></input>
    </form>

)

//onSubmit is when the form submit button is pressed
const handleSubmit = e => {


}

//onchange is an event that declares when an input is changed. 
const handleChange = e => {

}


// const mapStateToProps = (state) => {
//     return {
//       login: state.user.login
//     }
//   }
  
//   export default connect(mapStateToProps)(withRouter(RightContent));