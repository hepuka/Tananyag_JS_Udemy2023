console.log('------ENHANCED OBJECT LITERALS-------');

//a restaurant objektum object literal-al lett létrehozva
//ES6 három új módot vezetett be az object literal írására

const obj={};
//1.) Emhanced object literal létrehozása. 28.sor. Egy külső objektumot adunk hozzá egy objektumhoz egy tulajdonságnévvel
//obj,

//2.) egy objektum metódus írásakor elegendő a tulajdonságnév majd azt követő ()-ben a paraméterek megadása, majd a {}-ben a törzs megírása. pl.: order: function(bla, bla, bla){} helyett elég a 
order(bla, bla, bla){ return bla}
//3.) egytömb destruktúrálása egy objektum tulajdonságnevéhez. pl. egy tömb elemét destruktúrálom egy objektum property-éhez
