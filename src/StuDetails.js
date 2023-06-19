

import { Link, useParams } from "react-router-dom"
import "./Details.css"
import { useEffect } from "react"
import { useState } from "react"


function StuDetails() { 
    const [data,setData]=useState(null)
    const {stuid}=useParams()

    useEffect(()=>{
        fetch("http://localhost:3007/Student/"+stuid)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.groupCollapsed(resp)
            setData(resp)
        })
    },[])  
    return (
        <div className="container-fluid" >
            <div className="card" style={{width: "18rem"}}>
                {data && 
                <div className="card-body">
                    <h5 className="card-title">Student ID : {data.id}</h5>
                    <p className="card-title">Student Class : {data.clas}</p>
                    <p className="card-title">Student Name : {data.name}</p>
                    <p className="card-title">Student City : {data.city}</p>
                    <p className="card-title">Student Mobile : {data.mobile}</p><br/>
                    
                    <Link className="btn btn-danger" to="/list">Back</Link>
                    
                    
                </div>
}
            </div>
        </div>
                
    )
}
export default StuDetails;