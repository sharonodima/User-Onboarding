export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
      }

return (
    <form className='form' onSubmit={onSubmit}>
      <div className='inputs'>
        <label>First Name
          <input
            value={values.firstName}
            onChange={onChange}
            name='firstName'
            type='text'
          />
        </label>
        <div className = "error">{errors.firstName}</div>

        <label>Last Name
          <input
            value={values.lastName}
            onChange={onChange}
            name='lastName'
            type='text'
          />
        </label>
        <div className = "error">{errors.lastName}</div>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <div className = "error">{errors.email}</div>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>
        <div className = "error">{errors.password}</div>
        
        <label>Terms of Service
          <input
            checked={values.terms}
            onChange={onChange}
            name='terms'
            type='checkbox'
          />
        </label>
        <div className = "error">{errors.terms}</div>
      </div>
      <button disabled={disabled}>Register</button>
    </form>
  )
}