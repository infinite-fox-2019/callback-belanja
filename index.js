const beli = require('./beli')
let uang = 70000
const shoppingList = [
    {
        item: 'Batagor',
        harga: 10000,
        waktu: 200
    },
    {
        item: 'Siomay',
        harga: 8000,
        waktu: 300
    },
    {
        item: 'Nasi Goreng',
        harga: 15000,
        waktu: 500
    },
    {
        item: 'Nasi Kebuli',
        harga: 25000,
        waktu: 600
    },
    {
        item: 'Mie Ayam',
        harga: 10000,
        waktu: 300
    }, {
        item: 'Samyang',
        harga: 20000,
        waktu: 1000
    }
]


beli(uang, shoppingList[0], (kembalian) => {
    beli(kembalian, shoppingList[1], (kembalian2) => {
        beli(kembalian2, shoppingList[2], (kembalian3) => {
            beli(kembalian3, shoppingList[3], (kembalian4) => {
                beli(kembalian4, shoppingList[4], (kembalian5) => {
                    beli(kembalian5, shoppingList[5], (kembalian6) => {
                        console.log(`Waktunya pulang. uang di dompet sisa ${kembalian6}`)
                    })
                })
            })
        })
    })
})