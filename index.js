const beli = require('./beli')

let objBuyList = [
    {
        item: 'Baju',
        harga: 250000,
        waktu: 1000
    },
    {
        item: 'Sepatu',
        harga: 300000,
        waktu: 1000
    },
    {
        item: 'Buku',
        harga: 50000,
        waktu: 1000
    },
    {
        item: 'Laptop',
        harga: 1000000,
        waktu: 1000
    },
    {
        item: 'Iphone',
        harga: 1000000,
        waktu: 1000
    }
]

beli(2600000, objBuyList[0], function(kembalian) {
    beli(kembalian, objBuyList[1], function(kembalian) {
        beli(kembalian, objBuyList[2], function(kembalian) {
            beli(kembalian, objBuyList[3], function(kembalian) {
                beli(kembalian, objBuyList[4], function(kembalian) {
                    return kembalian;
                })
            })
        })
    })
})