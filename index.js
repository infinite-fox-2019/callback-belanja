let beli = require('./beli')

let cabe =  {item: 'cabe', harga: 5000, waktu: 300};
let ikan =  {item: 'ikan', harga: 20000, waktu: 1000};
let sereh =  {item: 'sereh', harga: 2000, waktu: 500};
let bawang =  {item: 'bawang', harga: 3000, waktu: 600};
let ayam = {item: 'ayam', harga: 30000, waktu: 1000}

beli(60000,cabe, function(kembalian){
    beli(kembalian, ikan, function(kembalian2){
        beli(kembalian2, sereh, function(kembalian3){
            beli(kembalian3, bawang, function(kembalian4){
                beli(kembalian4, ayam, function(kembalian5){
                    console.log(`belanja selesai, sisa uang: ${kembalian5}`);
                })
            })
        })
    })
  })