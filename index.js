// function addingEventListener() {
// const input = document.getElementById('button');

//   function clickAlert() {
//     // Handle the event here
//     alert('I was clicked');
//   }
// };

function addingEventListener() {
    const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}