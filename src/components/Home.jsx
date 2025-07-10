import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-lg-4 col-md-8 mx-auto">
             <div className='card border  my-4 px-3 home-card'>
            <h3 className='fw-bolder'>Welcome to PopX</h3>
            <p className='fw-semibold opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link className='btn btn-primary fw-bold' to={'/signUp'}>Create Account</Link>
            <Link className='btn btn-light-violet fw-bold mt-3' to={'/login'}>Already Registered? Login</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
