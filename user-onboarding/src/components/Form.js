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
      <div className='submit'>

        <div className='errors'>
          <div>{errors.firstName}</div>
          <div>{errors.lastName}</div>
          <div>{errors.email}</div>
        </div>
      </div>

      <div className='inputs'>
        <label>First Name
          <input
            value={values.firstName}
            onChange={onChange}
            name='firstName'
            type='text'
          />
        </label>

        <label>Last Name
          <input
            value={values.lastName}
            onChange={onChange}
            name='lastName'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>
        <label>Terms of Service
          <input
            checked={values.terms}
            onChange={onChange}
            name='terms'
            type='checkbox'
          />
        </label>
      </div>
      <button disabled={disabled}>Register</button>
    </form>
  )
}