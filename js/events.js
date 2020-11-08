//define functions here
function getIt() {
  $('p').on('click', e => { alert('Hey!') });
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt() {
  $('input').on('keydown', e => {
    if (e.which === 13 ) {
      e.preventDefault();
      alert('You have pressed the G key.')
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
