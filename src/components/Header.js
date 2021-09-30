import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Profile</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               {/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
               <li><a href="images/Resume.pdf" download="Parv_Mital_Resume.pdf">
                      Resume<i class="fa fa-download" style={{ marginLeft: "4px" }}></i>
                   </a>
               </li>
            </ul>
         </nav>
        <div className="row banner">
          <div className="banner-text">
               <h1 className="responsive-headline" style={{ marginBottom: "0px" }}>{resumeData.name}</h1>
               <h3 style={{ color:'#fff', fontFamily:'sans-serif' }}>
                   {resumeData.role} {resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
          <div
              className="row"
              style={{ marginTop: "12%",
                       color: "#fff",
                       fontFamily: "librebaskerville-italic",
                       fontSize: "18px",
              }}>
              <div style={{ marginBottom: "2px" }}>“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.</div>
              <div>“The secret of getting ahead is getting started.” – Mark Twain.</div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
      </React.Fragment>
    );
  }
}