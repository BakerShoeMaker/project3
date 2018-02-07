import React, {Component} from 'react';
import  '../Styles.css';

class Hero extends Component{


    render() {

        return (
            <div className="row">
                <div className="col-2 "></div>
                <div className="col-8 d-flex justify-content-center ">
                    <div id ="MainArea" class="col text-center">
                        <div className="jumbotron jumbotron-fluid">

                            <h1 className="display-4">KEEP YOUR CLASS ON TRACK!</h1>
                            <p className="lead">A simple visual tool to help keep your class running smoothly.</p>
                            <div className="mt-5"><button id="bnt_SignUp" type="button" class="btn btn-outline-primary btn-lg"
                                                      data-toggle="modal" data-target="#SignUpForm"> Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 "></div>
            </div>
        )
    }
}

export default Hero;