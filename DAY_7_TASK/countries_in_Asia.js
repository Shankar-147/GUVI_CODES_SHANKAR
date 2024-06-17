var url = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", url);
newInstance.send();
newInstance.onreadystatechange = () => {
  if (newInstance.status == 200 && newInstance.readyState == 4) {
    var data = JSON.parse(newInstance.responseText);
    var filtered = data.filter((el) => el.region == "Asia");
    var asiancountries = filtered.forEach((element) => {
      var desc = document.createElement("h2");
      document.body.appendChild(desc);
      desc.innerText = `Name : ${element.name.common}\n\n`;
      console.log(element.name.common);
    });
  }
};
