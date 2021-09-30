import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div style={{ "margin-top": "-36px" }} className="nine columns main-col">
               <h2>About Me</h2>
               <div>
               {
                 resumeData.aboutme.part1
               }
               </div>
               <div>
               {
                 resumeData.aboutme.part2
               }
               </div>
               <br></br>
               <div><b>
               {
                 resumeData.aboutme.part3
               }
               </b></div>
            </div>
         </div>
      </section>
    );
  }
}