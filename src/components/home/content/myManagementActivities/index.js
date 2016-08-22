/**
 * Created by qoder on 16/8/19.
 */
require('./index.css');
import React, {Component} from 'react';

const MyManagementActivities=React.createClass({

  render:function(){


    return(
      <div className="box-Wrapper">
       <div className="topContainer">
          <span className="top-select">已发布(3)</span>
          <span className="top-select">未发布(0)</span>
          <span className="top-select">已结束(0)</span>
       </div>
        <div className="bottomContainer">
          <div className="item">
            <p>活动名称</p>
            <input className="manage-btn" type="button" value="管理"/>
            <input className="edit-btn" type="button" value="编辑"/>
            <input className="delete-btn" type="button" value="删除"/>
          </div>
        </div>
      </div>
        )
  }

});
export default MyManagementActivities

