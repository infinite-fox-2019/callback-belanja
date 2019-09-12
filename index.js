let beli = require('./beli.js');

let obj1 = {
    item: 'ayam',
    harga: 12000,
    waktu: 500
};

let obj2 = {
    item: 'sayur',
    harga: 5000,
    waktu: 500
}

let obj3 = {
    item: 'beras',
    harga: 7000
}

let obj4 = {
    item: 'mentega',
    harga: 10000
}

let obj5 = {
    item: 'gulali',
    harga: 3000
}

beli(300000, obj1, kembalian =>
    beli(kembalian, obj2, kembalian =>
        beli(kembalian, obj3, kembalian =>
            beli(kembalian, obj4, kembalian =>
                beli(kembalian, obj5, () => {})))))