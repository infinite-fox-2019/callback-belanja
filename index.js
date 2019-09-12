const beli = require ('./beli.js');

const dataBelanja = [
    {
        item: 'kentang',
        harga: 5000,
        waktu: 700
    },
    {
        item: 'wortel',
        harga: 3000,
        waktu: 700
    },
    {
        item: 'jahe',
        harga: 2000,
        waktu: 700
    },
    {
        item: 'sarden',
        harga: 6000,
        waktu: 700
    },
    {
        item: 'ikan',
        harga: 7000,
        waktu: 700
    },
    {
        item: 'ayam',
        harga: 5500,
        waktu: 700
    }
]

let uang = 20000;

beli(uang,dataBelanja[0],function(kembaliankentang) {
    beli(kembaliankentang,dataBelanja[1],function(kembalianwortel) {
        beli(kembalianwortel,dataBelanja[2],function(kembalianjahe) {
            beli(kembalianjahe,dataBelanja[3],function(kembaliansarden) {
                beli(kembaliansarden,dataBelanja[4],function(kembalianIkan){
                    beli(kembalianIkan,dataBelanja[5],function(kembalianAyam){
                        console.log(kembalianAyam)
                    })
                })
            })
        })
    })
})










