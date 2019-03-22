// // All the ways to select DOM elements
document.getElementById('the-id') // => DOM elt
document.getElementsByClassName('the-class') // => [DOM elt]
document.getElementsByTagName('the-tag') // => [DOM elt]
document.querySelector('the-css-selector') // => DOM elt
document.querySelectorAll('the-css-selector') // => [DOM elt]

console.log("Hello world!");

// 4 different ways to select the h1
console.log(document.body.children[0])
console.log(document.getElementsByTagName('h1')[0])
console.log(document.querySelector('h1'))

let $theCatDiv = document.getElementById("cat")
console.log($theCatDiv)
$theCatDiv.innerHTML = 'I am a <u>cat</u>!'

$theCatDiv.style.backgroundColor = "red";
$theCatDiv.style.border          = "2px green solid";
$theCatDiv.style.fontSize        = "50px";
$theCatDiv.style.marginTop       = "30px";
$theCatDiv.style.paddingBottom   = "30px";

let $mouseImg =  document.querySelector('.mouse img')
console.log($mouseImg)

let x = 0
let vx = 2
setInterval(function(){
  x += vx
  if (x >= innerWidth-$mouseImg.width) {
    vx = vx * -1
  }
  if (x <= 0) {
    vx = vx * -1
  }
  $mouseImg.style.marginLeft = x+'px'
}, 10)