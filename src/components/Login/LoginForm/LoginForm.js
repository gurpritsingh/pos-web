import React from 'react';
import './login.css';
import backgroundImage from '../../../globalAssets/images/login.png';

var LoginForm = () => {
    var componentStyles = {
        backgroundImage: `url(${backgroundImage})`
    }
      
      return (
          <div>
                <div class="back_login" style="{componentStyles}">
                    
                </div>
                <div class="login_form">
                    <div class="login_form_wrapper">
                        <h1>POS2ALL</h1>
                        <h6>Welcome back! Please login to your account.</h6>
                        <form name="login" novalidate>
                            <div class="row">
                                <div class="column _5">
                                    <div class="input-block">
                                        <input type="text" name="Email" />
                                        <span class="floating-label">Email or Phone Number</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column _5">
                                    <div class="input-block">
                                        <input type="text" name="Password" />
                                        <span class="floating-label">Password</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember">Remember me</label>
                                </div>
                                <div class="column forgot_box">
                                    <a href="javascript:" class="pull-right forgot_link">Forgot Password</a>
                                </div>
                            </div>
                            <div class="btn_group">
                                <div class="row">
                                    <div class="column">
                                        <button type="button">Login</button>
                                    </div>
                                    <div class="column">
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