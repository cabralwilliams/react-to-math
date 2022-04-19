import React from 'react'

function Footer() {
    return (
        <footer className='row bg-dark justify-content-between fixed-bottom'>
            <div className='col-6 d-flex flex-column align-items-center'>
                <h3 className='col-10 text-light'>Happy Learning!</h3>
            </div>
            <div className='col-6 d-flex flex-column align-items-center'>
                <h3 className='col-10 text-light'><i>&copy; Cabral Williams</i></h3>
            </div>
        </footer>
    )
}

export default Footer