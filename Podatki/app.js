function podatek(dochod) {


  if(dochod < 10000)
  {
    return dochod * 0.05;
  }

  if(dochod> 10000 && dochod < 30000)
  {
    return dochod * 0.1;
  }

  if (dochod > 30000)
  {
      return dochod * 0.15;
  }

}

function licz()
{

//liczy dla pierwszej tabelki
  var dochod1 = document.getElementById('pracadochod1').value;

  podatekwartosc1 = podatek(dochod1);
   document.getElementById("pobranypodatek1").value =podatekwartosc1;


   //liczy dla drugiej tabelki
     var dochod2 = document.getElementById('pracadochod2').value;

     podatekwartosc2 = podatek(dochod2);
      document.getElementById("pobranypodatek2").value =podatekwartosc2;


      //liczy dla trzeciej tabelki
        var dochod3 = document.getElementById('pracadochod3').value;

        podatekwartosc3 = podatek(dochod3);
         document.getElementById("pobranypodatek3").value =podatekwartosc3;

}


function dodatkowyDochod()
{
  var dodatkowyDochod = document.getElementById('dodatkowyDochod').value;

  return dodatkowyDochod;
}


function inc(out){
    field = document.getElementById(out);

        field.value++;

}
function dec(out){
    field = document.getElementById(out);
    if(field.value > 0)
    {
          field.value--;
    }
}

function numberOf(odliczonyPodatek)
{
  var numberOfPercent =  document.getElementById('out').value;
    console.log("Number: " + odliczonyPodatek)
        console.log("Procenty: " + numberOfPercent);
  var afterCalculate = numberOfPercent * 0.05;
    console.log("Number: " + afterCalculate)
  var podatek = odliczonyPodatek * afterCalculate;

return podatek;
}

function remontowe()
{
  var remontowe =   0.05 * document.getElementById('remontowe').value;

    return remontowe;
}

function  zdrowotne()
{
  var zdrowotne =   0.1 * document.getElementById('zdrowotne').value;
  return zdrowotne;

}

function  rodzinne()
{
  var rodzinne =   0.15 * document.getElementById('rodzinne').value;
  return rodzinne;
}

function  naukowe()
{
  var naukowe=   1 * document.getElementById('naukowe').value;
  return naukowe;
}


function oblicz()
{
  var dochod1 = document.getElementById('pracadochod1').value;

  var dochod2 = document.getElementById('pracadochod1').value;

  var dochod3 = document.getElementById('pracadochod1').value;

  var dodatkowy = dodatkowyDochod();

  var remontowe2 = remontowe();

  var zdrowotne2 = zdrowotne();

  var rodzinne2 = rodzinne();

  var naukowe2 = naukowe();

  var wszystkoBezLiczby = +dochod1 + +dochod2 + +dochod3 + +dodatkowy + +remontowe2 + +zdrowotne2 + +rodzinne2 + +naukowe2;
  var zeWszystkim = 0;
  var liczba = document.getElementById('out').value
if(liczba > 0)
{
  zeWszystkim = numberOf(wszystkoBezLiczby);
}
else {
  zeWszystkim = wszystkoBezLiczby;
}

console.log(zeWszystkim);
  var wartosc = zeWszystkim;
    document.getElementById("oblicz").innerHTML = wartosc;
}
