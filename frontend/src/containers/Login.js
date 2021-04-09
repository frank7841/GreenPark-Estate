import React, { useState} from 'react'
import{Link, Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {login} from '../actions/auth'


const Login=({login, isAuthenticated})=> {
    const [formData, setFormData]= useState({
        email:'', 
        password:''

    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated)
        return <Redirect to='/' />;

        return (
            <>
                <Helmet>
                    <title>Nibora Real Estate| Login</title>
                    <meta
                        name='description'
                        content= 'login page'
                        />
                </Helmet>
              <div className="container-fluid">
            <div className="row main-content bg-success text-center"> 
                <div className="col-md-4 text-center company__info">
                <span className="company__logo"><h2><span className="fa fa-android" /></h2></span>
                <h4 className="company_title"><img className="img-responsive"src= {process.env.PUBLIC_URL + 'image/assets/img/Gazebo1G.png'}/> </h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                <div className="container-fluid">
                    <div className="row">
                    <h2>Log In</h2>
                    </div>
                    <div className="row">
                    <form control className="form-group" onSubmit={e => onSubmit(e)}>
                        <div className="row">
                        <input type="email" name="email" id="username" className="form__input" placeholder="Username" value={email} onChange={e=>onChange(e)} required />
                        </div>
                        <div className="row">
                        {/* <span class="fa fa-lock"></span> */}
                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" value={password} onChange={e=>onChange(e)} required minLength='6' />
                        </div>
                        
                        <div className="row">
                        <button type="submit" className='btn'>Login</button>
                        </div>
                    </form>
                    </div>
                    <div className="row">
                    <p>Don't have an account? <Link to ="/signup">Register Here</Link> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
	</>
           
        )
};

Login.propTypes={
    login: propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default(connect(mapStateToProps, {login})) (Login)
 