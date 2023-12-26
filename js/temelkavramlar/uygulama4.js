let sayilar = [1,5,7,15,3,25];

// 1- sayılar listesindeki her bir elemanın karesini yazdırınız.

for (let sayi of sayilar ) {
    console.log(sayi * sayi);
}

// 2- sayılar listesindeki hangi sayılar 5'in kalanıdır?

for (let i = 0; i <sayilar.length; i++) {
    if(sayilar[i] % 5 == 0) {
        console.log(sayilar[i]);
    }
}

// 3- sayılar listesindeki çift sayıların toplamını bulunuz.

let toplam = 0;
for(let i in sayilar) {
    if(sayilar[i] % 2 == 0 ) {
        toplam += sayilar[i];
    }
}
console.log(toplam)


let urunler = ["iphone12", "samsung s22","iphone 13","samsung s23"];

// 4- ürünler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for (let urun of urunler) {
    console.log(urun.toUpperCase());
}

// 5- ürünler listesinde samsung geçen kaç ürün vardır? 

let adet = 0;

for(let urun of urunler) {
    if(urun.includes("samsung")) {
        adet++;
    }
}

console.log(adet);

//----------------------------------------------------