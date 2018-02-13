import React from 'react';
import './login.css';
import backgroundImage from '../../../globalAssets/images/login.png';

var LoginForm = () => {
    var componentStyles = {
        backgroundImage: `url(${backgroundImage})`
    }
      return (
          <div>
                <div className="back_login" style={componentStyles}>
                    
                </div>
                <div className="login_form">
                    <div className="login_form_wrapper">
                        <h1>POS2ALL</h1>
                        <h6>Welcome back! Please login to your account.</h6>
                        <form name="login">
                            <div className="row">
                                <div className="column _5">
                                    <div className="input-block">
                                        <input type="text" name="Email" />
                                        <span className="floating-label">Email or Phone Number</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column _5">
                                    <div className="input-block">
                                        <input type="text" name="Password" />
                                        <span className="floating-label">Password</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="column">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <div className="column forgot_box">
                                    <a href="javascript:" className="pull-right forgot_link">Forgot Password</a>
                                </div>
                            </div>
                            <div className="btn_group">
                                <div className="row">
                                    <div className="column">
                                        <button type="button">Login</button>
                                    </div>
                                    <div className="column">
                                        <button type="button">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
          </div>
      )
  }
  
  

export default LoginForm;