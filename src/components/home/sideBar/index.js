/**
 * Created by qoder on 16/8/19.
 */

require('./index.css');
import React, {Component} from 'react';

const SideBar=React.createClass({



  render:function(){

  return(
    <div>
        <ul className="sideBar">
            <li><h2>活动管理</h2></li>
            <li><h3>我管理的活动</h3></li>
            <li><h2>学生管理</h2></li>
            <li><h3>学生信息管理</h3></li>
            <li><h3>重置学生密码</h3></li>
            <li><h3>解绑申请单</h3></li>
            <li><h2>权限管理</h2></li>
            <li><h2>发布通知</h2></li>
            <li><h2>操作日志</h2></li>

        </ul>
    </div>)
}
});

export default SideBar;
