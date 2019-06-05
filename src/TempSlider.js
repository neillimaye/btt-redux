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
          "CBG-A":{
            name: "Cannabigerol" ,
            bp: 428,
            effects: ["reduced intraocular pressure", "decreased inflammation"],
            percentage: .21,
          },
          "CBD":{
            name:"Cannabidiol",
            bp:356,
            effects:["less anxious","less dizzy"],
            percentage:11.50,
          },
          "THC":{
            name:"Tetrahydracannabidiol",
            bp:315,
            effects:["relaxed","heightened senses"],
            percentage:.49,
          },

        },
        terpenes:{
          "Linalool":{
            name: "Linalool",
            bp: 388.4,
            effects: ["less anxious", "uplifted"],
            percentage: 2.84
          },
          "a-Pienene":{
            name: "Alpha Pienene",
            bp: 311,
            effects: ["alert", "less anxious"],
            percentage: .72,
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
