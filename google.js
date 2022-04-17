function enter(){
    let c = document.querySelector("#city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=946e713601aef34dbf3cf87e83bb4e17`;

    fetch(url).then(function (res){
        return res.json();
    }).then(function (res){
        display(res);
       
    }).catch(function (err){
        console.log(err);
    })
}

function display(data)
{
    document.querySelector("#append1").innerHTML=null;
    let map = document.querySelector("#gmap_canvas");
    let p1 = document.createElement("p");
    p1.innerText = `City : ${data.name}`;
    let p2 = document.createElement("p");
    let temp1 = data.main.temp - 273;
    console.log(temp1)
    p2.innerText = `Temeprature : ${temp1} C`;
    let p3 = document.createElement("p");
    p3.innerText = `Humidity : ${data.main.humidity}`;
    let p4 = document.createElement("p");
    p4.innerText = `Wind speed: ${data.wind.speed}`;
    let p5= document.createElement("p");
    p5.innerText = `Visiablity : ${data.visibility}`;

    document.querySelector("#append1").append(p1,p2,p3,p4,p5);
    
    map.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCnnWfDnjniI-iZQ9EDncrufj_4AWsn1v8&q=Space+Needle,Seattle+WA`;

    
}