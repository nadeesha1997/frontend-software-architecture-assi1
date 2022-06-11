import React, { useState,useEffect } from "react";
import axios from "axios";

const mapToComponent=(arr)=>{
    let componentlist=arr.map(el=>{
        return(<li key={el.id}>
            <div>
                <div>
                    {el.firstName} {el.lastName}
                </div>
                <div>
                    <button>delete</button><button>details</button>
                </div>
            </div>
        </li>)
    })
    return componentlist;
}

const StudentList=()=>{
    const [students, setStudents] = useState([]);
    useEffect(() => {
      getStudents();
      mapToComponent(students);
    }, [])
    
    const getStudents=()=>{
        axios.get("http://localhost:8080/api").then(r=>setStudents(r.data))
        console.log(students)
    }
    return(
        <>
        <ul>
            {mapToComponent(students)}
        </ul>
        <button onClick={e=>getStudents()}></button>
        </>
    )

}
export default StudentList;