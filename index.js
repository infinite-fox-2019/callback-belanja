const beli = require('./beli')

const items = [
    {
        item: 'ayam',
        harga: 30000, 
        waktu: 1000
    },
    {
        item: 'ikan',
        harga: 15000, 
        waktu: 800
    },
    {
        item: 'sayur',
        harga: 10000, 
        waktu: 700
    },
    {
        item: 'buah',
        harga: 3000, 
        waktu: 600
    },
    {
        item: 'susu',
        harga: 3000, 
        waktu: 600
    }
]

beli(50000, items[0], function (parameter) {
    beli(parameter, items[1], function (parameter) {
        beli(parameter, items[2], function (parameter) {
        })
    })
  })

