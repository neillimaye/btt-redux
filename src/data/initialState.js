const initialState = {
  strain : {
    name : "No",
    cans : {
      "No cannabinoids": {
        name: "Not a cannabinoid",
        bp: 250,
        effects: ["press one of the buttons", "watch the magic happen"]
      },
    },
    terps :{
        "No Terps":{
          name: "Not a Terpene",
          bp: 300,
          effects: ["see above", "don't forget to bring a towel"]
        }
    }
  },
  temperature: 200
}

export default initialState;
