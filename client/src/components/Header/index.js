import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

/* <li className="nav-item active mr-4">
<a className="nav-link text-light danger-hover" href="#">Home <span class="sr-only"></span></a>
</li>
<li class="nav-item mr-4">
<a class="nav-link text-light danger-hover" href="#">Link</a>
</li>
<li class="nav-item mr-4">
<a class="nav-link text-light danger-hover" href="#">Disabled</a>
</li> */
const defaultLinks = [
    {
        linkPath: "/",
        linkName: "Home",
        classes: ["nav-link","text-light","danger-hover"]
    },
    {
        linkPath: "/algebra",
        linkName: "Algebra",
        classes: ["nav-link","text-light","danger-hover"]
    },
    {
        linkPath: "/geometry",
        linkName: "Geometry",
        classes: ["nav-link","text-light","danger-hover"]
    },
    {
        linkPath: "/statistics",
        linkName: "Statistics",
        classes: ["nav-link","text-light","danger-hover"]
    }
]

const loginLink = { linkPath: "/login", linkName: "Login/Signup", classes: ["nav-link","text-light","danger-hover"] }

function Header() {
    const state = useSelector(state => {
        return { user: state.user, activeRoute: state.activeRoute, userLoggedIn: state.userLoggedIn };
    });
    
    const [mainLinks,setMainLinks] = useState(defaultLinks);
    
    useEffect(() => {
        if(state.activeRoute === "/") {
            const tempMain = [...mainLinks];
            
            tempMain[0].classes = tempMain[0].classes.filter(cClass => cClass !== 'navActive');
            tempMain[0].classes.push('navActive');
            setMainLinks(tempMain);
        } else {
            let tempMain = [...mainLinks];
            tempMain = tempMain.map(ob => {
                const newClasses = [];
                for(let i = 0; i < ob.classes.length; i++) {
                    if(ob.classes[i] !== 'navActive') {
                        newClasses.push(ob.classes[i]);
                    }
                }
                if(ob.linkPath === state.activeRoute) {
                    newClasses.push('navActive');
                }
                return { linkName: ob.linkName, linkPath: ob.linkPath, classes: newClasses };
            });
            setMainLinks(tempMain);
        }
    }, [state.activeRoute,mainLinks]);
    

    return(
        <header className="row bg-dark justify-content-between">
            <h1 className="col-md-5 col-12 text-light">React to Math</h1>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-7 col-12">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            mainLinks.map((link, i) => {
                                return(
                                    <li className="nav-item mr-4" key={i}>
                                        <a href={link.linkPath} className={link.classes.join(" ")}>{link.linkName}</a>
                                    </li>
                                )
                            })
                        }
                        {
                            state.userLoggedIn && <li className="nav-item mr-4"><button>Logout</button></li>
                        }
                        {
                            !state.userLoggedIn && (
                            <li className="nav-item mr-4">
                                <a href={loginLink.linkPath} className={loginLink.classes.join(" ")}>{loginLink.linkName}</a>
                            </li>)
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;