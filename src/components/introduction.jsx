import '../index.css';
import Pdf from './Annika_Amlie_Resume.pdf';

import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            <li style={{backgroundColor: '#FC6A38'}}>
              {/* <li style={{backgroundImage: 'url(images/dark_bkgd3.png)'}}> */}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7", fontSize: '55pt'}}>Hi! <br />I'm Annika</h1>
                          <a className="btn btn-primary btn-learn" href={Pdf} without rel="noopener noreferrer" target="_blank">View CV</a>
                          {/* <p><a className="btn btn-primary btn-learn" href="Annika_Amlie_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View CV<i className="icon-download4" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundColor: '#FC6A38'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7", fontSize:'43pt'}}> I'm a Software Engineer based in NYC</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/avamlie" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundColor: '#FC6A38'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7", fontSize: '39pt'}}>I also run an <br/>Etsy shop ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.etsy.com/shop/ShopAnnikaV" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View Shop <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://www.instagram.com/shopannikav/" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7", marginTop: '10px'}}>View Instagram <i className="icon-instagram"/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
