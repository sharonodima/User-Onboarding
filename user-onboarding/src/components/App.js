import "../App.css"
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import axios from "axios";
import * as yup from "yup";
import schema from '../validation/Schema'

function App() {
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState({firstName:"", lastName:"",email:"", password:"", terms: false});
  const [formErrors, setFormErrors] = useState({firstName:"", lastName:"",email:"", password:"", terms: false});

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues({firstName:"", lastName:"",email:"", password:"", terms: false}))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <>
    <div className='onboarding'>
      <header><h1>USER ONBOARDING</h1></header>
      <Form
        values={formValues}
        change={inputChange}
        submit={handleSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
    <div className = "users">
      {users.map((user, idx) =>{
        return (
          <div key = {idx}>
            <p>User {idx + 1} is {user.firstName} {user.lastName}, {user.email}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App;
