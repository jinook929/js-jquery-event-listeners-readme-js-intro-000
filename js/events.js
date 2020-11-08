//define functions here
function getIt() {
  $('p').on('click', e => { alert('Hey!') });
}

function frameIt() {
  $('img').attr('class', 'tasty');
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
