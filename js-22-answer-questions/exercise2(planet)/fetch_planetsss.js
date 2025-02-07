//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const destination = document.querySelector("#destination")

const namePlanet = document.querySelector(".namePlanet")
const distancePlanet = document.querySelector(".distancePlanet")
let index = 0
let saveData = []

async function request() {
    try {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        if (!response.ok) {
            throw "undefined data !!!!"
        }
        const data = await response.json()

        saveData = data
        console.log(saveData);
        displayPlanetOne(data)


    } catch (error) {
        console.log("ERROR", error);
    }
}
request()


function displayPlanetOne(data) {
    namePlanet.textContent = `planet name:  ${data[0].name}`
    distancePlanet.textContent = `Planet distance:  ${data[0].distance}`
}


function planetChange(saveData) {
    if (index + 1 < saveData.length) {
        index++
        /*   داخل شرط میشد اینم گذاشت      index < 5   */
    }
    else {
        index = 0
    }
    namePlanet.textContent = `planet name:  ${saveData[index].name}`
    distancePlanet.textContent = `Planet distance:  ${saveData[index].distance}`


}


destination.addEventListener("click", () => planetChange(saveData))
