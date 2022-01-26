var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=()=>{
    var data=JSON.parse(request.response)
    data.forEach(e => {
        console.log(`Country:${e.name}`)
        console.log(`Capital:${e.capital}`)
        console.log(`Flag:${e.flag}`)
    });
}