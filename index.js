let beli = require("./beli")

let uang = 25000

let aqua = {
    item : "aqua",
    harga : 2500,
    waktu : 1000
}

let bengBeng = {
    item : "Beng Beng",
    harga : 2000,
    waktu : 1000
}

let chitos = {
    item : "chitos",
    harga : 4500,
    waktu : 1000
}

let pringles = {
    item : "pringles",
    harga : 10000,
    waktu : 1000
}

let tanggo = {
    item : "tanggo",
    harga : 5000,
    waktu : 1000
}

let mobilSedan = {
    item : "sedan",
    harga : 100000000,
    waktu : 1000
}

beli(uang, aqua,function(kembalian){
    beli(kembalian, bengBeng, function(kembalian){
        beli(kembalian, chitos, function(kembalian){
            beli(kembalian, pringles, function(kembalian){
                beli(kembalian, tanggo, function(kembalian){
                    beli(kembalian, mobilSedan, function(kembalian){
                        
                    })
                })
            })
        })
    })

})
