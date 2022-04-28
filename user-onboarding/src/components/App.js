import "../App.css"
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import User from '../components/User'
import axios from "axios";
import * as yup from "yup";
import schema from '../validation/Schema'

function App() {
  const [users, setUsers] = useState({firstName:"", lastName:"",email:"", password:"", terms: false});
  const [disabled, setDisabled] = useState(false);
  const [formErrors, setFormErrors] = useState({firstName:"", lastName:"",email:"", password:"", terms: false});

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([res.data, ...users]);
      }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setUsers({...users, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      firstName: users.firstName.trim(),
      lastName: users.lastName.trim(),
      email: users.email.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(users).then(valid => setDisabled(!valid))
  }, [users])

  return (
    <div className='container'>
      <header><h1>USER ONBOARDING</h1></header>
      <Form
        values={users}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}

export default App;
