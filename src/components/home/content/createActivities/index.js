/**
 * Created by qoder on 16/8/19.
 */
require('./index.css');
import React from 'react';
import _$ from '../../../../library/getElement';

const CreateActivites = React.createClass({
  const options = {
    activity-name:_$('activityName').value,
    activity-theme:_$('activityTheme').value,
    tutor:_$('tutor').value,
    activity-time:_$('activityTime').value,
    activity-place:_$('activityPlace').value,
  activity-host:_$('activityHost').value,
  activity-class:_$('activityClass').value,


}
const token = localstorage.getItem();
fetch(API, {
  method: 'POST',
  headers: {
    'Token': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(options)
});


render() {
  return (
    <div className="wrapper">

      <div className="form-group">
        <div className="input-container">
          <span>活动名称:</span><input className="inputBox" type="text" id="activityName"/>
        </div>
        <div className="input-container">
          <span>活动主题:</span><input className="inputBox" type="text" id="activityTheme"/>
        </div>
        <div className="input-container">
          <span>主讲人:</span><input className="inputBox" type="text" id="tutor"/>
        </div>
        <div className="input-container">
          <span>活动时间:</span><input className="inputBox" type="text" id="activityTime"/>
          <input className="inputBox" type="text"/>
        </div>
        <div className="input-container">
          <span>活动地点:</span><input className="inputBox" type="text" id="activityPlace"/>
        </div>
        <div className="input-container">
          <span>主办方:</span><input className="inputBox" type="text" id="activityHost"/>
        </div>
        <div className="input-container">
          <span>课时:</span><input className="inputBox" type="text" id="activityClass"/>
        </div>
        <div className="input-container">
          <span>活动分类:</span><input className="inputBox" type="text"/>
        </div>
        <div className="input-container">
          <span>报名人数限制:</span><input className="inputBox" type="text"/>
        </div>
        <div className="input-container">
          <span>报名开始时间:</span><input className="inputBox" type="text"/>
          <span>结束时间:</span><input className="inputBox" type="text"/>
        </div>
        <div className="input-container">
          <span>签到开始时间:</span><input className="inputBox" type="text"/>
          <span>结束时间:</span><input className="inputBox" type="text"/>
        </div>
        <div className="bottomBox">
          <input className="inputBottom" type="text"/>
        </div>
        <input className="bottom-btn" type="button" value="保存"/>
        <input className="bottom-btn" type="button" value="发布"/>
      </div>
    </div>
  )
}
})

export default CreateActivities
