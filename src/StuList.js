import { useEffect,useState } from "react";
import "./index.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function StuList(){
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    const [value,setValue]=useState("")
    const option=["Name","Class","City","Mobile"]
    const [sort,setSort]=useState("")
    useEffect(()=>{
        // fetch("http://localhost:3007/Student")
        fetch(`http://localhost:3007/Student?_start=${0}&_end$=${3}`)
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.groupCollapsed(resp)
            setData(resp)
        })
    },[]) 

    const deleteData=(id)=>{
        if(window.confirm("Do you want to delete it..")){
        fetch("http://localhost:3007/Student/"+id,{
            method:"DELETE"
        })
        .then((s)=>{
            alert("Deleted successfully")
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }

const EditData=(id)=>{
    navigate("/empedit/"+id)
}
const DetailsData=(id)=>{
    navigate("/studetails/"+id)
}
const updateUser=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
}
const searchData=async (e)=>{
    e.preventDefault()
    return await axios.get(`http://localhost:3007/Student?q=${value}`)
    .then((res)=>{
        console.log(res)
        setData(res.data)
        setValue("")
    })
}
const loadData=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3007/Student")
    .then((res)=>{
        return res.json()
    })
    .then((resp)=>{
        console.groupCollapsed(resp)
        setData(resp)
    })
}
const sortData=async (e)=>{
    let value=e.target.value
    console.log(value)
    setSort(value)
    return await axios.get(`http://localhost:3007/Student?_sort=${value}&_order=asc`)
    .then((res)=>{
        console.log(res)
        setData(res.data)
        setValue("")
    })
}

    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Student Data Management System</h1>
                </div>
                <div className="card-body">
                <Link to="/form" className="btn btn-success">Add New (+)</Link><br/><br/>
                <form onSubmit={searchData}>
                <input value={value} type="text" placeholder="Filter Records" onChange={updateUser} className="form-control" id="exampleInputPassword1"/><br/>
                <button className="btn btn-primary" type="submit">Search</button>
                <button onClick={loadData} className="btn btn-secondary">Reset</button>
                </form><br/>
                <select value={sort} onChange={sortData}>
                    <option>--Select--</option>
                    {option.map((data)=>(
                         <option>{data}</option>
                    ))}
                   
                </select>

            <table className="table table-borderd">
                <thead className="table-dark text-white">
                    <tr>
                        <th>Student Id</th>
                        <th>Class</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item)=>(

                   
                    <tr key={item.id}>
{/* if we click on check it as print in console  <input type="checkbox" /> */}
                        <td>
                          {item.id}</td> 
                        <td>{item.clas}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.mobile}</td>
                        <td>
                            <button onClick={()=>{deleteData(item.id)}} className="btn btn-danger">Delete</button>

                            <button onClick={()=>{EditData(item.id)}} className="btn btn-primary">Edit</button>

                            <button onClick={()=>{DetailsData(item.id)}} className="btn btn-success">Show Details</button>
                        </td>
                    </tr>
                     ))}
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}
export default StuList;
