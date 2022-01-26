var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=()=>{
    var data=JSON.parse(request.response)
    var countries=data.filter((e)=>e.population<200000).map((e)=>e.name)
    console.log(countries)
}