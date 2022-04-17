



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
    p2.innerText = `Temeprature : ${(data.main.temp-273).toFixed(2)} C`;
    let p3 = document.createElement("p");
    p3.innerText = `Humidity : ${data.main.humidity}`;
    let p4 = document.createElement("p");
    p4.innerText = `Wind speed: ${data.wind.speed}`;
    let p5= document.createElement("p");
    p5.innerText = `Visiablity : ${data.visibility}`;

    document.querySelector("#append1").append(p1,p2,p3,p4,p5);
    
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    
}

function self(){
    navigator.geolocation.getCurrentPosition(success)
    function success(pos) {
        var crd = pos.coords;

        

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        // dis(crd.longitude,crd.latitude)
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=946e713601aef34dbf3cf87e83bb4e17`;

        fetch(url).then(function (res){
            return res.json();
        }).then(function (res){
            display(res);
            console.log(res)
        
        }).catch(function (err){
            console.log(err);
        })
        
    }
}









