const beli = require("./beli")

let barang1 = {
    item : "ketoprak",
    harga : 13000,
    waktu : 1000
}

let barang2 = {
    item : "kelapa",
    harga : 5000,
    waktu : 1000
}

let barang3 = {
    item : "jeruk",
    harga : 7000,
    waktu : 1000
}

let barang4 = {
    item : "kuota",
    harga : 40000,
    waktu : 1000
}

let barang5 = {
    item : "ginjal Arnold",
    harga : 50000000,
    waktu : 800
}

beli(100000, barang1, function (uang){
    beli(uang, barang2, function (uang){
        beli(uang, barang3, function (uang){
            beli(uang, barang4, function (uang){
                beli(uang, barang5, function (uang){
                    console.log("=============================");
                    console.log("Saya bangkrut");
                })
            })
        })
    })
})
