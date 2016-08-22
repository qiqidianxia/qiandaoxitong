/**
 * Created by qoder on 16/8/19.
 */
require ('./index.css')
import React,{Component} from 'react';

const Nav=React.createClass({
  render:function(){


    return(
      <div className="nav">
      <span className="nav-item">123456789</span><span className="nav-item">创建活动</span>
      </div>
    )

  }
});

export default Nav;
