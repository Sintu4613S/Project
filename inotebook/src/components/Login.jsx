import React, { useState } from 'react'

const Login = () => {
  const host = "http://localhost:5000"
  const [credential, setCredential] = useState({ email: "", password: "" })
  const { email, password } = credential;
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const result = await response.json();
    console.log(result)
    if (result.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', result.authtoken);
      window.location.href = "/"
    }
    else {
      alert("Invalid credentials")
    }
    // console.log("Form submitted");
  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form style={{ width: "50%", margin: " 50px auto" }} onSubmit={HandleSubmit}>
        <div className=" container mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  )
}

export default Login
