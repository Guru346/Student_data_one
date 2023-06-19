import { useState,useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";



function EmpEdit(){
     const [id,setId]=useState("")
     const [clas,setClass]=useState("")
     const [name,setName]=useState("")
     const [city,setCity]=useState("")
     const [mobile,setMobile]=useState("")

        const navigate=useNavigate()

        const {empid}=useParams()

        useEffect(()=>{
            fetch("http://localhost:3007/Student/"+empid)
            .then((res)=>{
                return res.json()
            })
            .then((resp)=>{
               setId(resp.id)
               setClass(resp.clas)
               setName(resp.name)
               setCity(resp.city)
               setMobile(resp.mobile)
            })
        },[]) 

     const sendData=(e)=>{
                 e.preventDefault()
                 const data={id,clas,name,city,mobile}
                 fetch("http://localhost:3007/Student/"+empid,{
                     method:"PUT",
                     headers:{"Content-type":"application/json"},
                     body:JSON.stringify(data)
                 })
                 .then(()=>{
                     alert("Data saved!..")
                     navigate("/")
                 }) 
                 .catch((err)=>{
                     alert("error"+err)
                 })
            }
    return(
        <div className="container">
             <h1>EDIT STUDENT DATA</h1>
             <form onSubmit={sendData}> 
                 <div className="mb-3">
                     <label  className="form-label">ID</label>
                     <input value={id} type="text" onChange={e=>setId(e.target.value )} disabled="disabled"  className="form-control" />
                
                 </div>
                 <div className="mb-3">
                     <label  className="form-label">Class</label>
                     <input value={clas} type="text" onChange={e=>setClass(e.target.value)} className="form-control" id="exampleInputPassword1" />
                 </div>
                 <div className="mb-3">
                     <label  className="form-label">Name</label>
                     <input value={name} type="text" onChange={e=>setName(e.target.value)} className="form-control" id="exampleInputPassword1" />
                 </div>
                 <div className="mb-3">
                     <label  className="form-label">City</label>
                     <input value={city} type="text" onChange={e=>setCity(e.target.value)} className="form-control" id="exampleInputPassword1" />
                 </div>
                 <div className="mb-3">
                     <label  className="form-label">Mobile</label>
                     <input value={mobile} type="number" onChange={e=>setMobile(e.target.value)} className="form-control" id="exampleInputPassword1" />
                 </div>
                
                
                 <button type="submit" className="btn btn-primary">Submit</button>
                 <Link to="/list" className="btn btn-secondary">Back</Link>
             </form>
            </div>
    )
}
export default EmpEdit;