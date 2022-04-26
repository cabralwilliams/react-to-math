import React from 'react'

function Home() {
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-column align-items-center mb-3'>
                <h2>Welcome to React to Math!</h2>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <p className='col-10 col-md-8'>
                    Let's get the obvious out of the way first.  The name is a terrible name for an application.  
                    Once I had the idea to create the app, I needed a name.  I couldn't think of anything good at 
                    the moment and didn't want that to be a big holdup, so I just settled on <b className='text-danger'>React to Math</b>.  
                    Maybe I'll go and change it at some later date to create more headaches.
                </p>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <p className='col-10 col-md-8'>
                    This application will ever be under construction, I would imagine.  In the near future, I will enable users 
                    to create accounts to save information and add content to some of the blank pages, but for now the <a href='./algebra' className='text-primary'>Algebra</a> page 
                    has significant content.  Additionally, the <a href='./sample' className='text-primary'>Sample</a> page has a few 
                    practice questions available.  Please start at one of those locations as I work to make the application more robust.
                </p>
            </div>
        </div>
    )
}

export default Home;