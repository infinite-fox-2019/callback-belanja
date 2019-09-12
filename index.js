const beli = require('./beli')

let uang = 20000
let belanjaan = {
    item: 'Ikan',
    harga: 4000,
    waktu: 1000
}
let belanjaan2 ={
    item: 'Nasi',
    harga: 3000,
    waktu: 1000
}
let belanjaan3 = {
    item: 'Tempe',
    harga: 2000,
    waktu: 1000
}
let belanjaan4 = {
    item: 'Tahu',
    harga: 4000,
    waktu: 500
}
let belanjaan5 = {
    item: 'Daging',
    harga: 10000,
    waktu: 2000
}
let belanjaan6 = {
    item: 'Bumbu',
    harga: 4000,
    waktu: 1000
}
let belanjaan7 = {
    item: 'Snack',
    harga: 3000,
    waktu: 500
}
beli(uang,belanjaan,function(kembalian){
    beli(kembalian,belanjaan2,function(kembalian){
        beli(kembalian,belanjaan3,function(kembalian){
            beli(kembalian,belanjaan4,function(kembalian){
                beli(kembalian,belanjaan5,function(kembalian){
                    beli(kembalian,belanjaan6,function(kembalian){
                        beli(kembalian,belanjaan7,function(kembalian){
                            
                        })
                    })
                })
            })
        })
    })
})