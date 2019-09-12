const beli = require('./beli')

const objBuyList = [
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
        harga: 500000,
        waktu: 1000
    },
    {
        item: 'Laptop',
        harga: 1000000,
        waktu: 1000
    },
    {
        item: 'Iphone',
        harga: 100000,
        waktu: 1000
    }
]

beli(600000, objBuyList[0], function(kembalian) {
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