const beli = require('./beli')
let obj1 = {
    item: 'pisang',
    harga: 1000,
    waktu: 100
}

let obj2 = {
    item: 'mangga',
    harga: 2000,
    waktu: 100
}

beli(5000, obj1, function(x){
    beli(x, obj2, function(x){
        beli(x, obj2, function(x){
            beli(x, obj1, function(x){
                beli(x, obj2, function(x){
                    console.log('pulang ah');
                })
            })
        })
    })
})
