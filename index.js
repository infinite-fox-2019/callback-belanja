const buy = require('./beli');

buy(10000, {'item': 'Dive Ball', 'harga': 1000, 'waktu': 2000}, function(change) {
    buy(change, {'item': 'Luxury Ball', 'harga': 1000, 'waktu': 2000}, function(change) {
        buy(change, {'item': 'Full Restore', 'harga': 3000, 'waktu': 2000}, function(change) {
            buy(change, {'item': 'Max Repel', 'harga': 700, 'waktu': 2000}, function(change) {
                buy(change, {'item': 'Potion', 'harga': 200, 'waktu': 2000}, function(change) {

                })
            })
        })
    })
})