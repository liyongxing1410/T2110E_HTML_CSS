const container = document.querySelector(".container");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";

const render = async (url) => {
  const res = await fetch(url);
  const datas = await res.json();
  console.log(datas.list);
  datas.list.forEach((data) => {
    const item = document.createElement("div");
    let classIcon;
    switch (data.weather[0].main) {
      case "Clear":
        classIcon = "fas fa-sun";
        break;

      case "Rain":
        classIcon = "fas fa-cloud-showers-heavy";
        break;

      case "Clouds":
        classIcon = "fas fa-cloud";
        break;
    }
    item.className = "items";
    item.innerHTML = `
    <h4 class="time">${data.dt_txt}</h4>
    <h3 class="temp">${data.main.temp} <sup>o</sup>C</h3>
    <p class="weather">${data.weather[0].main}</p>
    <i class="${classIcon}"></i>
    `;

    container.appendChild(item);
  });
};

render(url);
