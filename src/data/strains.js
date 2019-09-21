// const sativa = 'sativa';
// const indica = 'indica'; //for later...
// const hybrid = 'hybrid';
const cannabinoids = {
    "THC":{
      name:"Tetrahydrocannabidiol",
      bp:315,
      effects:["high","heightened senses"],
    },
    "CBG":{
      name: "Cannabigerol",
      bp: 428,
      effects: ["reduced intraocular pressure", "decreased inflammation"],
    },
    "CBD":{
      name:"Cannabidiol",
      bp:356,
      effects:["less anxious","less dizzy"],
    },
    "CBC":{
      name: "Cannabichromene",
      bp: 428,
      effects: ["less stress", "uplifted"]
    },
    "CBN":{
      name: "Cannabinol",
      bp: 365,
      effects: ["mentally sharper", "more appetite", "relaxed"]
    },
    "THC-V":{
      name: "Tetrahydrocannabivarin",
      bp: 428,
      effects: ["reduced intraocular pressure", "decreased inflammation"],
    },
    "THC-A":{
      name:"Tetrahydrocannabinolic Acid",
      bp:315,
      effects:["less inflamed","less itchy", "fewer spasms"],
    },
}
const terpenes = {
  "Linalool":{
    name: "Linalool",
    bp: 388.4,
    effects: ["less anxious", "uplifted"],
    percentage: 2.84
  },
  "Pienene":{
    name: "Alpha Pienene",
    bp: 311,
    effects: ["alert", "less anxious"],
    percentage: .72,
  },
  "Myrcene":{
    name: "Myrcene",
    bp: 331,
    effects: ["sleepy"],
  },
  "Humulene":{
    name: "Humulene",
    bp: 223,
    effects: ["less appetite", "less inflamed"] ,
  },
  "Caryophyllene":{
    name: "Caryophyllene",
    bp: 266,
    effects: ["pain relief", "decreased inflammation", "less anxious"],
  },
  "Limonene":{
    name:"Limonene",
    bp: 349,
    effects:["elevated mood", "stress relief", "relieved heartburn"],
  }

}
const strains = {
  "Charlotte's Web":{
    name: "Charlotte's Web",
    cans: [
      cannabinoids["CBG"],
      cannabinoids["CBD"],
      cannabinoids["THC"]
    ],
    terps: [
      terpenes["Linalool"],
      terpenes["Pienene"]
    ]
  },
  "Blue Dream":{
    name: "Blue Dream",
    cans:[
      cannabinoids["THC"],
      cannabinoids["THC-A"],
      cannabinoids["CBD"],
      cannabinoids["CBC"],
    ],
    terps: [
      terpenes["Caryophyllene"],
      terpenes["Humulene"],
      terpenes["Linalool"],
      terpenes["Limonene"],
    ]
  },
  "Granddaddy Purple":{
    name: "Granddaddy Purple",
    cans:[
      cannabinoids["THC"],
      cannabinoids["CBD"],
      cannabinoids["THC-A"],
      cannabinoids["CBG"],
    ],
    terps:[
      terpenes["Linalool"],
      terpenes["Pienene"],
      terpenes["Caryophyllene"],
      terpenes["Humulene"],
      terpenes["Myrcene"],
    ]
  },
  "Jack Herer":{
    name: "Jack Herer",
    cans:[
      cannabinoids["THC"],
      cannabinoids["THC-A"],
    ],
    terps:[
      terpenes["Myrcene"],
      terpenes["Pienene"],
      terpenes["Humulene"],
      terpenes["Limonene"]
    ]
  },
  "OG Kush":{
    name: "OG Kush",
    cans:[
      cannabinoids["THC"],
      cannabinoids["CBN"],
      cannabinoids["CBC"],
      cannabinoids["CBG"],
    ],
    terps:[
      terpenes["Myrcene"],
      terpenes["Caryophyllene"],
      terpenes["Limonene"]
    ]
  },

}
const strainnames = Object.keys(strains);
export {strains, strainnames};
