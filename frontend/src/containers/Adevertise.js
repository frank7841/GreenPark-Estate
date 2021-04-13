import React from 'react'
import background from '../components/asset/guiding-principle.svg'
import backgroundForm from '../components/asset/guiding-principle.svg'
import Footer from '../components/footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Scroll from '../components/Scroll'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adevertise=()=> {
    const notify = () => toast.success("Thank you! one of our representative will get in touch with you within a day", );

    function sendEmail(e) {
        e.preventDefault();
        
    
        emailjs.sendForm('service_aj333on', 'template_6prr6qq', e.target, 'user_uQWg7zODPbiG7Ij3VpuAS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    const styles= {
        adbackground: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        },
     
        addsection:{ 
            Width: '110%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        fomrbackground:{
        backgroundImage: `url(${backgroundForm})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        },
        formsection:{ 
        Width: '110%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },


    }
    return (
        <>
        <HelmetProvider>
            <Helmet>
                <title>Nibora Properties - Advertise with us</title>
                <meta
                    name='description'
                    content='Nibora Properties Services'
                />
            </Helmet>
            </HelmetProvider>
            <Scroll showBelow={250}/>
        <div className="container-fluid z-index" style={styles.adbackground}>
            <div className=" img-responsive" style={styles.addsection}>
                <div className=" content-height">
                    <h1 className="add-page-top">ADVERTISE WITH US</h1>
                    <p className="grow-business"> We help you grow your business</p>
                </div>

            </div>
        </div>
        <div className="height"></div>
        <div className="height"></div>
        <div className="height"></div>
        <div className="container">
            <h1 className="text-center top-top-add ">Easy Way to Engage with Property Buyers and Tenants</h1>
            <hr className="horizontal " size="large"/>
            <p className="text-center">Fill out the form below and start to receiving quality targeted leads and faster transactions </p>
            
        </div>
        <div className="height"></div>
        <div className="height"></div>
        <div className="container-fluid">
        <div className="row">
                <div className="col-sm">
                    <img className="logo-size"src= {process.env.PUBLIC_URL + 'image/assets/img/Gazebo1G.png'}/> 
                </div>
                <div className="col-sm">
                    <img className="logo-size-add"src= {process.env.PUBLIC_URL + 'image/assets/img/free.png'}/> 
                </div>
            </div>
        </div>
        <div className="container">
            
            <div className="row align-centre text-center">
                <div className="col-sm-3 add-content">
                    <img className="top-add-imag " src={process.env.PUBLIC_URL + 'image/assets/img/garden.png'}/>
                    <div>
                    <h4 className="header-add">SELLERS</h4>
                    </div>
                    <p className="text-padding">Sign up with Us <a href="#form-advert">by filling the enquiry form below</a> or <a href="/contact#call-request">Contact our business team today</a> for more information  </p>
                </div>
                <div className="col-sm-3 add-content">
                    <img className="top-add-imag"  src={process.env.PUBLIC_URL + 'image/assets/img/find.png'}/>
                    <div>
                    <h4 className="header-add">MORTGAGE LENDERS</h4>
                    </div>
                    <p className="text-padding">< a href="#form-advert">Fill the enquiry form below </a>to get connected with new customers from Real Estate Street's mortgage leads and home buyers. <a href="/contact#call-request">Contact Us today</a> for more information  </p>
                </div>
                <div className="col-sm-3 add-content">
                    <img  className="top-add-imag" src={process.env.PUBLIC_URL + 'image/assets/img/money.png'}/>
                    <div>
                    <h4 className="header-add">NEW CONSTRUCTION</h4>
                    </div>
                    <p className="text-padding">Capture intrested buyers using native add campaigns with customised landing pages that capture leads from buyers looking for newly constructed properties.< a href="#form-advert">Fill the form below </a> or <a href="/contact#call-request">contact us </a> for more information  </p>
                </div>
                
                <div className="col-sm-3 add-content-last">
                    <img  className="top-add-imag" src={process.env.PUBLIC_URL + 'image/assets/img/brands.svg'}/>
                    <br/>
                    <div>
                    <h4 className="header-add">CONSUMER BRANDS</h4>
                    </div>
                    <p className="text-padding">< a href="#form-advert">Fill the form below </a> to enjoy  banner ads, native content sponsorship and targeted social media adds for your consumer brand products<a href="/contact#call-request"> contact Us </a>for more information</p>
                </div>
            </div>
        </div>
        <div className="height"></div>
        <div className="height"></div>
        <div  style={styles.fomrbackground}>
            <div className="container-fluid" style={styles.formsection}>
                <div className="container">
                    <div className="height"></div>
                    <div className="height"></div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="fill-the-form">Kindly Fill the Form for</h2><br/>
                            <p className="add-text-big">Advertising and Lead generation Opportunity</p>
                            <p className="content ">Nibora Properties targets real and qualified home buyers and sellers that are intrested in buying, selling and renting homes. We also provide short stay family homes. We operate with the highest level of integrity</p>
                        </div>
                        <div className="col-sm-6">
                            <form className="add-form" id="form-advert" onSubmit={sendEmail}> 
                                <div className="form-group">
                                    <lable for="I-am">I am</lable>
                                    <select className="form-control" id="i_am" name="i_am">
                                        <option>Realtor or Agents</option>
                                        <option>Home owner</option>
                                        <option>Hospitality industry</option>
                                        <option>Builder or New Construction Company</option>
                                        <option>Mortgage Lender or Mortgage Company</option>
                                        <option>Company with consumer products for Home buyers and sellers.</option>
                                    </select> 
                                </div>

                                <div className="form-group">
                                    <lable for="name">Name</lable>
                                    <input type="text" className="form-control" id="name" name="from_name"/>
                                </div>
                                <div className="form-group">
                                    <lable for="email">Email</lable>
                                    <input type="email" className="form-control" id="email" name="email"/>
                                </div>
                                <div className="form-group">
                                    <lable for="phone">Phone</lable>
                                    <input type="tel" className="form-control" id="phone" name="phone"/>
                                </div>
                                <div className="form-group">
                                    <lable for="Address">Address/Location</lable>
                                    <input type="text" className="form-control" id="address" name="address"/>
                                </div>
                                <div className="form-group">
                                    <lable for="county">County</lable>
                                    <input type="text" className="form-control" id="county" name="county" required/>
                                </div>
                                <button className=" btn-success form-control" onClick={notify}>Send</button>
                                <ToastContainer/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container patner">
            <h1 className="text-center top-top-add">Patner with us</h1>
            <hr className="horizontal " size="large"/>
            <div className="col-sm text-center">
                <h4 className="seek">Partnering with us offers you the opportunity to Boost your Real Estate Business to the highest level .</h4>
                <div className="height"></div>
                <a className="find-your-home-link" href="/contact#call-request"><span className="find-your-home"> Request a Call</span></a>

                </div>
            {/* <p className="patner-text">Two things every real estate professional needs: more time and more leads. Your lead pipeline should be your business priority. Our real estate agent, mortgage lender, new home builder and hotel advertising services are designed to attract commited buyers and sellers.  Get quality real estate leads in your local market, or create brand awareness for your business.<br/><br/><br/>With Nibora Properties  advertising, you’ll get all the tools you need to nurture your leads from any source. The free CRM, monthly newsletter, drip email campaigns, and more are available to leverage your leads for referrals before, during, and after the sale. Nibora Properties solutions empower real estate agents to focus on what matters—the lifelong relationships they build with their clients.</p> */}
        </div>
        
        <Footer/>
              
        </>
    )
}
export default Adevertise
