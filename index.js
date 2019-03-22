console.log("Hello world!");

let $googleLink = document.getElementById('google-link')
console.log('Initial href', $googleLink.getAttribute('href'))
$googleLink.setAttribute('href','https://www.google.com')
$googleLink.setAttribute('target','_blank')
console.log('New href', $googleLink.getAttribute('href'))

// Creation of a new DOM element (not yet on the page)
let $h2 = document.createElement('h2');
$h2.innerText = 'My header 2'
console.log($h2); 

// Insertion of $h2 in the end of the <div id="content">
document.getElementById('content').appendChild($h2)

// // Other solution
// document.getElementById('content').innerHTML += `
//   <h2>My header 2</h2>
// `

let $addButton = document.querySelector('#add-item-button')
$addButton.onclick = function () {
  console.log('Hello')
}