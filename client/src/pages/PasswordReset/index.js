import React from 'react'

function PasswordReset() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <h2>Password Reset</h2>
            <p>Select the option based on your account type.</p>
            <div className='d-flex flex-column col-9 align-items-center'>
                <form className='d-flex flex-column'>
                    <div className='d-flex btn-group btn-group-toggle'>
                        <label class="btn btn-secondary">
                            <input type="radio" name="accountType" id="student" autocomplete="off" /> Student
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="accountType" id="administrator" autocomplete="off" /> Administrator
                        </label>
                        <label class="btn btn-secondary">
                            <input type="radio" name="accountType" id="superAdministrator" autocomplete="off" /> Super Admin
                        </label>
                    </div>
                    <div className='form-group pb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email' className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-primary col-7 col-md-5'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordReset;