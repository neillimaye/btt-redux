import React from 'react';
import oxfordcomma from './oxfordcomma';

function TerpReport (props){
    var crel = [];
    var ceff = [];
    var trel = [];
    var teff = [];
    Object.keys(props.strain.cannabinoids).forEach(function(can){
        if (props.temperature >= props.strain.cannabinoids[can].bp){
          crel.push(props.strain.cannabinoids[can].name);
          props.strain.cannabinoids[can].effects.forEach(function(effect){
            ceff.push(effect);
          });
        };
    });
    Object.keys(props.strain.terpenes).forEach(function(terp){
        if (props.temperature >= props.strain.terpenes[terp].bp){
          trel.push(terp);
          props.strain.terpenes[terp].effects.forEach(function(effect){
            teff.push(effect);
          });
        };
    });
    var canreport = oxfordcomma(crel);
    var caneffect = oxfordcomma(ceff);
    var terpreport = oxfordcomma(trel);
    var terpeffect = oxfordcomma(teff);




  return(
    <div>
    <h2> At {props.temperature}&#176;F, </h2>
    <label>You will release {canreport} while feeling {caneffect}</label>
    <p></p>
    <label>You'll get terpenes {terpreport} while feeling {terpeffect}</label>
    </div>
  )

}
export default TerpReport;
