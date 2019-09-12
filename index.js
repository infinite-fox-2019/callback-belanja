let beli = require ('./beli')

beli (1e6,{item : 'baju', harga: 3e5, waktu: 1e3}, function(kembalian) {
  beli (kembalian,{item : 'jilbab', harga: 1e5, waktu: 1e3}, function(kembalian) {
    beli (kembalian,{item : 'body butter', harga: 1e5, waktu: 1e3}, function(kembalian) {
      beli (kembalian,{item : 'lip blam', harga: 5e4, waktu: 1e3}, function(kembalian) {
        beli (kembalian,{item : 'permen', harga: 500, waktu: 1e3}, function(kembalian) {

        })
      })
    })
  })
})
