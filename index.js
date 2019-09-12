const beli = require('./beli');

let objIkan = {
    item: 'ikan',
    harga: 10000,
    waktu: 400
}

let objAyam = {
    item: 'ayam',
    harga: 20000,
    waktu: 400
}

let objSayur = {
    item: 'sayur',
    harga: 25000,
    waktu: 400
}

let objSusu = {
    item: 'susu',
    harga: 5000,
    waktu: 400
}

let objBuah = {
    item: 'buah',
    harga: 15000,
    waktu: 400
}

let objPanci = {
    item: 'panci',
    harga: 23000,
    waktu: 400
}

let objKompor = {
    item: 'kompor',
    harga: 17000,
    waktu: 400
}

let money = 75000;
let otherMoney = 20000;

beli(money, objIkan, 
    function (change) {
        beli(change, objAyam, 
            function (change) {
                beli(change, objSayur, 
                    function (change) {
                        beli(change, objSusu, 
                            function (change) {
                                beli(change, objBuah, 
                                    function (change) {
                                        console.log(`Sisa uang untuk beli bahan makanan adalah ${change}`);
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }
);

// uncomment to see two of beli() methods runs asynchronously
// beli(otherMoney, objPanci, 
//     function (change) {
//         beli(change, objKompor, 
//             function (change) {
//                 console.log(`Sisa uang untuk beli peralatan adalah ${change}`);
//             }
//         );
//     }
// );
