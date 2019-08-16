import React from 'react';
import {connect} from 'react-redux'
import { changetoCWAction } from '../actions/changetoCW'
import { changetoBDAction } from '../actions/changetoBD'
import { changeTempAction } from '../actions/changeTemp'
import { bindActionCreators } from 'redux'
import Roundy from 'roundy'

class TempSlider extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (value) => {
     this.props.changeTemp(value);
   }
  render() {
      const strain = this.props.strain
      const temp = this.props.temperature

    return(
      <div>
      <Roundy value={temp} min={200} max={500} step={1}
        onChange = {this.handleChange}/>
      <button type = "button" onClick = {() => { this.props.changetoCW();}}>
      Charlotte's Web</button>
      <button type = "button" onClick = {() => {
        this.props.changetoBD();}}>
      Blue Dream</button>
      <p> Active strain: {strain.name} at {temp}</p>
      </div>
    )
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changetoCW: changetoCWAction,
    changetoBD: changetoBDAction,
    changeTemp: changeTempAction
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    strain: state.strain,
    temperature: state.temperature,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TempSlider)
