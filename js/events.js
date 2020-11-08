//define functions here
function getIt() {
  $('p').on('click', e => { alert('Hey!') });
}

function frameIt() {
  $('img').on('load', e => { $('img').attr('class', 'tasty'); });
}

$(document).ready(function(){

// call functions here
getIt();

});
