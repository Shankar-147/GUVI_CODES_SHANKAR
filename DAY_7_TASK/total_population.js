var url = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", url);
newInstance.send();
newInstance.onreadystatechange = () => {
  if (newInstance.status == 200 && newInstance.readyState == 4) {
    var data = JSON.parse(newInstance.responseText);
    var total = data.reduce((prev, curr) => {
      if (typeof prev == "object") return prev.population + curr.population;
      return prev + curr.population;
    });
    console.log(`Total Population of the World : ${total}`);
    var body1 = document.body;
    body1.style.display = "flex";
    body1.style.justifyContent = "center";
    body1.style.height = "100vh";
    body1.style.alignItems = "center";
    var desc = document.createElement("h1");
    document.body.appendChild(desc);
    desc.setAttribute("style", "font-weight: bolder;");
    desc.innerText = `Total Population of the World : ${total}`;
  }
};
