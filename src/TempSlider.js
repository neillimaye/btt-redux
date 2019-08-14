import React from 'react';
import TerpReport from './TerpReport'
import {strains} from './strains'

export default class TempSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      min: 120,
      max: 500,
      step: 1,
      value: 130,
      strain: strains["Charlotte's Web"]
      }

    };
  }
  onSliderChange = (value) => {
    this.setState({value});
  }


  render() {
    return(
      <div>
        <Roundy value={this.state.value} min={this.state.min} max={this.state.max} step={this.state.step}
        onChange={this.onSliderChange}/>
        <p></p>
        <p><label>Strain: {this.state.strain.name}</label> </p>
        <TerpReport temperature = {this.state.value} strain = {this.state.strain}/>

      </div>

    )
  }

}
