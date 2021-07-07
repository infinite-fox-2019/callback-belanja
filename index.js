let beli = require('./beli')

let listItem = [
  {
    item: 'Gundam',
    harga: '2000',
    waktu: 5
  },
  {
    item: 'Action Figure',
    harga: '1500',
    waktu: 10
  },
  {
    item: 'Baju',
    harga: '500',
    waktu: 25
  },
  {
    item: 'Mini Figure',
    harga: '1000',
    waktu: 15
  },
  {
    item: 'Mainan',
    harga: '500',
    waktu: 5
  }
]

let uang = 6000
beli(uang,listItem[0],function(kembalian0){
  beli(kembalian0,listItem[1],function(kembalian1){
    beli(kembalian1,listItem[2],function(kembalian2){
      beli(kembalian2,listItem[3],function(kembalian3){
        beli(kembalian3,listItem[4],function(){
          console.log('selesai')
        })
      })
    })
  })
})