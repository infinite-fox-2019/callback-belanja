function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gak cukup nih buat beli ${obj.item} uang kamu cuma ${uang} minta mamak lagi`);
      cb(uang)
    }
  }, obj.waktu);
}

module.exports = beli;
