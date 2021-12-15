const container = document.querySelector(".container");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";

const imgUrl = "https://openweathermap.org/img/wn/";

const render = async (url) => {
  const res = await fetch(url);
  const datas = await res.json();
  console.log(datas.list);
  datas.list.forEach((data) => {
    const item = document.createElement("div");
    item.className = "items";
    item.innerHTML = `
    <h4 class="time">${data.dt_txt}</h4>
    <h3 class="temp">${data.main.temp} <sup>o</sup>C</h3>
    <p class="weather">${data.weather[0].main}</p>
    <img src="${imgUrl}${data.weather[0].icon}@2x.png">
    `;
    container.appendChild(item);
  });
};

render(url);
