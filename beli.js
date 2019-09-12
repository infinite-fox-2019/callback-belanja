function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      if (uang === 0){
        console.log(`Sisa uang tinggal ${uang}, ga cukup beli yang lain`)
      } else {
        console.log(`Uang gk cukup nih buat beli ${obj.item} sisa uang cuma ${uang}`);
      }
    }
  }, obj.waktu);
}

module.exports = beli;
