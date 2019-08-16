import React from 'react';
import oxfordcomma from './helpers/oxfordcomma';
import {connect} from 'react-redux'
class TerpReport extends React.Component{
    //
    // var crel = []; var ceff = []; var trel = []; var teff = [];
    // Object.keys(props.strain.cannabinoids).forEach(function(can){
    //     if (props.temperature >= props.strain.cannabinoids[can].bp){
    //       crel.push(props.strain.cannabinoids[can].name);
    //       props.strain.cannabinoids[can].effects.forEach(function(effect){
    //         ceff.push(effect);
    //       });
    //     };
    // });
    // rewrite these into one function that can work with any list?
    // aka, abstractify as much as possible
    // why? just cause i guess, also makes updating easier
    // Object.keys(props.strain.terpenes).forEach(function(terp){
    //     if (props.temperature >= props.strain.terpenes[terp].bp){
    //       trel.push(terp);
    //       props.strain.terpenes[terp].effects.forEach(function(effect){
    //         teff.push(effect);
    //       });
    //     };
    // });
    // var canreport = oxfordcomma(crel); var caneffect = oxfordcomma(ceff);
    // var terpreport = oxfordcomma(trel); var terpeffect = oxfordcomma(teff);
    // //returns "nothing" if the size of the input arrays are zero

    //
    // <h2> At {props.temperature}&#176;F,</h2>
    // <label>Cannabinoids: You will release {canreport} while feeling {caneffect}.</label>
    // <p></p>
    // <label>Terpenes: You will release {terpreport} while feeling {terpeffect}.</label>



    render(){
      const strain = this.props.strain;
      console.log("Should log the active strain: \n" + this.strain)

      return(
        <div>
        </div>
      )

    }

}
function mapDispatchToProps(dispatch){

}

function mapStateToProps(state){
  return {
    strain: state.strain,
    temperature: state.temperature,
  }
}


export default connect(mapStateToProps)(TerpReport);
