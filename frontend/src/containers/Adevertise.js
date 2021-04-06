import React from 'react'
import background from '../components/asset/guiding-principle.svg'
import backgroundForm from '../components/asset/guiding-principle.svg'
import Footer from '../components/footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Scroll from '../components/Scroll'

const Adevertise=()=> {
    const styles= {
        adbackground: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        },
     
        addsection:{ 
            Width: '110%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        <div className="container">
            <div className="row align-centre text-center">
                <div className="col-sm-3 add-content">
                    <img className="top-add-imag " src={process.env.PUBLIC_URL + 'image/assets/img/garden.png'}/>
                    <div>
                    <h4 className="header-add">SELLERS</h4>
                    </div>
                    <p className="text-padding">There is a lot to offer when you sign up with Nibora properties. <a href="#form-advert">Fill the enquiry form below</a> or <a href="/contact#call-request">Contact our business team today</a> for more information  </p>
                </div>
                <div className="col-sm-3 add-content">
                    <img className="top-add-imag"  src={process.env.PUBLIC_URL + 'image/assets/img/find.png'}/>
                    <div>
                    <h4 className="header-add">MORTGAGE LENDERS</h4>
                    </div>
                    <p className="text-padding">Find and receive new customers from Real Estate Street's mortgage leads, direct marketing and home buyer inquiries. You must provide excellence. </p>
                </div>
                <div className="col-sm-3 add-content">
                    <img  className="top-add-imag" src={process.env.PUBLIC_URL + 'image/assets/img/money.png'}/>
                    <div>
                    <h4 className="header-add">NEW CONSTRUCTION</h4>
                    </div>
                    <p className="text-padding">Capture intrested buyers with native add campaigns with customised landing pages that capture leads from buyers looking for newly constructed properties.   </p>
                </div>
                
                <div className="col-sm-3 add-content-last">
                    <img  className="top-add-imag" src={process.env.PUBLIC_URL + 'image/assets/img/brands.svg'}/>
                    <br/>
                    <div>
                    <h4 className="header-add">CONSUMER BRANDS</h4>
                    </div>
                    <p className="text-padding">Banner ads, native content sponsorship and targeted social media adds are available. Advertising campaigns bring you the right audience and results.</p>
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
                            <p className="content ">Nibora Properties targets real and qualified home buyers and sellers that are commited to buying,selling, renting, or short stay home users. Our company operates with the highest level of integrity</p>
                        </div>
                        <div className="col-sm-6">
                            <form className="add-form" id="form-advert"> 
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
                                    <input type="text" className="form-control" id="name" name="name"/>
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
                                    <lable for="Location">Location</lable>
                                    <input type="text" className="form-control" id="location" name="location"/>
                                </div>
                                <div className="form-group">
                                    <lable for="county">County</lable>
                                    <input type="text" className="form-control" id="county" name="county"/>
                                </div>
                                <button className=" btn-success form-control">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container patner">
            <h1 className="text-center top-top-add">Patner with us</h1>
            <hr className="horizontal " size="large"/>
            <p className="patner-text">Two things every real estate professional needs: more time and more leads. Your lead pipeline is your business and you don’t have time to waste on bad real estate leads. Our real estate agent, mortgage lender, new home builder and broker advertising services are designed to attract serious buyers and sellers so we can deliver quality leads so you can focus your time on leads that will convert. Get quality real estate leads in your local market, or create brand awareness for your business.<br/><br/><br/>With Nibora Properties  advertising, you’ll also get all the tools you need to nurture your leads from any source. The free CRM, monthly newsletter, drip email campaigns, and more are all available with your advertising partnership so you can leverage your leads for referrals before, during, and after the home sale. Nibora Properties solutions empower real estate agents to hone in on what matters—the lifelong relationships they build with their clients.</p>
        </div>
        
        <Footer/>
              
        </>
    )
}
export default Adevertise
