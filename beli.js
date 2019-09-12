function beli(uang, obj, cb){
  console.log("=============================");
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} nih dibalikin duitnya ${uang}`);
      cb(uang)
    }
  }, obj.waktu);
  console.log("=============================");
}

module.exports = beli;
