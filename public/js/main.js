const btn = document.getElementById('searchBtn');
const cityName = document.getElementById("cityName");
const citynames = document.getElementById('city_name');




const alertfun = async (event) => {
    
    event.preventDefault();

    let city = cityName.value;

    if(city === ""){

       citynames.innerText = `Please Write the name of city before search`;

      
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=10df57062f6142dea8e9a7330d543c3f`; 
        const weatherdata = await fetch(url);
        const datajson = await weatherdata.json();
        const arr = [datajson];

        citynames.innerHTML = arr[0].name + ` `;
        citynames.innerHTML += arr[0].main.temp + ` `;
        citynames.innerHTML += arr[0].weather[0].main;

     
        }catch{
            citynames.innerText = `Please enter the correctly name of city..`;
        }

    }
    
}
btn.addEventListener('click', alertfun);
