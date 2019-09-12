let beli = require('./beli.js')

beli(10500,{item: 'permen', harga:1000, waktu: 1000}, function(kembalian){
    beli(kembalian, {item: 'kopi', harga:1000, waktu: 1000}, function(kembalian){
        beli(kembalian, {item: 'indomie', harga:1500, waktu: 1000},function(kembalian){
            beli(kembalian, {item: 'roko', harga:1500, waktu: 1000}, function(kembalian){
                beli(kembalian, {item: 'roti', harga:1500, waktu: 1000}, function(kembalian ){
                    beli(kembalian, {item: 'minuman', harga:1000, waktu: 1000}, function(kembalian){
                        beli(kembalian, {item: 'sabun', harga:1500, waktu: 1000}, function(kembalian){
                            beli(kembalian, {item: 'susu', harga:1500, waktu: 1000}, function(kembalian){
                                
                            })
                        })
                    })
                })
            })
        })
    })
});
