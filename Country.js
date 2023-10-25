function loadingCountryData(){
    fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(coutries => displayCountry(coutries))
}

function displayCountry(countries){
    const countryBoxContainer =document.getElementsByClassName("country-box-container")[0]
    countries.forEach(country =>{
        const newCountry= document.createElement("div")
        newCountry.innerHTML=`
        <h1 > Title: <span class="country-title">${country.name.common} </span></h1> 
        <p> Capital : <span class="country-capital">${country.capital} </span></p>
        <button onclick="getCountryDetailByCode('${country.cca2}')">Detail</button>
        `
        newCountry.classList.add("country")
        countryBoxContainer.append(newCountry)
    })
}

function getCountryDetailByCode(code){
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data =>displayCountryDetailByCode(data))


}


function displayCountryDetailByCode(data){
   const loadDetailDiv= document.getElementsByClassName("loadDetail")[0];
   loadDetailDiv.innerHTML=`
   <h1>Title :<span class="country-title">${data[0].name.common}</span></h1>
    <img class="img" src="${data[0].flags.png}">
   

   `


    console.log(data[0].flags.png)
}
loadingCountryData()