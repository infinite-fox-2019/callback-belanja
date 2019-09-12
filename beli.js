function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian >= 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
      // cb(0)
    }
  }, obj.waktu);
}
//pemakaian beli( uang, objItem , callback );
// uang => jumlah uang yang di bawa ketika akan pergi belanja
//objItem => objek 1.item => nama item yang akan dibeli , 2.harga => harga dari barang yang akan dibeli, 3.waktu => number dalam milliesecond perkiraan waktu untuk proses pembelian

//callbak (function) : menerima 1 parameter kembalian dari proses belanja;

module.exports = beli;
