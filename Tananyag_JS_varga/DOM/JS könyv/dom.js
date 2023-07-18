//document - az éppen aktuális weblap
//objektum - az éppen aktuális weblap egyik objektuma
//a weblap egy objektumára a document-el lehet hivatkozni


let url=document.URL; //kiírja a weblap teljes címét
console.log(document.URL);

let adat=document.getElementById('minta').children;
console.log(adat);
console.log(document.getElementById('minta').className);


function Háttérváltoztatás(id,háttérszín,betűszín,helyzet,szín){

    document.getElementById(id).style.backgroundColor=háttérszín;
    document.getElementById(id).style.color=betűszín;
    document.getElementById(id).style.textAlign=helyzet;
    document.body.style.backgroundColor=szín;
}

//paragrafus tartalmát módosítja a megadott szövegre
function módosít(){

    let bekérés=prompt("Írd be a módosító szöveget!");

    document.getElementById('minta').innerHTML=bekérés;

}

//DOM fa bejárása és objektumainak módosítása
//id alapján megjelöljük azt a listát melyet módosítani szeretnénk
//firstChild (első gyermek) tulajdonsággal megkeresem a lista első elemét
//nextSibling (következő testvér) tulajdonsággal megkeresem a firstChild-hoz kapcsolódó elemeket
//végül is megkeressük az első ygereket és utána megkeressük annak testvéreit
function listamódosítása() {
    var lista = document.getElementById('listám');
    var elem1 = lista.firstChild; //a lista első gyereke
    var elem2 = elem1.nextSibling; //az első gyerek testvére
    var elem3 = elem2.nextSibling; //a 2. gyerek testvére
    var elem4 = elem3.nextSibling; //a 3. gyerek testvére
    elem1.innerHTML = "Torta";
    elem2.innerHTML = "Fagyi";
    elem3.innerHTML = "Süti";
    elem4.innerHTML = "Karamella";
}

let gyerekszam=document.getElementById('listám').childElementCount;
//document.write("A gyerekek(lista elemeinek) száma: "+gyerekszam);


//szövegmező
function szövegmezőadata(){

let nev=document.getElementById('szm1').value;
let cim=document.getElementById('szm3').value;

if(nev.length==0 || cim.length==0){

    alert("Az egyik mező üres");

}else{
  
    document.getElementById('vidő').value=Date();
    document.getElementById('visszanev').value=nev;
    document.getElementById('visszacim').value=cim;

}

}

//Többsoros szövegmező
function szövegküldés(){

    let bejövő=document.getElementById('szövegbe').value;

    document.getElementById('visszaszöveg').style.display="block";

    document.getElementById('visszaszöveg').value=bejövő;

}

//Jelölőnégyzetek
function italválasztás(){

        let sör=document.getElementById('sör');
        let bor=document.getElementById('bor');
        let pálinka=document.getElementById('pálinka');
        let egyéb=document.getElementById('egyéb');

        if(sör.checked){
            document.getElementById('visszaital').value=sör;
       
        }

}

//jQuery

//bekér egy szöveget és azzal módosítja egy elem szövegét
jQuery(document).ready(function(){

$('#jbutton').click(function(){

    let be=prompt("Szövegmódosítás jQuery-vel");

    $('#minta').text(be);

});

});

//elem típusát módosítja (paragrafusból h1-et csinál)
jQuery(document).ready(function(){

$('#ph1re').click(function(){

    $('#ph1').html("<h1>paragrafus címsor lett</h1>");



});

});

//szövegmező, számlanyomtatás jQueryvel
jQuery(document).ready(function(){

    $('#szmjq').click(function(){

        let nev=$('#szm1').val();
        let cim=$('#szm3').val();

        if(nev.length==0 || cim.length==0){

            alert("Az egyik mező üres");
        
        }else{
          
            $('#vidő').val(Date());
            $('#visszanev').val(nev);
            $('#visszacim').val(cim);

           }

    });

});

//css módosítása jQueryvel, css objektumként
jQuery(document).ready(function(){

$('#hmjq').click(function(){

                                     //css objektumok
    $('#div1').css({"background-color":"red", "font-size":"15px"});
                    //tulajdonság     //érték

});

});

//css módosítása jQueryvel, css osztályként
jQuery(document).ready(function(){

    $('#hmcsso').click(function(){
    
        $('#div1').toggleClass("módosít");
    
    });
    
    });

