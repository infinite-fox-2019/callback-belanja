// beli(uang, obj, cb)
// const beli = require('./beli.js','utf8')

let obj1 =  {
    item : "Penggaris",
    harga : 30000
}

let obj2 =  {
    item : "Penghapus",
    harga : 20000
}

let obj3 =  {
    item : "Isi pensil",
    harga : 5000
}

let obj4 =  {
    item : "Spidol",
    harga : 3000
}

let angpao = {
    uang : 100000
}


function beli(uang, obj, cb){
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        cb(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        cb(0)
      }
    }, obj.waktu);
  }
  
  function rejeki(uang, angpao, cb){
    console.log(`Saya dapat angpao ${angpao.uang}`)
    let pertambahan = uang + angpao.uang
    console.log(`Uang saya sekarang ${pertambahan}`)
    cb(pertambahan)
  }


beli(50000, obj1, function(kembalian){
    beli(kembalian, obj4, function(kembalian){
        rejeki(kembalian, angpao, function(pertambahan){})
    })
})