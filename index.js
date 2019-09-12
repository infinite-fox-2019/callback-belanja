// beli(uang, obj, cb)
const beli = require('./beli.js','utf8')

let obj1 =  {
    item : "Teh Gelas",
    harga : 3000
}

let obj2 =  {
    item : "Telor 1 kg",
    harga : 15000
}

let obj3 =  {
    item : "Topi Miring",
    harga : 50000
}

let obj4 =  {
    item : "Spidol",
    harga : 3000
}

beli(30000, obj1, function(kembalian){
    beli(kembalian, obj2, function(kembalian){
        beli(kembalian, obj3, function(kembalian){})
    })
})