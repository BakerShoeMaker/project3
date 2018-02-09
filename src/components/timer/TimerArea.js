import React, { Component } from 'react';
import '../Styles.css';

class TimerArea extends Component{

    render()
    {
        return(
            <div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 d-flex justify-content-center timerAreaTextSetTime-current-time"><div id="NameOfTimerTitle_1">Warm-up</div></div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div id="timeTicker" className="d-flex justify-content-center"  data-play-status="idle">
                            00:00
                        </div>
                    </div>
                    <div className="col-2 "></div>
                </div>

                <div className="row">
                    <div className="col-4 "></div>
                    <div className="col-4 pt-2 mt-2">
                        <div className="progress align-middle">
                            <div id="ProgressBarWidth" className="progress-bar progress-bar-success" role="progressbar" ></div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-start "> <div id="playButton" ></div></div>
                    <div className="col-2 "></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div id="NextUp" className="col-4 d-flex justify-content-center pt-2"> Next up: Lecture </div>
                    <div className="col-4"></div>
                </div>
            </div>

        )
    }
}

export default TimerArea;