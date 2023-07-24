//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?

// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// let a=Math.abs(-5.9);
// console.log(a)
// 2-yuvarlama yapsın  6.0
// let b=Math.ceil(a);
// console.log(b);
// 3-karesini alsın 36.00
// let c=Math.pow(b,2)
// console.log(c)
// 4-karekök alsın 6.0
// let d=Math.sqrt(c)
// console.log(d)
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// let e=d%5;
// console.log(e);
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// let userData_1= Number(prompt("Lütfen bir sayı giriniz"));
// if(userData_1<0){
//     console.log("Girdiğiniz sayı" +" : " + userData_1 + " Negatif bir sayıdır.");
// }
// else{
//     console.log("Girdiğiniz sayı" +" : " + userData_1 + " Pozitif bir sayıdır.")
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// let userPass=prompt("Lütfen password giriniz");
// let userRePass=prompt("Lütfen repassword giriniz");
// if(userPass==userRePass){
//     console.log("Password ve Repassword eşleşiyor.");
// }
// else{
//     console.log("Lütfen verileri konrol edin, doğrulanamadı.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// ÖDEV:  06.07.2023
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

function negatifPozitif() {
  const userNumber = Number(prompt("Lütfen bir sayı giriniz"));
  if (userNumber < 0) {
    console.log("Girdiğiniz sayı" + " " + userNumber + " " + "Negatiftir");
  } else {
    console.log("Girdiğiniz sayı" + " " + userNumber + " " + "Pozitiftir");
  }
}
// negatifPozitif();

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

const tekCiftAnonymous = function () {
  const userNumber2 = Number(prompt("Lütfen bir sayı giriniz"));
  if (userNumber2 % 2 == 0) {
    console.log("Girdiğiniz sayı" + " " + userNumber2 + " " + "Çifttir");
  } else {
    console.log("Girdiğiniz sayı" + " " + userNumber2 + " " + "Tektir");
  }
};
// tekCiftAnonymous();

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

const haftanınGunleri = () => {
  const userData = Number(
    prompt("Lütfen haftanın kaçıncı gününde olduğumuzu yazınız")
  );
  switch (userData) {
    case 1:
      console.log("Bugün pazartesi");
      break;
    case 2:
      console.log("Bugün salı");
      break;
    case 3:
      console.log("Bugün çarşamba");
      break;
    case 4:
      console.log("Bugün perşembe");
      break;
    case 5:
      console.log("Bugün cuma");
      break;
    case 6:
      console.log("Bugün cumartesi");
      break;
    case 7:
      console.log("Bugün pazar");
      break;
    default:
      console.log("Hafta 7 günden oluşur.");
      break;
  }
};
// haftanınGunleri();

////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

const denklemAlgo = () => {
  let dataX = Number(prompt("Lütfen x değerini giriniz."));
  let dataK = Number(prompt("Lütfen k değerini giriniz."));
  let y = 3 * dataX + 4 * dataK;
  console.log("Denklem y=3x+4k" + " " + "=>" + y);
};

// denklemAlgo();

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

const dereceC = () => {
  let userDerece = Number(
    prompt("Lütfen Fahrenayt'a çevirmek istediğiniz C yi giriniz.")
  );
  let f = (userDerece * 9) / 5 + 32;
  console.log(
    "Girdiğiniz C cinsinden derece : " +
      userDerece +
      " => " +
      f +
      " " +
      "Fahrenayttır."
  );
};
// dereceC();

// Ödev
// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////

const exampleUser = () => {
  let userData = prompt("Lütfen bir şeyler yazınız.");
  //1 Kaç karakterlidir?
  let char = userData.length;
  console.log(char);

  //boşluksuz kaç karakterlidir?
  userData = userData.trim();

  console.log(userData);
};
// exampleUser();

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

//1.Yol
// let dizi1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let countTek = 0;
// for (let i = 0; i < dizi1.length; i++) {
//   if (dizi1[i] % 2 != 0) {
//     // document.write(dizi1[i] +"")

//     document.write(dizi1[i] + 5 + " ");
//     countTek=countTek+1;
//   }
// }
// console.log(countTek);

//2.Yol

// let dizi2=[];

// for (let i = 0; i < 10; i++) {
//   let data = Math.round(Math.random() * 100);
//   dizi2.push(data)
  
// }
// console.log(dizi2);   

// dizi2.filter((value,index,array)=>{
// return value %2!=0
// }).map((value,index,array)=>{
// return value+5;
// }).forEach((value,index,array)=>{
// document.write(value+ " ");

// });

// console.log(dizi2.filter((value,index,array)=>{
//   return value %2!=0
//   }).length);
