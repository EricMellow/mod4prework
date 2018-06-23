
var button = document.querySelector('.sunset-btn');


button.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('hit')
  window.location.assign("http://localhost:3000/sunsets")
});

button.addEventListener('click')