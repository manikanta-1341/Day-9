var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=()=>{
    var data=JSON.parse(request.response)
    console.log(data)
    var currency=data.filter((e)=>e.currencies[0].code==="USD").map((e)=>e.name)
    console.log(currency)
}