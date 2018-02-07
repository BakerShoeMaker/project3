import React, { Component } from 'react';
import '../Styles.css';

class Title extends Component{

    render()
    {
        return(
           <div>
               <div class="row d-flex justify-content-center timerAreaTextSetTime-todaysschedule pt-4">
                   <h4> <i class="fa fa-clock-o mr-2 mt-4 pt-4 "></i>Today's Schedule</h4>
               </div>

               <div class="row ">
                   <div class="col-3"></div>
                   <div id="CurentTime" class="col-6 pt-2 d-flex justify-content-center timerAreaTextSetTime-current-time">

                   </div>
                   <div id="AddTimer" class="col-3 d-flex justify-content-start" >
                       <button id="AddTimerButton" data-toggle="modal" data-target="#AddTimerModal"> +add timer</button>
                   </div>
               </div>
               <hr/>

           </div>
        )
    }
}

export default Title;

