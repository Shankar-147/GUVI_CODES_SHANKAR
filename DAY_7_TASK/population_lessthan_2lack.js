var url = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", url);
newInstance.send();
newInstance.onreadystatechange = () => {
  if (newInstance.status == 200 && newInstance.readyState == 4) {
    var data = JSON.parse(newInstance.responseText);
    var filtered = data.filter((el) => el.population < 200000);
    filtered.forEach((el) => {
      console.log(`Name : ${el.name.common}\nPopulation : ${el.population}`);
      var desc = document.createElement("h2");
      document.body.appendChild(desc);
      desc.innerText = `Name : ${el.name.common}\n Population : ${el.population}\n\n`;
    });
  }
};
