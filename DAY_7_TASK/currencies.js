var url = "https://restcountries.com/v3.1/all";
var newInstance = new XMLHttpRequest();
newInstance.open("GET", url);
newInstance.send();
newInstance.onreadystatechange = () => {
  if (newInstance.status == 200 && newInstance.readyState == 4) {
    var data = JSON.parse(newInstance.responseText);
    data.forEach((el) => {
      if (el.currencies && el.currencies.USD) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.innerText = `Country Name : ${el.name.common}\nCurrency : ${el.currencies.USD.name}\nSymbol : ${el.currencies.USD.symbol}\n\n`;
        console.log(el.name.common);
      }
    });
  }
};
