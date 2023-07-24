// JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross Platform , OOP uygun ,

// single comment

/*

Multiple comment

*/

// console.log("loglama");
// console.info("info");
// console.warn("warn");
// console.error("err");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");
// document.writeln("ekranda yazı");

// VERIABLE

// var result=4423;
// console.log(typeof result + " => "+result);

// var result=44.23;
// console.log(typeof result + " => "+result);

// var result="Js öğreniyorum";
// console.log(typeof result + " => "+result);

// var result=true;
// console.log(typeof result + " => "+result);

// //Naming Convensition

// var deneme="Js Data";
// console.log(deneme);

// var deneme44="Js Data 44";
// console.log(deneme44);

// var $deneme="Js Data $";
// console.log($deneme);

// var _deneme="Js Data_";
// console.log(_deneme);

// var denemeVerisi="JsData";
// console.log(denemeVerisi);

// başa sayı yazıldığı zaman hata veriyor

///////////////////////////////////////////////////////////////////////

// whoisting
// result2=56;
// var result2;

///////////////////////////////////////////////////////////////////////

// Operators
// + - * ** / %
// ! DEĞİL  && -VE
// x++
// x--
// ++x
// --x

// =   ATAMA
// ==  EŞİT (TÜRÜNE BAKMA)
// === EŞİT (TÜRÜNE BAK)

///////////////////////////////////////////////////////////////////////

// var number1=40;
// var number2=5;

// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// var userData=prompt("Lütfen sayı giriniz"); //Promptan gelen veriler stringtir
// console.log(userData);

// cast
// var userData2=Number(prompt("Lütfen sayı giriniz"))
// console.log(userData2);

///////////////////////////////////////////////////////////////////////

// Undefined
// var result4;
// console.log(result4);

// NAN

// var result5="asd"/4;
// console.log(result5)

// isNAN

// var result6=4;
// console.log(isNaN(result6)); //false: sayıdır

// Infinity

// console.log(4/0)

///////////////////////////////////////////////////////////////////////

// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4,1,99,555,25,-100));
// console.log(Math.max(4,1,99,555,25,-100));

// console.log(Math.sqrt(16));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));

// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.9));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));

// console.log(Math.sin(45));

// console.log(Math.round(Math.random()*9+1));

///////////////////////////////////////////////////////////////////////

// Number

// var sayi=15000;
// console.log(sayi);

// var sayi2=15E+3;
// console.log(sayi2);

// binary, octal, decimal, hexadecimal = ARAŞTIR

// binary : 0-1
// var binary=0b0000011;
// console.log(binary);

// octal : 0-1-2-3-4-5-6-7
// var octal=0o0076011;
// console.log(octal);

// decimal : 0-1-2-3-4-5-6-7-8-9
// var decimal=123456;
// console.log(decimal);

// hexadecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
// var hexadecimal=0xffa;
// console.log(hexadecimal);

//  Number() parseInt arasındaki fark = ARAŞTIR
//  String() toString() arasındaki fark = ARAŞTIR

// Cast
// database, port ,api (string)

// console.log(Number("10")+10);
// console.log(parseInt("10")+10);

// console.log(String(30)+10);
// var number=10;
// console.log(number.toString()+10);

//////////////////////////////////////////////////////////////////////

// var, let, const

// var= global değişkenlerde kullanırız
// var data1=11;
// console.log(data1)

// var data1=22;
// console.log(data1)

// let
// let data2=33;
// console.log(data2)

// let data3=44;
// data3=25;
// console.log(data3)

// const= değiştirilemiyor
// const data5=55;
// console.log(data5)

///////////////////////////////////////////////////////////////////////

// String
// boşuk bir karakterdir.

// let str="js Öğreniyorum js ";
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.charAt(0));

// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));

// console.log(str.concat("sona ekleme"));
// console.log(str.replace(str,"değiştir"));

// console.log(str.substring(1));
// console.log(str.substring(0,4));

//Ödev

///////////////////////////////////////////////////////////////////////

// FUNCTION
// Kendimizi tekrar etmek istemiyorsak

// 1 Return suz parametresiz function
// function returnsuzParametresiz(){
//     console.log("deneme");
// }
// returnsuzParametresiz();

// 2 Return suz parametreli function
// function returnsuzParametreli(adi){ //parametre: adi
//     console.log("deneme"+" "+ adi);
// }
// returnsuzParametreli("DidemÇ"); // argüman : "DidemÇ"

// 3 Return lu parametresiz function
// function returnluParametresiz(){
//     return "return lu parametresiz ";
// }
// let result =returnluParametresiz();
// console.log(result);

// 4 Return lu parametreli function
// function returnluParametreli(soyadi){
//     return "return lü parametreli"+" "+soyadi;
// }
// let result4 =returnluParametreli("Çetin");
// console.log(result4);

///////////////////////////////////////////////////////////////////////

// Normal Function
// function normal () {}

// Anonymous (Function)

// let anonymous = function () {}

///////////////////////////////////////////////////////////////////////

// Arrow  (Function)

// let arrow = () => {}

///////////////////////////////////////////////////////////////////////

// let veya const =>
//KULLANCAKLARIMIZ
// arrow function =>

///////////////////////////////////////////////////////////////////////

// function deneme1() {
//   console.log("normal function");
// }
// deneme1();

// const deneme2 = function () {
//   console.log("anonymous");
// };
// deneme2();

// const deneme3 = () => {
//   console.log("arrow");
// };
// deneme3();

// //Immedia Function()();
// (function () {
//   console.log("deneme4");
// })();

///////////////////////////////////////////////////////////////////////

//Condition

const condi = () => {
  let number = 4;
  if (number >= 2) {
    console.log("Büyüktür");
  } else {
    console.log("Küçüktür");
  }
};
// condi();

const condi2 = () => {
  let number = 4;
  if (number >= 2) console.log("Büyüktür");
  else console.log("Küçüktür");
};
// condi2();

const condi3 = () => {
  let number = 4;

  let result = number >= 2 ? "Büyüktür" : "Küçüktür";
  console.log(result);
};
// condi3();

const condi4 = () => {
  let number = 4;

  console.log(number >= 2 ? "Büyüktür" : "Küçüktür");
};
// condi4();

const condi5 = () => {
  let number = 4;
  if (number == "1") {
    console.log("1");
  } else if (number == "2") {
    console.log("2");
  } else if (number == "3") {
    console.log("3");
  } else if (number == "4") {
    console.log("4");
  } else {
    console.log("1<=x<=5 dışındadır");
  }
};
// condi5();

//Switch Case

const condi6 = () => {
  let number = 4;
  //break  : döngü kırmak
  //return  : metot kırmak
  //continue : 1 kereye mahsus es geç sonra döngüye devam et
  switch (number) {
    case 1:
      console.log("1");
      break; //döngü kırmak
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    case 4:
      console.log("4");
      break;
    default:
      console.log("1<=x<=5 dışındadır");
      break;
  }
};
// condi6();

///////////////////////////////////////////////////////////////////////

//Örnek2 : Kullanıcı tarafında verilen sayının tek mi çift mi olduğunu kontrol et;
// let userData_11 = Number(prompt("Lütfen bir sayı giriniz"));
// if(userData_11%2==0){
//     console.log("Girilen sayı: " + userData_11 + " çifttir.")
// }
// else{
//     console.log("Girilen sayı:  "+ userData_11 +" tektir." )
// }

let tekCift = () => {
  const result = Number(prompt("Lütfen sayı giriniz"));
  if (result % 2 == 0) {
    console.log("Girdiğiniz sayı : " + result + " " + "Çifttir");
  } else {
    console.log("Girdiğiniz sayı : " + result + " " + "Tektir");
  }
};
// tekCift();

///////////////////////////////////////////////////////////////////////

//loop=Döngü

//For

let loop = () => {
  for (let i = 1; i <= 10; ++i) {
    document.write(i + " ");
  }
};
// loop();
document.writeln("<br/>");

//While

let loop2 = () => {
  let i = 1;
  while (i <= 10) {
    document.write(i + " ");
    i++;
  }
};
// loop2();
document.writeln("<br/>");

//Do-While : En kötü ihtimalle bir kere çalışır sonra durur.

let loop3 = () => {
  let i = 1;
  do {
    document.write(i + " ");
    i++;
  } while (i <= 10);
};
// loop3();

///////////////////////////////////////////////////////////////////////

//Örnekler

///////////////////////////////////////////////////////////////////////

// try catch(Error Handling)

let tryCatchTuto = () => {
  try {
    alertx("pop-up");
  } catch (error) {
    console.log("hata mesajı: " + error.message);
    console.log("hata mesajı: " + error.name);
    console.error(error);
  } finally {
    console.log("db.close");
    console.log("port.close");
  }

  console.log("son satır");
};
// tryCatchTuto();

///////////////////////////////////////////////////////////////////////

// debug nedir?
// 1 ile 10 dahil olmak üzere toplama işlemi yapan js alg yazınız

const debugData = () => {
  let sum = 0; //Toplama da 0 etkisiz eleman old için, çarpma olsaydı 1 alıcaktık -başlangıç datası
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  console.log("Toplam: " + sum);
};
//  debugData();

///////////////////////////////////////////////////////////////////////

// return break continiue

// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

const bitisUserToplama = () => {
  //userData
  let ortakToplam = 0;
  let tekToplam = 0,
    tekKacTane = 0,
    tekSayilar = "";
  let CiftToplam = 0,
    ciftKacTane = 0,
    ciftSayilar = "";
  let userDataBitis = Number(prompt("Lütfen bitiş sayısını giriniz"));

  for (let i = 1; i <= userDataBitis; i++) {
    if (userDataBitis === 44) {
      console.log("secret-key numarası hatası" + " " + userDataBitis);
      break;
    }
    if (i === 7) {
      console.log("7 sayısını toplama !!" + " " + userDataBitis);
      continue;
    }
    if (i === 50) {
      console.log(
        "En fazla 50 sayısına kadar hesaplanır" + " " + userDataBitis
      );
      break;
    }

    if (i % 2 == 0) {
      // CiftToplam=CiftToplam+i;
      CiftToplam += i;
      ciftKacTane++;
      ciftSayilar = ciftSayilar + " " + i;
    } else {
      tekToplam += i;
      tekKacTane++;
      tekSayilar = tekSayilar + " " + i;
    }
    ortakToplam = ortakToplam + i;
    // ortakToplam += i;
  }

  console.log("Toplam : " + ortakToplam);
  console.log("Çift Sayılar : " + ciftSayilar);
  console.log("Çift Sayı adedi : " + ciftKacTane);
  console.log("Çift Sayılar Toplamı : " + CiftToplam);

  console.log("Tek Sayılar : " + tekSayilar);
  console.log("Tek Sayı adedi : " + tekKacTane);
  console.log("Tek Sayılar Toplamı : " + tekToplam);
};
// bitisUserToplama();

////////////////////////////////////////////////////////
// Example

// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

const maskelemeEx = () => {
  let usernameAndSurname = prompt("Lütfen isim ve soyisminizi giriniz.");
  let usernameFirst = usernameAndSurname.substring(0, 1).toUpperCase();
  let maskedUsername = usernameAndSurname.substring(
    1,
    usernameAndSurname.indexOf(" ")
  );

  for (let i = 0; i < maskedUsername.length; i++) {
    maskedUsername = maskedUsername.replace(maskedUsername.charAt(i), "*");
  }

  let surnameThree = usernameAndSurname
    .substring(
      usernameAndSurname.indexOf(" ") + 1,
      usernameAndSurname.indexOf(" ") + 4
    )
    .toUpperCase();
  let maskedSurname = usernameAndSurname.substring(
    usernameAndSurname.indexOf(" ") + 4,
    usernameAndSurname.length
  );

  for (let i = 0; i < maskedSurname.length; i++) {
    maskedSurname = maskedSurname.replace(maskedSurname.charAt(i), "*");
  }

  console.log(
    usernameFirst + maskedUsername + " " + surnameThree + maskedSurname
  );
};
// maskelemeEx();

////////////////////////////////////////////////////////

//software prensible (KISS, YAGNI, SOLID, CLEAN CODE, SPAGETTİ CODE, DUMMY CODE) => ARAŞTIR

////////////////////////////////////////////////////////

//MONAD : Bir fonksiyonun çıktısı diğer fonksiyonun girdisidir.

// const birinci=()=>{
//   let user =Number(prompt("Lütfen bir sayı giriniz"));
//   return user;
// }

// const ikinci=()=>{
// let data=birinci();
// console.log(Math.sqrt(data));
// }
// ikinci();

//Monad end

////////////////////////////////////////////////////////

//setTimeOut() , setInterval()

//belirli bir zaman sonra tek bir kere çalışır ve durur.
// setTimeout(function(){
//   console.log("setTimeOut çalıştı");
// },2000);

//belirli bir zaman sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır.
// setInterval(function(){
//   console.log("setInterval çalıştı");
// },3000)

////////////////////////////////////////////////////////

//callbackfunction :Bir fonks başka bir fonks çağırıyor.

const birinci = (data) => {
  console.log(Math.pow(data, 2));
};

const ikinci = (callbackfunction) => {
  let user = Number(prompt("Lütfen bir sayı giriniz."));
  let data = callbackfunction(user);
  console.log(data);
};
// ikinci(birinci);

////////////////////////////////////////////////////////

//promise

const promTutorials = () => {
  //catch 1 tane olmak zorunda.
  //promise yapısının içindeki olumlu ise then yapısının içine düşücek, apiden veri gelmedi veya sonuç olumsuz catch
  let data = new Promise((resolve, reject) => {
    let status = 200;
    if (status === 200) resolve("çalıştı");
    else reject("çalışmadı");
  })
    .then(() => {
      console.log("olumlu");
    })
    .catch((err) => {
      console.error(err);
    });
};
// promTutorials();

////////////////////////////////////////////////////////

//asyn/await

////////////////////////////////////////////////////////

//dizi, forEach, map , filter ,

let arr = () => {
  const numbers = [3, 5, 6, 1, 9, 4, 66];
  return numbers;
};

let arrResult = () => {
  let data = arr();
  console.log(data);
  console.log(data[0]);
  console.log(data[4]);
  console.log(data[data.length - 1]);

  //Iterative For Loop
  // for (let i = 0; i < data.length; i++) {
  //   document.write(data[i] + " ");
  // }

  // document.write("</br>");

  // //for in =indis numaralarını veriyor
  // for (let temp in data) {
  //   document.write(temp + " => " + data[temp] + "<br>");
  // }
  // document.write("</br>");

  // //for of =elemanın kendisine erişim sağlıyorsun
  // for (let temp of data) {
  //   document.write(temp + " ");
  // }
  // document.write("</br>");
  //forEach
  // (callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  // data.forEach((value, index, array) => {
  //   // document.write(index + " => " + value + " </br>");
  //   document.write(`${index} => ${value} </br>`);
  // });

  // document.write("</br>");

  //filter
  //filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  // let result1 = data
  //   .filter((value, index, array) => {
  //     return value % 2 == 0;
  //   })
  //   .forEach((value, index, array) => {
  //     // document.write(index + " => " + value + " </br>");
  //     document.write(`${index} => ${value} </br>`);
  //   });

  //   document.write("</br>");

  //map
  //map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  // data.map((value, index, array) => {
  //   return (value += 10);
  // }).forEach((value, index, array) => {
  //   // document.write(index + " => " + value + " </br>");
  //   document.write(`${index} => ${value} </br>`);
  // });

  //dizilere devam

  document.writeln("Eleman sayısı : ", data.length);
  console.log(data);
  data.push(99); //sona bir eleman ekler
  data.unshift(11); //başa bir eleman ekler

  console.log(data);
  data.pop(); //sondan 1 eleman çıkar
  data.shift(); //baştan 1 eleman çıkar
  console.log(data);

  // data.sort();
  // console.log(data);

  //  data.reverse();  //tepetaklak
  //  console.log(data);

  data.sort().reverse();
  console.log(data);

  console.log(data.toString().substring(0, 2));

  //splice , slice
};
// arrResult();

// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

 2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter
*/
////////////////////////////////////////////////////////

//callback promise örneği

let callbackFunctionComputer = () => {
  //dizi objesi içerisinde 5 tane random obje oluşturalım
  const computerArray = [];
  // { computerName: "callback computer 1", price: 100 },
  for (let i = 1; i <= 5; i++) {
    let computerObject = { computerName: `computer${i}`, price: 100 * `${i}` };
    computerArray.push(computerObject);
  }
  console.log(computerArray);

  //bu dizi içerisindeki sadece computername bileşenlerini gösterelim

  // for (let i = 0; i < diziObject.length; i++) {
  //   console.log(diziObject[i].computerName);

  // }

  const arrayInComputerName = () => {
    computerArray.map((value) => {
      // console.log(`computer Name: ${value.computerName}`);
    });
  };
  arrayInComputerName();
  //////////////////////////////////////////////////////////

  // //callback function object

  const arrayInComputerObject = (obj, callbackFunc) => {
    computerArray.push(obj);
    callbackFunc();
  };
  arrayInComputerObject(
    { computerName: "computer6", price: 600 },
    arrayInComputerName
  );
};
// callbackFunctionComputer();

//promise örneği

let promiseFunctionComputer = () => {
  //dizi objesi içerisinde 5 tane random obje oluşturalım
  const computerArray = [];
  // { computerName: "callback computer 1", price: 100 },
  for (let i = 1; i <= 5; i++) {
    let computerObject = { computerName: `computer${i}`, price: 100 * `${i}` };
    computerArray.push(computerObject);
  }
  console.log(computerArray);

  //bu dizi içerisindeki sadece computername bileşenlerini gösterelim

  // for (let i = 0; i < diziObject.length; i++) {
  //   console.log(diziObject[i].computerName);

  // }

  const arrayInComputerName = () => {
    computerArray.map((value) => {
      // console.log(`computer Name: ${value.computerName}`);
    });
  };
  arrayInComputerName();
  //////////////////////////////////////////////////////////

  //promise function

  const arrayInComputerObject = (obj) => {
    const promiseReturn = new Promise(() => {
      computerArray.push(obj);
    });

    return promiseReturn;
  };
  arrayInComputerObject({ computerName: "computer6", price: 600 })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};
// promiseFunctionComputer();

//////////////////////////////////////////////////////////

//ödev:json nedir? Xml nedir? arasındaki farklar nedir?

//object

let objectTutorials = () => {
  const personObj = {
    name: "Didem",
    surname: "Çetin",
    number: 44,
    isLogin: true,
    software: ["Html", "Css", "Js"],
    fullname: function () {
      return this.name + " " + this.surname;
    },
  };
  console.log(personObj);

  //Veriable
  console.log(personObj.name);
  console.log(personObj.surname);

  //Veriable nested(harici)
  console.log(personObj["name"]);
  console.log(personObj["surname"]);

  //Array
  console.log(personObj.software[0]);

  //ToString
  const objectToString = JSON.stringify(personObj);
  console.log(objectToString);

  //ToObject
  const stringToObject = JSON.parse(objectToString);
  console.log(stringToObject);

  //Object Veriable

  personObj.language = "english";
  console.log(personObj.language);

  //function callback
  console.log(personObj.fullname());
};
// objectTutorials();

//object constructor

let objectConstructor = () => {
  let personConstructor = function (name, surname) {
    this.name = name;
    this.surname = surname;
    console.log(this);
  };
  let personResult = new personConstructor("Didem", "Çetin");
  console.log(personResult.name);
};
// objectConstructor();

let objectConstructor1 = () => {
  let carConstructor = function (age, brand) {
    this.age = age;
    this.brand = brand;
    console.log(this);
  };
  let carResult = new carConstructor(10, "Renault");
  console.log(carResult.brand);
};
// objectConstructor1();

///////////////////////////////////////////////////////////

//call, apply, bind
//anonymous func ile arrow funct arasındaki fark araştır
let noParameterCallApplyBind = () => {
  //function
  let functionOtherObject = function () {
    document.writeln(
      `Parametresiz function : ${this.adi} => ${this.soyadi} </br>`
    );
  };

  //object
  let objectData = {
    adi: "Spora gidiyorum",
    soyadi: "ajsjs",
  };

  functionOtherObject.call(objectData);
  functionOtherObject.apply(objectData);
  let deneme = functionOtherObject.bind(objectData);
  deneme();
};
// noParameterCallApplyBind();
document.writeln(" </br>");

let ParameterCallApplyBind = () => {
  //function
  let functionOtherObject = function (surname) {
    document.writeln(`Parametresiz function : ${this.adi} => ${surname} </br>`);
  };

  //object
  let objectData = {
    adi: "Spora gidiyorum",
  };

  functionOtherObject.call(objectData, "Çetin");
  functionOtherObject.apply(objectData, ["Çetin"]);
  let deneme = functionOtherObject.bind(objectData, "Çetin");
  deneme();
};
// ParameterCallApplyBind();

//////////////////////////////////////////////////////////
//event

let eventFunction = () => {
  alert("deneme");
};

//////////////////////////////////////////////////////////
//dom

let newDataDate = () => {
  //HTML
  //  document.getElementById("text_data").innerHTML="17/07/2023";
  //  document.getElementById("text_data").innerHTML= new Date().getFullYear();
  // let now =document.getElementById("text_data");

  //QUERYSELECTOR ID => #  CLASS => .
  let now = document.querySelector("#text_data");

  // now.innerHTML=new Date().getFullYear();
  // now.innerHTML="<b><i><mark>"+new Date().getFullYear()+"</mark></i></b>";
  // now.innerHTML=`<b><i><mark> ${new Date().getFullYear()}</mark></i></b>`

  //TEXT
  // now.innerText=`<b><i><mark> ${new Date().getFullYear()}</mark></i></b>`
  now.innerText = `${new Date().getFullYear()}`;

  //CSS

  now.style.color = "blue";
  now.style.backgroundColor = "yellow";
  now.style.padding = "5rem";
};

//DOM ÖRNEK

//Paragraf_id2 adından bir paragraf olsun. Bu paragrafa kullanıcı mouse ile tıkladığında
//aşağıda <span id="special_id"></span> içine tıklandı veya paragraf üstüne gelindi yazsın.

// let tiklandi=()=>{
//   let tiklama=document.getElementById("paragraf_id2");
//   tiklama.innerHTML=`<span id="special_id">Tıklandı</span>`
// }

// let uzerinde=()=>{
//   let uzeri=document.getElementById("paragraf_id2").innerHTML=`<span id="special_id">Üstüne gelindi</span>`
// }

//////////////////////////////////////////////////////////

let domData2 = () => {
  //ID ile bulma
  // let domUserData=document.getElementById("dom_id").innerText="Id"
  //CLASS ile bulma
  //let domUserData =document.getElementsByClassName("dom_class")[0].innerText="Dom class";
  //TAG NAME ile bulma
  // let domUserData=document.getElementsByTagName("p")[2].innerText="DOM TAG";
};
//////////////////////////////////////////////////////////

//Dom örnek2

//Butona tıkladığımızda kullanıcıya soru sorsun
//Farklı bir sayfaya gitmek ister misiniz
//evet ise farklı bir sayfaya redirect
//hayır ise alert versin

let outSite = () => {
  let userInformation = window.confirm(
    "Farklı bir sayfaya gitmek ister misiniz?"
  )
    ? (window.location = "https://www.google.com.tr/")
    : window.alert("Bu sayfada kalındı");
};


//////////////////////////////////////////////////////////


//listener
//Ödev : Kullanıcı bu paragrafa kaç kere tıkladı (sayaç tutalım)
let userListener=()=>{
let listenerParag=document.getElementById("parag_list");
listenerParag.addEventListener("click",function (e) {
  //alert(e.preventDefault+" "+e.target);
  //document.getElementById("log_admin").innerHTML="Takip edildi";
   $("#log_admin").html("Takip edildi");
  })
}
userListener();

//////////////////////////////////////////////////////////

//localStorage(Bireysel)
//veriler bizim için önemlidir
//verileri saklarız, Database, Browser

let localStorageData=()=>{
  //localstorage de bir veriyi kaydetmek için :setItem
const adi=localStorage.setItem("name","Didem");
const soyadi=localStorage.setItem("surname","Çetin");
console.log(localStorage);

  //localstorage de bir veriyi çağırmak için :getItem
const getAdi=localStorage.getItem("name");
alert(getAdi);

  //ilgili item ı silmek içn :RemoveItem
  localStorage.removeItem("name");

  //her şeyi silmek için: clear
  localStorage.clear();
}
localStorageData();
//////////////////////////////////////////////////////////
//Jquery ajax GET/POST

//////////////////////////////////////////////////////////

//KDV hesaplaması:JS
//React
