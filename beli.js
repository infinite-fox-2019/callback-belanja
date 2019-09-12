function beli(uang, objItem, cb){
  console.log(`Saya pergi membeli ${objItem.item}`)
  setTimeout(function(){
    let kembalian = uang - objItem.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${objItem.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${objItem.item} kembaliannya cuma ${kembalian}`);
      cb(uang)
    }
  }, objItem.waktu);
}

module.exports = beli;