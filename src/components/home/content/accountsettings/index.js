/**
 * Created by qoder on 16/8/19.
 */

require('./index.css');
import React, {Component} from 'react';



const AccountSettings=React.createClass({

  render:function(){
    return(

      <div className="rightBox">
         <div className="rightBoxTop">
            <span className="presonInfo">个人信息</span><span className="changePass">修改密码</span>
         </div>
         <div className="rightBoxBottom">
             <p className="inputFirst">账号:<input className="inputBox" type="text"/></p>
             <p className="inputSecond">姓名:<input className="inputBox" type="text"/></p>
             <input className="confirmButton" type="button" value="确认"/>
         </div>
      </div>

    )
  }

});

export default AccountSettings;
