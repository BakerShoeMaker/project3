import React, { Component } from 'react';
import '../Styles.css';

class HeaderLogedIn extends Component{

    render()
    {
        return(
            <div className = "row mr-4 mt-3 ">
                <div className="col-2 ">
                    <img src="images/logo.png" alt="logo"/>
                </div>
                <div className="col-10 d-flex justify-content-end">
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle DropDownButton"  role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" >
                            <i className="fa fa-cog"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" >My Profile</a>
                            <a className="dropdown-item" >Timer</a>
                            <a className="dropdown-item" >Log out</a>
                        </div>
                    </div>
                </div>
            <div className="col-2"></div>
            </div>

        )
    }
}

export default HeaderLogedIn;
