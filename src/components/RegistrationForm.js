import React from 'react'

class RegistrationForm extends React.Component {
  render () {
    return (
      <form>
        <label>
          Username:
          <input type='text' name='username' />
        </label>
        <label>
          Password:
          <input type='password' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default RegistrationForm
