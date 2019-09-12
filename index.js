const beli = require('./beli');

let permen = {
    item: 'permen',
    harga: 2000,
    waktu: 1000
}
let chitato = {
    item: 'chitato',
    harga: 5000,
    waktu: 2000
}
let sepeda = {
    item: 'sepeda',
    harga: 500000,
    waktu: 500
}
let kuota = {
    item: 'kuota',
    harga: 25000,
    waktu: 3000
}
let kerupuk = {
    item: 'kerupuk',
    harga: 1000,
    waktu: 1500
}
beli(550000,sepeda,function(uang) {
    beli(uang,kuota,function(uang){
        beli(uang,chitato,function(uang){
            beli(uang,permen,function(uang){
                beli(uang,kerupuk,function(uang){
                    console.log('stop belanja, nanti mamak marah');
                    
                });
            });    
        });
    });
});
