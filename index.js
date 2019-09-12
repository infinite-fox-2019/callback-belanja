const beli = require('./beli.js')

class Item {
  constructor(nama,uang,waktu){
    this.item = nama;
    this.harga = uang;
    this.waktu = waktu;
  }
}

let warung = []
let namaBarang = ['mie','permen','coklat','jajan','kfc','popcorn']
let hargaBarang = [3000,1000,10000,15000,30000,20000]
let waktuBarang =  [1000,2000,3000,4000,5000,6000]

for(let i = 0; i < namaBarang.length; i++){
  warung.push(new Item(namaBarang[i],hargaBarang[i],waktuBarang[0]));
}

console.log(warung);
console.log(`\n`)

beli(10000,warung[0],function(kembalian){
  beli(kembalian,warung[1],function(kembalian){
    beli(kembalian,warung[2],function(kembalian){
      beli(kembalian,warung[3],function(kembalian){
        beli(kembalian,warung[4],function(kembalian){
          console.log(`sisa uang saya cuman ${kembalian} gk bisa jajan lagi...`);
        })
      })
    })
  })
})