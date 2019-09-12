var membeli = require("./beli.js")
let ikan = {
    "item":"ikan",
    "harga":20000,
    "waktu":2000
}

let ayam = {
    "item":"ayam",
    "harga":30000,
    "waktu":1000
}

let daging = {
    "item":"daging",
    "harga":50000,
    "waktu":3000
}

let tahu = {
    "item":"tahu",
    "harga":10000,
    "waktu":500
}

let tempe = {
    "item":"tempe",
    "harga":5000,
    "waktu":600
}


membeli(200000,ikan,
    function(kembalian){
        membeli(kembalian,ayam,
            function(kembalian){
                membeli(kembalian,daging,
                    function(kembalian){
                        membeli(kembalian,tahu,
                            function(kembalian){
                                membeli(kembalian,tempe,function(){
                                    console.log(`Saya sudah kelar belanja`);
                                })
                            })
                    })
    })
})