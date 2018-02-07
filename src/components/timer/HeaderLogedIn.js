import React, { Component } from 'react';
import '../Styles.css';

class HeaderLogedIn extends Component{

    render()
    {
        return(
            <div class = "row mr-4 mt-3 ">
                <div class="col-2 ">
                    <img src="assets/images/logo.png"/>
                </div>

                <div class="col-10 d-flex justify-content-end">
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle DropDownButton" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" >
                            <i class="fa fa-cog"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">My Profile</a>
                            <a class="dropdown-item" href="#">Timer</a>
                            <a class="dropdown-item" href="#">Log out</a>
                        </div>
                    </div>
                </div>

            <div class="col-2"></div>
            </div>

        )
    }
}

export default HeaderLogedIn;
