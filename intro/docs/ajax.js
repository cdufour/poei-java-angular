// requête ajax jquery, callback
$.get(url, function(res) {
  console.log(res)
}, function(err) {
  console.log(err)
})

// requête ajax jquery, promise
let promise = $.get(url);
promise
  .then(res => console.log(res))
  .catch(err => console.log(err));

// code tapé dans JSBIN
/*
let v1 = "v1";
let v2 = "v2";
let v3 = "v3";

setTimeout(function() {
  console.log('Bravo');
}, 3000)

setTimeout(function() {
  console.log('Sei un scemo');
  console.log(v1);
}, 2000)


setInterval(function() {
  console.log('Sono il migliore di tutti');
}, 1000);

console.log(v2);
console.log(v3);
*/


let url = 'https://jsonplaceholder.typicode.com/posts';

$.get(url).then(function(res) {
  $('body').append('<p>'+res[0].title+'</p>');
})

$('body').append('<p>Coucou</p>');
$('body').append('<p>les</p>');
$('body').append('<p>amis</p>');


let message = "ciao";
let messageObs = Rx.Observable.of(message);

//console.log(typeof message);
//console.log(typeof messageObs);

let source = Rx.Observable.of(4);

messageObs
  .map(x => 'arrivederci')
  .map(x => 'A presto')
  .subscribe(x => console.log(x))

let square = (n) => n*n;

source
  .map(x => square(x))
  .map(function(o) {
    return o/2;
  })
  .subscribe(function(x) {
    //console.log(x);
  });


  let tab = [
    {name:'Alex', age: 45},
    {name:'Gabi', age: 9},
    {name:'Anca', age: 23}
  ];
  //let newTab = tab.map(elem => 'bonjour ' + elem);

  let filteredTab = tab.filter(person => {return person.age > 17});

 //console.log(tab);
 console.log(filteredTab);
