let beli = require('./beli')
let uang = 250000


let belanjaan = [
    {
        harga: 34000,
        item: 'Ayam',
        waktu: 1000
    },
    {
        harga: 10000,
        item: 'Bumbu',
        waktu: 1000
    },
    {
        harga: 50000,
        item: 'Arang',
        waktu: 1000
    },
    {
        harga: 11000,
        item: 'Kuas',
        waktu: 1000
    },
    {
        harga: 15000,
        item: 'Kecap',
        waktu: 1000
    },
    {
        harga: 100000,
        item: 'Beras',
        waktu: 1000
    },
    {
        harga: 20000,
        item: 'Cabai',
        waktu: 1000
    }
]

beli(uang, belanjaan[0], function (kembalianAyam) {
    beli(kembalianAyam, belanjaan[1], function (kemabalianBumbu) {
        beli(kemabalianBumbu, belanjaan[2], function (kemabalianArang) {
            beli(kemabalianArang, belanjaan[3], function (kemabalianKuas) {
                beli(kemabalianKuas, belanjaan[4], function (kembalianKecap) {
                    beli(kembalianKecap, belanjaan[5], function (kembalianBeras) {
                        beli(kembalianBeras, belanjaan[6], function (kembalianCabai) {
                            console.log(`sisa uang adalah ${kembalianCabai}`);
                        })
                    })
                })
            })
        })
    })
})