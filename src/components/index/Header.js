import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles.css';

class Header extends Component{

    render()
    {
        return(
            <div className= "row  pt-3">
                <div className="col-2"></div>
                <div className="col-4 d-flex justify-content-start">
                    <img src= "../../images/logo.png" alt="Super timer!"/>
                </div>
                <div className="col-4 d-flex justify-content-end ">
                    <form className="form-row d-flex justify-content-end ">
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control mr-2" placeholder="Email address" required autofocus/>
                            <label for="inputPassword" class="sr-only">Password</label>
                            <input type="password" id="inputPassword" className="form-control " placeholder="Password" required/>
                            <button id="logIn" class="btn btn-custom buttonLogin text-center" type="submit">Login</button>
                    </form>
                </div>
                <div className="col-1"></div>
            </div>
        )
    }
}

export default Header;
