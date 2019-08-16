// any questions? email me - neil.limaye108@gmail.com


const cannabinoids = {
    "CBG-A":{
      name: "Cannabigerol",
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
      name:"Tetrahydrocannabidiol",
      bp:315,
      effects:["relaxed","heightened senses"],
      percentage:.49,
    },

}

const terpenes = {
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

const strains = {
  "Charlotte's Web":{
    name: "Charlotte's Web",
    cans: [
      cannabinoids["CBG-A"],
      cannabinoids["CBD"],
      cannabinoids["THC"]
    ],
    terps: [
      terpenes["Linalool"],
      terpenes["a-Pienene"]
    ]
  },
  "Blue Dream":{
    name: "Blue Dream",
    cans:[
      cannabinoids["CBG-A"],
      cannabinoids["THC"],
    ],
    terps: [
      terpenes["a-Pienene"],
      terpenes["Linalool"],
    ]
  }
  }


export default strains;
