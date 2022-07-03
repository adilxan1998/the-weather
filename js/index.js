const elBoxInner = document.querySelector(".wrapper");
const siteForm = document.querySelector(".site_form")
const elFormInput = document.querySelector(".form_input");


const title = function(e){
  html = `
   <h2 class="box_title">${e.name}</h2>
   <p class="box_text">${Math.round(e.main.temp)}℃</p>
   <p class="box_text">${e.wind.speed}m/s</p>
   <p class="box_text">${e.main.humidity}%</p>
  `
  elBoxInner.innerHTML = null
  elBoxInner.insertAdjacentHTML("beforeend", html)
}

const getData = async function(country){
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
  const data = await request.json();
  // return data;
  
  title(data)   
}

siteForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  const inputValue = elFormInput.value;
  getData(inputValue);
})