const beli = require('./beli')

const sayur = {
    item: 'sayur',
    harga: 3000,
    waktu: 200
}
const buah = {
    item: 'buah',
    harga: 10000,
    waktu: 200
}
const beras = {
    item: 'beras',
    harga: 15000,
    waktu: 200
}
const daging = {
    item: 'daging',
    harga: 3000,
    waktu: 200
}
const udang = {
    item: 'udang',
    harga: 20000,
    waktu: 200
}
const roti = {
    item: 'roti',
    harga: 19000,
    waktu: 200
}

let uang = 50000

const belanja = beli(uang,sayur,function(kembalian){
    beli(kembalian, buah, function(kembalian){
        beli(kembalian, beras, function(kembalian){
            beli(kembalian, daging, function(kembalian){
                beli(kembalian, udang,function(kembalian){
                    beli(kembalian, roti,function(kembalian){
                    })
                })
            })
        })
    })
})


belanja