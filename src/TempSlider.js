import React from 'react';
import TerpReport from './TerpReport'
import Roundy from 'roundy';


export default class TempSlider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      min: 120,
      max: 500,
      step: 1,
      value: 130,
      strain: {
        name: "Charlotte's Web",
        cannabinoids: {
          "CBN":{
            name: "Cannabineil",
            bp: 130,
            effects: ["hungry", "less nauseated", "uplifted"],
          },
          "CBC":{
            name: "Cannabichromene",
            bp: 140,
            effects: ["less stressed", "giggly"]
          }
        },
        terpenes:{
          "Limonene":{
            name: "Limonene",
            bp: 150,
            effects: ["like", "so", "totally stoned man"],
          },
          "a-Pienene":{
            name: "Alpha Pienene",
            bp: 160,
            effects: ["pretty", "oh so pretty", "that the city should give me it's key!"]
          }
        }
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
