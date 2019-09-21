import React from 'react';
import {connect} from 'react-redux'
import { changeStrainAction } from '../actions/changeStrain'
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
        <div>
          <button type = "button" onClick = {() => {
            this.props.changeStrain("Blue Dream");}}>
          Blue Dream</button>
          <button type = "button" onClick = {() => {
            this.props.changeStrain("Charlotte's Web");}}>
          Charlotte's Web</button>
          <button type = "button" onClick = {() => {
            this.props.changeStrain("Jack Herer");}}>
          Jack Herer</button>
          <button type = "button" onClick = {() => {
            this.props.changeStrain("Granddaddy Purple");}}>
          Granddaddy Purple</button>
          <button type = "button" onClick = {() => {
            this.props.changeStrain("OG Kush");}}>
          OG Kush</button>
        </ div>
      <p> Active strain: {strain.name} at {temp}&deg;F</p>
      </div>
    )
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changeStrain: changeStrainAction,
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
