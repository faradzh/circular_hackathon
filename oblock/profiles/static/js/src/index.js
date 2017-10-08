import React from 'react';
import { Link } from 'react-router';
require('../../css/vendors/bootstrap.css');
require('../../css/stylish-portfolio.css');
const imageSrc = require('../../images/logo-black-navbar.png');

export default class Index extends React.Component {

  render() {
    return (
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top new-navs">
            <div className="container">
              <a className="navbar-brand" href="index.html">oblock</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                      data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active" style={{marginLeft:'50px'}}>
                    <Link to="/login" className="nav-link">Sign In</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="header" id="top">

            <div className="text-vertical-center" style={{color: 'black'}}>
              <img src={imageSrc} style={{width:'auto',height:'200'}} alt=""/>
              <br/>
              <h1>Welcome to your community <br/>make our planet a better place!</h1>
              <br/>
              <h3>Find companies around you who run Earth friendly businesses and get rewards.<br/> Drive humanity
                towards a better future!</h3>
              <br/>
              <a href="#services" className="btn btn-dark btn-lg js-scroll-trigger">TELL ME MORE</a>
              <Link to="/company-sign-up" className="btn btn-dark btn-lg js-scroll-trigger">REGISTER</Link>

            </div>
          </header>

          <section id="contact" className="map">
            <iframe style={{width:'100%',height:'600px'}}
                    src='//www.zeemaps.com/pub?group=2724148&x=24.740868&y=59.431546&z=4'></iframe>
          </section>

          <div className="container" >
              <h1 className="my-4">Offers</h1>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1457545195570-67f207084966?dpr=1&auto=compress,format&fit=crop&w=3169&h=&q=80&cs=tinysrgb&crop=" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">15% discount for a new product</a>
                      </h4>
                      <h6>Textile for life</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1462917882517-e150004895fa?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Free coffee</a>
                      </h4>
                      <h6>EcoCafe</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1486887396153-fa416526c108?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Discount full-grain bread</a>
                      </h4>
                      <h6>TastyPastry</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                  <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1480951759438-f39a376462f2?dpr=1&auto=compress,format&fit=crop&w=3149&h=&q=80&cs=tinysrgb&crop=" alt=""/></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">Second cheese pastry for free</a>
                      </h4>
                      <h6>TastyPastry</h6>
                    </div>
                  </div>
                </div>


              </div>

              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>

            </div>

            <div className="container">

            <h1 className="my-4">Call to Action</h1>

            <div className="row">

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                          <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt=""></img></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#">We need plastic!</a>
                          </h4>
                          <p>Bring us 20kg of plastic</p>
                          <h5>2kg of plastic for 20% discount of our recycled plastic chairs.</h5>
                            <br></br>
                          <h6>Plasticary miracle</h6>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                          <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt=""></img></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#">We need empty bottles!</a>
                          </h4>
                          <p>Bring us at least 20 empty beer bottles and get 15% discount from our next batch of beer.</p>
                          <h5>20 bottles for 15% discount</h5>
                            <br></br>
                          <h6>Beer craftery</h6>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                          <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1442943861491-36a87a01e726?dpr=1&auto=compress,format&fit=crop&w=3150&h=&q=80&cs=tinysrgb&crop=" alt=""></img></a>
                        <div className="card-body">
                          <h4 className="card-title">
                            <a href="#">We need bread and grains!</a>
                          </h4>
                          <p>We ask the community for 50kg of bread and grains to feed our goats.</p>
                          <h5>At least 2kg of bread or grains for goat cheese and milk</h5>
                            <br></br>
                          <h6>CozyFarm</h6>
                        </div>
                      </div>
                    </div>

                  </div>

              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>

              </div>


            <section id="services" className="services bg-primary text-white">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-10 mx-auto">
                    <h2>How oblock works</h2>
                      <hr className="small"></hr>
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="service-item">
                          <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-compass fa-stack-1x text-primary"></i>
                          </span>
                          <h4 className="text-left">
                            <strong>Discover sustainable businesses</strong>
                          </h4>
                          <p className="text-left">Find enviromentally friendly businesses and manufacturers around you. Search by business category, location. </p>

                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-item">
                          <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-thumbs-up fa-stack-1x text-primary"></i>
                          </span>
                          <h4 className="text-left">
                            <strong>Support circular economy</strong>
                          </h4>
                          <p className="text-left">Buying and using services from oblock drives and support circular economy. Help to save Earth resurses and live in a more green and sustainable world.</p>

                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="service-item">
                          <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-trophy fa-stack-1x text-primary"></i>
                          </span>
                          <h4 className="text-left">
                            <strong>Get rewards for a good cause</strong>
                          </h4>
                          <p className="text-left">Members of oblock gets special rewards and become part of the club. For using and buying our members products.</p>

                        </div>
                      </div>

                    </div>
                    <a href="base_pages_register_v2.html" className="btn btn-lg btn-light">Join the movement!</a>
                  </div>
                </div>
              </div>
            </section>


            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto text-center">
                    <h4>
                      <strong>Join the movement, make planet Earth a better place!</strong>
                    </h4>
                      <br></br>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook fa-fw fa-3x"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter fa-fw fa-3x"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram fa-fw fa-3x"></i>
                        </a>
                      </li>
                    </ul>
                        <hr className="small"></hr>
                    <p className="text-muted">Copyright &copy; oblock</p>
                  </div>
                </div>
              </div>
              <a id="to-top" href="#top" className="btn btn-dark btn-lg js-scroll-trigger">
                <i className="fa fa-chevron-up fa-fw fa-1x"/>
              </a>
            </footer>

        </div>
    )
  }
}
