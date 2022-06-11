import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';


const StudentInputForm=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    useEffect(()=>{

    });
    const submitStudent=(e)=>{
        e.preventDefault()
        let postvalue={"firstName":firstName,"lastName":lastName};
        console.log(postvalue);
        axios.post("http://localhost:8080/api",postvalue)
        .then(r=>console.log(r.data));
    };
    return(
        <>
            {/* <form onSubmit={(e)=>submitStudent(e)}>
                <label>
                    First Name : 
                    <input 
                    type="text" 
                    value={firstName} 
                    name="firstName"
                    onChange={(e)=>setFirstName(e.target.value)}/>
                </label>
                <label>
                    Last Name : 
                    <input 
                    type="text" 
                    value={lastName} 
                    name="lastName"
                    onChange={(e)=>setLastName(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form> */}
            <FormControl>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" aria-describedby="my-helper-text"  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <FormHelperText id="my-helper-text">First Name</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" aria-describedby="my-helper-text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <FormHelperText id="my-helper-text">Last Name</FormHelperText>
            </FormControl>

        </>
    )
  
}

export default StudentInputForm