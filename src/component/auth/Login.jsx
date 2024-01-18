import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

function Login() {
  const [view,setView] = useState('email');
  const femail = useRef();
  const fmobile = useRef();
  const fpassword = useRef();

  const viewHandler = (val) => {
    setView(val)
  }

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault(); // to avoid page refresh
    try {
      if(view === 'email') {
        let data = {
          email: femail.current.value,
          password: fpassword.current.value
        }
        console.log(`email login = `, data)
      } else {
        let data = {
          mobile: fmobile.current.value,
          password: fpassword.current.value
        }
        console.log(`mobile login = `, data)
      }
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center mt-3">
          <h3 className='display-3 text-primary'>Login</h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-8 offset-md-2 col-sm-12 col-lg-6 offset-lg-3">
          <div className="card">
            <div className="card-header">
              <div className="btn-group d-flex justify-content-center">
                <button onClick={() => viewHandler('email')} className="btn btn-success">Email</button>
                <button onClick={() => viewHandler('mobile')} className="btn btn-warning">Mobile</button>
              </div>
            </div>
            <div className="card-body">
              <form autoComplete='off' onSubmit={submitHandler}>
                {
                  view === "email" ? (
                    <div className="form-group mt-2">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" ref={femail} id="email" className='form-control' required />
                    </div> ) : (
                    <div className="form-group mt-2">
                      <label htmlFor="mobile">Mobile</label>
                      <input type="number" name="mobile" id="mobile" ref={fmobile} className='form-control' required />
                    </div> )
                }
                <div className="form-group mt-2">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" ref={fpassword} className='form-control' required />
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Login" className='btn btn-success' />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <p className="text-end text-danger">
                <strong>Are you a new user</strong>
                <NavLink to={`/register`} className="btn btn-link">Register Here</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login