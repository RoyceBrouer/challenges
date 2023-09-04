console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");

    if (!response.ok) {
      console.log("no response");
    } else {
      const jsDataSwapi = await response.json();
      console.log(jsDataSwapi);
      const eyeColorR2D2 = jsDataSwapi.results[2].eye_color;
      console.log(eyeColorR2D2);
    }
  } catch (err) {
    console.log("oopsie ", err.message);
  }
}

fetchData();
