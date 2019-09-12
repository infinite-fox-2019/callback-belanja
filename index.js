const beli = require('./beli.js')



let permen = {
      item: 'permen',
      harga: 1000,
      waktu: 1000
    }

let roti = {
      item: 'roti',
      harga: 2000,
      waktu: 1000
    }

let sayur = {
      item: 'sayur',
      harga: 1000,
      waktu: 1000
    }

let ikan = {
      item: 'ikan',
      harga: 4000,
      waktu: 1000
    }

let nasi = {
      item: 'nasi',
      harga: 2000,
      waktu: 1000
    }

beli(10000, permen, function(kembalian){
  beli(kembalian, roti, function(kembalian){
    beli(kembalian, sayur, function(kembalian){
      beli(kembalian, ikan, function(kembalian){
        beli(kembalian, nasi, function(kembalian){
        })
      })
    })
  })
})













