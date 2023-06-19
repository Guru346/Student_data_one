

// import Login from "./Login.js";
import React from "react";
import "./Register.css"
import { Link }  from "react-router-dom";
class Register extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            email:"",
            pswd:"",
            cpswd:""
        }
    }
    updateUser =(e)=>{
console.log(e.target.value)
this.setState({
    user:e.target.value
})
    }
    updateEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    updatePassword=(e)=>{
        this.setState({
            pswd:e.target.value
        })
    }
    updateCpassword=(e)=>{
        this.setState({
            cpswd:e.target.value
        })
    }

    submitData=(e)=>{
        e.preventDefault()
        const UserRegex = /^[a-zA-Z0-9]{6,}$/;
        const PasswordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if(!UserRegex.test(this.state.user)){
            alert("username should contain  6 alpha numeric value")
        }else if(!PasswordRegex.test(this.state.pswd)){
            alert("password should contain valid characters")
        }
        // if(this.state.user.length <=5){
        //     alert("enter valid user name")
        // }
        else if(this.state.pswd !== this.state.cpswd){
            alert("password does not match")
        }
        else{
            alert("successfuly registered")
            this.storeData()
        }
    }

    storeData=()=>{
        localStorage.setItem("user",this.state.user)
        localStorage.setItem("email",this.state.email)
        localStorage.setItem("pswd",this.state.pswd)
    }
    render(){
        return(
            <div className="bodyone">
            <div className="containerone"> 
                <h1>Registration</h1>
                <form onSubmit={this.submitData}>
                    <label>UserName:</label>
                    <input value = {this.state.user}  onChange={this.updateUser} required type="text"></input>
                    <br></br><br></br>
                    <label>Email:</label>
                    <input value = {this.state.email} onChange={this.updateEmail} required type="email" ></input>
                    <br></br><br></br>
                    <label>Password:</label>
                    <input value = {this.state.pswd} onChange={this.updatePassword} required type="password" ></input>
                    <br></br><br></br>
                    <label>Confirm Password:</label>
                    <input value = {this.state.cpswd} onChange={this.updateCpassword} required type="password" ></input>
                    <br></br><br></br>
                    {/* <input type="submit" value="Register"></input> */}

                    <Link className="btn btn-secondary" to="/login">Register</Link>
                </form>
                {/* <Login></Login> */}
            </div>
            </div>
        )
    }
}
export default Register;






