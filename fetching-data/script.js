const starWarsCharacterInfo = document.getElementById("starWarsCharacterInfo")
const darthVaderInfo = document.getElementById("darthVader")

async function getData() {
  try {

    const response = await fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(myJson => {
      starWarsCharacterInfo.innerHTML = 
      "<pre>" + 
      "Name: " + myJson.name + "<br>" + "<br>" +
      "Height: " + myJson.height + "cm" + "<br>" + "<br>" +
      "Mass: " + myJson.mass + "kg" + "<br>" + "<br>" +
      "Hair Color: " + myJson.hair_color + "<br>" + "<br>" +
      "Skin Color: " + myJson.skin_color + "<br>" + "<br>" +
      "Eye Color: " + myJson.eye_color + "<br>" + "<br>" +
      "Birth Year: " + myJson.birth_year + "<br>" + "<br>" +
      "Gender: " + myJson.gender + "<br>" + "</pre>"
    })

    const homeworld = await fetch("https://swapi.co/api/planets/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("homeworld").innerHTML =
      "<p>" + "Homeworld: " + myJson.name + "</p>"
    })

    const film1 = await fetch("https://swapi.co/api/films/2/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("film-1").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film2 = await fetch("https://swapi.co/api/films/6/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("film-2").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film3 = await fetch("https://swapi.co/api/films/3/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("film-3").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film4 = await fetch("https://swapi.co/api/films/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("film-4").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film5 = await fetch("https://swapi.co/api/films/7/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("film-5").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const species = await fetch("https://swapi.co/api/species/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("species").innerHTML =
      "<p>" + "Species: " + myJson.name + "</p>"
    })
    const vehicle1 = await fetch("https://swapi.co/api/vehicles/14/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("vehicle-1").innerHTML =
      "<p>" + myJson.name + "</p>"
    })
    const vehicle2 = await fetch("https://swapi.co/api/vehicles/30/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("vehicle-2").innerHTML =
      "<p>" + myJson.name + "</p>"
    })
    const starship1 = await fetch("https://swapi.co/api/starships/12/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("starship-1").innerHTML =
      "<p>" + myJson.name + "</p>"
    })
    const starship2 = await fetch("https://swapi.co/api/species/22/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("starship-2").innerHTML =
      "<p>" + myJson.name + "</p>"
    })


  }
  catch (error) {
    console.log(error);
  } 
}

async function darthVader() {
  try {

    const response = await fetch("https://swapi.co/api/people/4/")
    .then(response => response.json())
    .then(myJson => {
      darthVaderInfo.innerHTML = 
      "<pre>" + 
      "Name: " + myJson.name + "<br>" + "<br>" +
      "Height: " + myJson.height + "cm" + "<br>" + "<br>" +
      "Mass: " + myJson.mass + "kg" + "<br>" + "<br>" +
      "Hair Color: " + myJson.hair_color + "<br>" + "<br>" +
      "Skin Color: " + myJson.skin_color + "<br>" + "<br>" +
      "Eye Color: " + myJson.eye_color + "<br>" + "<br>" +
      "Birth Year: " + myJson.birth_year + "<br>" + "<br>" +
      "Gender: " + myJson.gender + "<br>" + "</pre>"
    })

    const homeworld = await fetch("https://swapi.co/api/planets/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("dvhomeworld").innerHTML =
      "<p>" + "Homeworld: " + myJson.name + "</p>"
    })

    const film1 = await fetch("https://swapi.co/api/films/2/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("films").innerText = "Films:"
      document.getElementById("dvfilm-1").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film2 = await fetch("https://swapi.co/api/films/6/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("dvfilm-2").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film3 = await fetch("https://swapi.co/api/films/3/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("dvfilm-3").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const film4 = await fetch("https://swapi.co/api/films/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("dvfilm-4").innerHTML =
      "<p>" + myJson.title + "</p>"
    })
    const species = await fetch("https://swapi.co/api/species/1/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("dvspecies").innerHTML =
      "<p>" + "Species: " + myJson.name + "</p>"
    })
    const starship1 = await fetch("https://swapi.co/api/starships/13/")
    .then(response => response.json())
    .then(myJson => {
      document.getElementById("starships").innerText = "Starships: "
      document.getElementById("dvstarship-1").innerHTML =
      "<p>" + myJson.name + "</p>"
    })
  }
  catch (error) {
    console.log(error);
  } 
}

getData()
document.getElementById("dvBtn").addEventListener('click', darthVader)

