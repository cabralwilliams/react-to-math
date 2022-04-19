import React from 'react'

function AdminLogin() {
    return (
        <div className='d-flex flex-column align-items-center pb-5 mb-5'>
            <h2>Administrator Login</h2>
            <div className='d-flex flex-column col-12 col-md-6 col-lg-4 align-items-center'>
                <span>Not an administrator?  Click <a href='/login'>here</a> to go back to user login.</span>
            </div>
            <div className='d-flex flex-column col-12 col-md-6 col-lg-4 align-items-center pb-3'>
                <span>Forgot your password?  Click <a href='/password_reset'>here</a>.</span>
            </div>
            <div className='d-flex flex-column col-7 justify-content-center'>
                <form className='d-flex flex-column'>
                    <h3>Login</h3>
                    <div className='form-group'>
                        <label htmlFor='loginUsername'>Username or Email</label>
                        <input type='text' id='loginUsername' name='loginUsername' className='form-control' />
                    </div>
                    <div className='form-group pb-3'>
                        <label htmlFor='loginPassword'>Password</label>
                        <input type='password' id='loginPassword' name='loginPassword' className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary col-7 col-md-5' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;