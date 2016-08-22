/**
 * Created by qoder on 16/8/19.
 */
require('./index.css');
import React, {Component} from 'react';

const Login = React.createClass({


  render: function () {
    return (
      <div className="loginBox">
        <p className="text">欢迎使用签到系统管理后台</p>
        <p className="inputNum">账号:<input type="text" className="input-box" placeholder="请输入你的手机号"/></p>
        <p className="inputPass">密码:<input type="text" className="input-box"/></p>
        <input className="login-btn" type="button"/>
      </div>
            )
    }
    });
export default Login
