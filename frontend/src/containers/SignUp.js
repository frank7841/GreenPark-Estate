import React, { useState}from 'react'
import {connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {setAlert} from '../actions/alert'
import {signup} from '../actions/auth'
import propTypes from 'prop-types'


const SignUp=({setAlert, isAuthenticated, signup})=> {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2)
            setAlert('Passwords do not match', 'error');
        else
            signup({ name, email, password, password2 });
    };

    if (isAuthenticated)
        return <Redirect to='/' />;
    return (
        <div>
            <Helmet>
                <title>Nibora Real Estate| Sign Up</title>
                <meta
                    name='description'
                    content= 'login page'
                    />
            </Helmet>
            <div className="container-fluid">
            <div className="row main-content bg-success text-center">
                <div className="col-md-4 text-center company__info">
                <span className="company__logo"><h2><span className="fa fa-android" /></h2></span>
                <h4 className="company_title">Your Company Logo</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                <div className="container-fluid">
                    <div className="row">
                    <h2>Sign Up</h2>
                    </div>
                    <div className="row">
                    <form control className="form-group" onSubmit= {e=>onSubmit(e)}>
                    <div className="row">
                        <input type="text" name="name" id="username" className="form__input" placeholder="Enter Your Name" value={name} onChange={e=>onChange(e)} required />
                        </div>
                        <div className="row">
                        <input type="email" name="email" id="username" className="form__input" placeholder="example@gmail.com" value={email} onChange={e=>onChange(e)} required />
                        </div>
                        <div className="row">
                        {/* <span class="fa fa-lock"></span> */}
                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" value={password} onChange={e=>onChange(e)} required minLength='6' />
                        </div>
                        <div className="row">
                        {/* <span class="fa fa-lock"></span> */}
                        <input type="password" name="password2" id="password" className="form__input" placeholder="Confirm Password" value={password2} onChange={e=>onChange(e)} required minLength='6' />
                        </div>
                        
                        <div className="row">
                        <button className="btn">Register </button>
                        </div>
                    </form>
                    </div>
                    <div className="row">
                    <p>Already have an account? <Link to ="/login">Login</Link> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>    

    );
};

SignUp.propTypes={
    setAlert:propTypes.func.isRequired,
    signup: propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps = state=> ({
    isAuthenticated: state.auth.isAuthenticated

})
export default connect(mapStateToProps, {setAlert, signup}) (SignUp)
