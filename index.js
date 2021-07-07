const beli = require('./beli')
let permen = {
    item:'permen',
    harga: 500,
    waktu: 500
}
let roti = {
    item:'roti',
    harga: 2500,
    waktu: 500
}
let apel = {
    item:'apel',
    harga: 1000,
    waktu: 500
}
let beras = {
    item:'beras',
    harga: 20000,
    waktu: 500
}
let mobil = {
    item:'mobil',
    harga: 30000,
    waktu: 500
}
let snack = {
    item:'chiki',
    harga: 2000,
    waktu: 500
}

let duit = 30000
beli(duit,permen,function(kembalian){
    beli(kembalian,roti,function(kembalian){
        beli(kembalian,apel,function(kembalian){
            beli(kembalian,beras,function(kembalian){
                beli(kembalian,mobil,function(kembalian){
                    beli(kembalian,snack,function(){
                    });
                });
            });
        });
    });
})

