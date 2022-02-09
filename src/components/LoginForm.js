import React from 'react';
import {connect} from 'react-redux' //The connect() function connects a React component to a Redux store.
import { updateLoginForm } from '../actions/login.js' //import action creator


//basic login form boilerplate
//props get passed into functional component as an argument & object
//const Login = (props, updateLoginForm) => {
const Login = ({loginForm, updateLoginForm}) => {

    //HANDLE CHANGE
    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

     return (
        <form onSubmit={undefined}>
            <input name="username" type="text" value={loginForm.username} placeholder='Username' onChange={handleChange}/>
            <input name="password" type="text" value={loginForm.password} placeholder='Password' onChange={handleChange}/>
            <input type="submit" value="Log In"></input>
        </form>
    )

    //onSubmit is when the form submit button is pressed
    // const handleSubmit = e => {
    //     console.log("submit form")
    //     // e.preventDefault()
    //     // login(loginFormData)
    // }

    // return (
    //     <form onSubmit={undefined}>
    //         <input name="username" type="text" value={props.username} placeholder='Username' onChange={(e) => updateLoginForm({undefined})}/>
    //         <input name="password" type="text" value={props.password} placeholder='Password' onChange={(e) => updateLoginForm({name: e.target.name, value: e.target.value})}/>
    //         <input type="submit" value="Log In"></input>
    //     </form>
    // )
}


// Connect - Extracting data with mapStateToProps
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
//mapState is what connects the data to the store -> take sttate from redux to get what the state is from redux
const mapStateToProps = state => {
    //Gives access to these parts of state as props --> Get the username and password from the store
    //If you dont know this, look at the store in redux
//   return { 
//       username: state.login.username,
//       password: state.login.password
//    }
    return {
        loginForm: state.login
    }
 }
  
 //ability to connect from react-redux
 //returns a component(the Login component)
 //mapstae is the first argument in connect
 //second argument is 
 // export default connect(mapStateToProps, {updateLoginForm: updateLoginForm})(Login)
// export default Login
export default connect(mapStateToProps, {updateLoginForm})(Login)
