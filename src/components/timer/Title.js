import React, { Component } from 'react';
import '../Styles.css';
import {
    Grid,
    Row,
    Button
} from 'react-bootstrap';

class Title extends Component{


    constructor(){
        super()

        this._handleTimerOnClick = this._handleTimerOnClick.bind(this)
    }

    state = {
        isModalOn: false
    }

    _handleTimerOnClick(){
        this.setState({ isModalOn: !this.state.isModalOn })
    }

    render() {
        const {
            isModalOn
        } = this.state
        return(
            <div>
                <div className="row d-flex justify-content-center timerAreaTextSetTime-todaysschedule pt-4">
                    <h4> <i className="fa fa-clock-o mr-2 mt-4 pt-4 "></i>Today's Schedule</h4>
                </div>
                <div className="row ">
                    <div className="col-3"></div>
                    <div id="CurentTime" className="col-6 pt-2 d-flex justify-content-center timerAreaTextSetTime-current-time">
                    </div>
                    <div id="AddTimer" className="col-3 d-flex justify-content-start" >
                        <Button className= "addTimerButton" onClick={ this._handleTimerOnClick }>+add timer</Button>
                    </div>
                    {
                        isModalOn && <div>This is modal</div>
                    }
                </div>
                <hr/>
            </div>


        )
    }
}

export default Title;

/*<div>
 <div className="row d-flex justify-content-center timerAreaTextSetTime-todaysschedule pt-4">
 <h4> <i className="fa fa-clock-o mr-2 mt-4 pt-4 "></i>Today's Schedule</h4>
 </div>
 <div className="row ">
 <div className="col-3"></div>
 <div id="CurentTime" className="col-6 pt-2 d-flex justify-content-center timerAreaTextSetTime-current-time">
 </div>
 <div id="AddTimer" className="col-3 d-flex justify-content-start" >
 <button id="AddTimerButton" data-toggle="modal" data-target="#AddTimerModal"> +add timer</button>
 </div>
 </div>
 <hr/>
 </div>*/
