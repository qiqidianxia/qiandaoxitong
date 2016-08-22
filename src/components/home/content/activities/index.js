/**
 * Created by qoder on 16/8/20.
 */
require('./index.css');
import React, {Component} from 'react';


const Activities = React.createClass(
  {
    render: function () {
      return (
        <div className="container-wrapper">

          <div className="container-top">
            创新创业大讲堂
          </div>
          <div className="activityBox">
            <span>活动状态:</span>
            <span className="unpublishedactivity">待发布</span>
            <input className="publishActivity" type="button" value="活动发布"/>
          </div>
          <div className="activityStatus">
            <p>报名:</p><input className="start-btn" type="button" value="开始"/>
            <p>签到:</p><input className="start-btn" type="button" value="开始"/>
          </div>
        </div>
      )
      }
      });
      export default Activities
