const beli = require('./beli')

let objItem1 = {
  item : "Air",
  harga : 2000,
  waktu : 400
}
let objItem2 = {
  item : "Udara",
  harga : 2000,
  waktu : 400
}
let objItem3 = {
  item : "Api",
  harga : 2000,
  waktu : 400
}
let objItem4 = {
  item : "Tanah",
  harga : 2000,
  waktu : 400
}
let objItem5 = {
  item : "Besi",
  harga : 2000,
  waktu : 400
}


beli(9000,objItem1,function(kembalian){
  beli(kembalian,objItem2,function(kembalian){
    beli(kembalian,objItem3,function(kembalian){
      beli(kembalian,objItem4,function(kembalian){
        beli(kembalian,objItem5,function(kembalian){

        })
      })
    })
  })
})