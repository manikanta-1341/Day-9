var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function(){
    var data=JSON.parse(request.response)
    var region=data.filter((e)=>e.region==="Asia").map((e)=>e.name)
    console.log(region)
}