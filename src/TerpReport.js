import React from 'react';

function TerpReport (props){

    let temp = props.temperature;
    let strain = props.strain;
    let canreport = "At " + temp + " degrees, you will release the cannabinoids ";
    let caneffect = "and you will feel "
    let terpreport = "You will release the terpenes ";
    let terpeffect = "and you will feel "
    var cans = strain.cannabinoids;
    var terps = strain.terpenes;
    Object.keys(cans).forEach(function(can){
        if (temp >= cans[can].bp){
            canreport += cans[can].name + ', ';
            caneffect += cans[can].effects.join(', ') + ' ';
        };
    });

    Object.keys(terps).forEach(function(terp){
        if (temp >= terps[terp].bp){
            terpreport+= terps[terp].name + ', ';
            terpeffect += terps[terp].effects.join(', ') + ', ';
        };
    });



  return(
    <div>
    <label>{canreport} {caneffect}</label>
    <p></p>
    <label>{terpreport} {terpeffect}</label>
    </div>
  )

}
export default TerpReport;
