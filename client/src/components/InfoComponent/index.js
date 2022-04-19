import React from 'react'

function InfoComponent({ title, description, sublinks }) {
    return (
        <div className='container pb-3 mb-3 border-bottom border-dark'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start'>
                <div className='d-flex'>
                    <h2>{title}</h2>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <nav className='d-flex justify-content-between navbar navbar-light' id='top'>
                        {
                            sublinks.map((sublink, i) => {
                                return(
                                    <a className='text-primary m-3 nav-link' href={`#${sublink.linkPath}`} key={i}>{sublink.linkName}</a>
                                )
                            })
                        }
                    </nav>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoComponent;