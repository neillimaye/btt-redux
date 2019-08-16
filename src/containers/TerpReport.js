import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import oxfordcomma from './helpers/oxfordcomma';

class TerpReport extends React.Component{
    render(){
      var crel = []; var ceff = []; var trel = []; var teff = [];
      const cans = this.props.strain.cans;
      const terps = this.props.strain.terps;
      const temperature = this.props.temperature;
      Object.keys(cans).forEach(function(can){
        if (temperature >= cans[can].bp){
          crel.push(cans[can].name);
          cans[can].effects.forEach(function(effect){
            ceff.push(effect);
          });
        };
      });
      // console.log(crel); proof this works
      // console.log(ceff);
      Object.keys(terps).forEach(function(terp){
        if (temperature >= terps[terp].bp){
          trel.push(terps[terp].name);
          terps[terp].effects.forEach(function(effect){
            teff.push(effect);
          });
        };
      });
      return(
        <div>
          <p> At {temperature}, you will release the cannabinoids {oxfordcomma(crel)} and feel {oxfordcomma(ceff)}</p>
          <p> You will release the terpenes {oxfordcomma(trel)} and feel {oxfordcomma(teff)}</p>
        </div>
      )

    }

}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
  }, dispatch);
}
function mapStateToProps(state) {
  return {
    strain: state.strain,
    temperature: state.temperature,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TerpReport)
