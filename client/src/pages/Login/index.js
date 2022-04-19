import React from 'react';

function Login() {
    return (
        <div className='d-flex flex-column align-items-center mb-5 pb-5'>
            <h2>Login/Signup</h2>
            <div className='d-flex flex-column col-12 col-md-6 col-lg-4 align-items-center'>
                <span>Click <a href='/admin_login'>here</a> to login as an administrator.</span>
            </div>
            <div className='d-flex flex-column col-12 col-md-6 col-lg-4 align-items-center pb-3'>
                <span>Forgot your password?  Click <a href='/password_reset'>here</a>.</span>
            </div>
            <div className='d-flex flex-column col-7 justify-content-center'>
                <form className='d-flex flex-column mb-5'>
                    <h3>Login</h3>
                    <div className='form-group'>
                        <label htmlFor='loginUsername'>Username or Email</label>
                        <input type='text' id='loginUsername' name='loginUsername' className='form-control' />
                    </div>
                    <div className='form-group pb-5'>
                        <label htmlFor='loginPassword'>Password</label>
                        <input type='password' id='loginPassword' name='loginPassword' className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary col-7 col-md-5' type='submit'>Login</button>
                    </div>
                </form>
                <form className='d-flex flex-column'>
                    <h3>Signup</h3>
                    <div className='form-group'>
                        <label htmlFor='first_name'>First Name</label>
                        <input type='text' id='first_name' name='first_name' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last_name'>Last Name</label>
                        <input type='text' id='last_name' name='last_name' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='signupUsername'>Username</label>
                        <input type='text' id='signupUsername' name='signupUsername' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email' className='form-control' />
                    </div>
                    <div className='form-group pb-5'>
                        <label htmlFor='signupPassword'>Password</label>
                        <input type='password' id='signupPassword' name='signupPassword' className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary col-7 col-md-5' type='submit'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;