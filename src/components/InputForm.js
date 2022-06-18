import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";


const StudentInputForm=()=>{
    let navigate=useNavigate();
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
        navigate('/');
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
               {/* <Form onSubmit={submitStudent}>
                <FormGroup className="mb-3">
                    <Label>First Name</Label>
                    <Input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} name="firstName" placeholder="Enter first name" required></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} name="lasttName" placeholder="Enter last name" required></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                </Form> */}

<Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>

        </>
    )
  
}

export default StudentInputForm