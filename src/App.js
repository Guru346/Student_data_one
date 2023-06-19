import { BrowserRouter as Router,Routes,Route, Link  } from "react-router-dom"
import StuList from "./StuList";
import StuForm from "./StuForm";
import EmpEdit from "./EmpEdit";
import StuDetails from "./StuDetails";
import Register from "./Register";
import Login from "./Login";


function App(){
    return(
        <div>
            <Router>
                <Routes>
                     <Route path="/list" element={<StuList/>}/> 
                     <Route path="/form" element={<StuForm/>}/>
                     <Route path="/empedit/:empid" element={<EmpEdit/>}/>
                     <Route path="/studetails/:stuid" element={<StuDetails/>}/>
                     <Route path="/login" element={<Login/>}/>
                     <Route path="/" element={<Register/>}/>
                </Routes>
            </Router>

        </div>
    )
}

export default App;


