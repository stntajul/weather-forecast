
document.getElementById('search').addEventListener('click',function(){
    const cityInput=document.getElementById('cityInput').value;
  
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&appid=5e89cf6594877f12c9b8c42a57d66007')
        .then(res=>res.json())
        .then(data=>{
            document.getElementById('cityName').innerText=data.name;
            console.log(data);
           
            document.getElementById('temp').innerText= data.main.temp;
            document.getElementById('description').innerText=data.weather[0].description;
            

        })




});

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