console.log("Hello from the JavaScript console!");
function f2k(k) {
   // debugger
   let f = ((k - 273.15) * 9 / 5 + 32);

   return f.toFixed(2);
}
// Your AJAX request here
function displayWeather(data) {
   nyWeather = f2k(data.main.temp);
   // debugger
   $('p.NY-Weather').text(`The weather in New York is ${nyWeather} F`);
};

$.ajax({
   type: 'GET',
   url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
   
   success(data) {
      console.log('we have your weather');
      // console.log(`${f2k(data.main.temp)} F`)
      console.log(data);
      displayWeather(data);
   },
   error() {
      console.error('An error occurred.');
   }
});


console.log("You'll bring honor to us all")
