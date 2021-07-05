const shop = require ('./beli');

const uang = 10000000

const shopa = {
    item : 'Watch',
    harga : 500000,
    waktu : 1000
}
const shop1 = {
    item : 'HandPhone',
    harga : 5000000,
    waktu : 1000
}
const shop2 = {
    item : 'Aksesoris HandPhone',
    harga : 300000,
    waktu : 1000
}
const shop3 = {
    item : 'Laptop',
    harga : 12000000,
    waktu : 1000
}

shop ( uang, shopa , function(backMoney) {
    shop ( backMoney, shop1 , function ( backMoney ) {
        shop ( backMoney, shop2, function ( backMoney ) {
            shop ( backMoney, shop3, function ( backMoney ) {
                shop ( backMoney, shop2, function ( backMoney ) {

                } )
            })
        })
    })
} )

