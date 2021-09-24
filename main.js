window.addEventListener('load',function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            const long =position.coords.longitude;
            const lattitude=position.coords.lattitude;
            fetch('http://api.weatherapi.com/v1/current.json?key=8128cff15a334620911194615212409&q=Dhaka&aqi=no')
            .then(data=>data.json())
            .then(data=>{
                const {feelslike_c,feelslike_f,text}=data.current;
                console.log(data);

                document.getElementById('temp').innerText=feelslike_c + ' C';
                document.getElementById('tempF').innerText=feelslike_f + ' F';


            })
            

            
        });
        

    }
    else
    {
        alert('please accept your location access')
    }
})
function showTime(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();
    let session='AM';
    if(hour==0)
    {
        hour=12;
    }
    if(hour>12)
    {
        hour-=12;
        session='PM';
    }
    hour=(hour<10) ? '0'+hour :hour;
    minute=(minute<10) ? '0'+minute :minute;
    seconds=(seconds<10) ? '0'+seconds :seconds;
    let time=hour+':'+minute+':'+seconds+' '+session;
    document.getElementById('time').innerText=time;
    document.getElementById('time').textContent=time;
    setTimeout(showTime, 1000);

    
}
showTime();