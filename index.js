const dataBeli = require('./beli')

dataBeli(15000, {"item": "pensil", "harga" : 5000, "waktu" : 1000}, function(kembalian) {
    dataBeli(kembalian, {"item": "pulpen", "harga" : 3000, "waktu" : 1000}, function(kembalian) {
        dataBeli(kembalian, {"item": "penghapus", "harga" : 100, "waktu" : 1000}, function(kembalian) {
            dataBeli(kembalian, {"item": "tipex", "harga" : 8000, "waktu" : 1000}, function(kembalian) {
                dataBeli(kembalian, {"item": "tas", "harga" : 2600, "waktu" : 1000}, function(kembalian) {
                    dataBeli(kembalian, {"item": "sepatu", "harga" : 32000, "waktu" : 1000}, function(kembalian) {
                
                    })
                })
            })
        })
    })
})