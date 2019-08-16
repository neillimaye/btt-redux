import React from 'react';
import {connect} from 'react-redux'
import { changetoCWAction } from '../actions/changetoCW'
import { changetoBDAction } from '../actions/changetoBD'
import { changeTempAction } from '../actions/changeTemp'
import { bindActionCreators } from 'redux'
import TerpReport from '../containers/TerpReport'

class TempSlider extends React.Component{
  render() {
      const strain = this.props.strain
      const temp = this.props.temperature
    return(
      <div>
      <p> Active strain: {strain.name} at {temp}</p>
      <button
      type = "button"
      onClick = {() => {
        this.props.changetoCW();}
      }
      >See Charlotte's Web</button>
      <button
      type = "button"
      onClick = {() => {
        this.props.changetoBD();}
      }
      >See Blue Dream</button>

      <button
      type = "button"
      onClick = {() =>{
        this.props.changeTemp();}
      }
      >Temp up</button>

      <TerpReport />


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
