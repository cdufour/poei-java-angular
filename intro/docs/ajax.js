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
