


import React from "react";
import { Link }  from "react-router-dom";
import "./Login.css"

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            user:"",
            email:"",
            pswd:""
        }
    }
    updateUser=(e)=>{
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
    submitForm=()=>{
        let x=localStorage.getItem("user")
        let y=localStorage.getItem("email")
        let z=localStorage.getItem("password")
        if(this.state.user !== x  ||  this.state.email !== y || this.state.pswd !== z ){
            alert("check the credentials..")
        }
        else{
            alert("logged in!!.")
            // navigate("/stuList");
        }
    }
    render(){
        return(
            <div className="bodytwo">
            <div className="containertwo">
                <h2>Login</h2>
                <form onSubmit={this.submitForm}>
                <label>Username:</label>
                    <input value={this.state.user} type="text" required onChange={this.updateUser}/>
                    <br/><br/>
                    <label>Email:</label>
                    <input value={this.state.email} type="email" required onChange={this.updateEmail}/>
                    <br/><br/>
                    <label>Password:</label>
                    <input value={this.state.pswd} required onChange={this.updatePassword} type="password"/>
                    <br/><br/>
                    {/* <input type="submit" value="Login"/> */}

                    <Link className="btn btn-secondary" to="/list">Login</Link>

                </form>
            </div>
            </div>
        )
    }
}
export default Login;

