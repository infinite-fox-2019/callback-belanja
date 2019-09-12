function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item}, uang kembaliannya ${kembalian}`);
      console.log('==================================================')
      cb(kembalian)
    }else{
      console.log(`Uang gk cukup untuk beli ${obj.item} kembaliannya cuma ${kembalian}, coba bawa banyakan besok-besok`);
      console.log('==================================================')
      cb(0)
    }
  }, obj.waktu);
}


module.exports = beli;
