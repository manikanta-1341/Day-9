var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=()=>{
    var data=JSON.parse(request.response)
    var total_population=data.map((e)=>e.population).reduce((acc,cv)=>acc+cv)
    console.log(total_population)
}