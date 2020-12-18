/*const $container = document.getElementById('container')

fetch('https://jsonplaceholder.typicode.com/users/1' )
    .then( function (response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        $container.textContent = `
        Name: ${data.name}
        Email: ${data.email}
        `


    })

    .catch(error =>{
        console.log(error.name, error.message)
    })
    */ 
//    const $image = document.getElementById('image')

//    fetch('https://api.nasa.gov/planetary/apod?api_key=Z5jPnGKOCCJiMz6eR0lmnstjHoGjS9AEvmFnQquP&date=2020-12-02')

//    .then(Response =>{
//        return Response.json()
//    })

//     .then(data => {
//         console.log(data.url)
//         console.log(data.copyright)
//         console.log(data.date)
//         console.log(data.explanation)
//         $image.src = data.url
//     })

//     .catch(error =>{
//         console.log(error.name, error.message)
//     })


//     var d = new Date();
// document.getElementById("demo").innerHTML = d;
// const d=newDate 



const $darkMode = document.getElementById('dark-mode')
const $lightMode = document.getElementById('light-mode')
const $body = document.querySelector('body')

if(localStorage.getItem('theme')=== 'dark' ){
    $body.style.backgroundColor = '#555'
    } else if (localStorage.getItem('theme') === 'light'){
        $body.style.backgroundColor= '#aaa'
    }


$darkMode.addEventListener('click', function(){
    $body.style.backgroundColor = '#555'
    localStorage.setItem('theme', 'dark')
})

$lightMode.addEventListener('click', function(){
    $body.style.backgroundColor = '#aaa'
    localStorage.setItem('theme', 'light')
})
 

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


document.write("<p>");
var day = new Date();
var hr = day.getHours();
if (hr == 1) {
 document.write("Good morning! 1AM! ");
}
if (hr == 2) {
 document.write("Hey, it is past 2AM! GO TO BED!");
}
if (hr == 3) {
 document.write("Hey, it is after 3AM! Are you a vampire or what?");
}
if (hr == 4) {
 document.write("4AM? You must roam all night huh!");
}
if (hr == 5) {
 document.write("Whoa! It's almost daylight and your still going!");
}
if (hr == 6) {
 document.write("Hey, isn't it too early to be using your computer");
}
if ((hr == 6) || (hr == 7) || (hr == 8) || (hr == 9) || (hr == 10)) {
 document.write("Good Morning!");
}
if (hr == 11) {
 document.write("11AM... Is it time for lunch yet?");
}
if (hr == 12) {
 document.write("NOON! Great, it must be time for lunch!");
}
if (hr == 14) {
 document.write("It's 2PM. Have you eaten lunch yet?");
}
if ((hr == 15) || (hr == 16) || (hr == 13)) {
 document.write("Good Afternoon!");
}
if ((hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
 document.write("Good Evening! Welcome to prime time on the web!");
}
if (hr == 23) {
 document.write("It's almost midnight...Aren't you sleepy yet?");
}
if (hr==0) {
 document.write("It's midnight... do you ever sleep?");
}
document.write("</p>");



function myFunction() { 
    var x = document.getElementById("date");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  /*const $container = document.getElementById('container')

fetch('https://jsonplaceholder.typicode.com/users/1' )
    .then( function (response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        $container.textContent = `
        Name: ${data.name}
        Email: ${data.email}
        `


    })

    .catch(error =>{
        console.log(error.name, error.message)
    })
    */ 
          /*  const $image = document.getElementById('image')

            fetch('https://api.nasa.gov/planetary/apod?api_key=Z5jPnGKOCCJiMz6eR0lmnstjHoGjS9AEvmFnQquP&date=2020-12-17')

            .then(Response =>{
                return Response.json()
            })

                .then(data => {
                    console.log(data.url)
                    console.log(data.copyright)
                    console.log(data.date)
                    console.log(data.explanation)
                    $image.src = data.url
                })

                .catch(error =>{
                    console.log(error.name, error.message)
                })

    */


 



function getImage(){
  var today = new Date();
     const $image = document.getElementById('clockdate')

   fetch('https://api.nasa.gov/planetary/apod?api_key=Z5jPnGKOCCJiMz6eR0lmnstjHoGjS9AEvmFnQquP&date=' + today.getFullYear() + '-'+ (today.getMonth()+1) +'-' + today.getDate())

   .then(Response =>{
       return Response.json()
   })

    .then(data => {
        console.log(data.url)
        console.log(data.copyright)
        console.log(data.date)
        console.log(data.explanation)
        $image.style.backgroundImage = "url('" + data .url + "')";

    })

    .catch(error =>{
        console.log(error.name, error.message)
    })
} 
    