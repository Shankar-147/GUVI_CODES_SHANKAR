var url = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", url);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (newInstance.status == 200 && newInstance.readyState == 4) {
    var myCountries = JSON.parse(newInstance.responseText);
    console.log(myCountries);
    var names = myCountries.forEach((element) => {
      console.log(`Name : ${element.name.common}`);
      console.log(`Capital : ${element.capital}`);
      console.log(`Flag : ${element.flag}`);
      var desc = document.createElement("div");
      document.body.appendChild(desc);
      desc.innerText = `Name : ${element.name.common} \n Capital : ${element.capital} \n Flag : ${element.flag} \n\n`;
    });
  } else console.log("Error Occured");
};
