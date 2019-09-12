const beli = require('./beli')

/*
1. Beli permen
2. Beli ciki
3. Beli rokok
4. Beli yupi
5. Beli kerupuk
*/

let permen = {
  item: 'permen',
  harga: 500,
  waktu: 1000
}

let ciki = {
  item: 'ciki',
  harga: 2000,
  waktu: 4000
}

let rokok = {
  item: 'rokok',
  harga: 20000,
  waktu: 5000
}

let yupi = {
  item: 'yupi',
  harga: 6000,
  waktu: 3000
}

let kerupuk = {
  item: 'kerupuk',
  harga: 1000,
  waktu: 1000
}

beli(20000, permen, function (kembalian) {
  beli(kembalian, ciki, function (kembalian) {
    beli(kembalian, rokok, function (kembalian) {
    })
  })
})

