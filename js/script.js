// CAMBIO TESTO A 500PX

var title = window.matchMedia('(max-width: 500px)');

function screenTest(e) {
  if (e.matches) {
    document.getElementById('title_h1').innerHTML = "Design With Vectr";
   } else {
     document.getElementById('title_h1').innerHTML = "Free Vector Graphics Software";
   }
 }

title.addListener(screenTest);

// / CAMBIO TESTO A 500PX
