const beli = require("./beli.js");

beli(100000, {item : "permen", harga : 5000, waktu : 1000}, (kembalian) => {
	beli(kembalian, {item : "apel", harga : 10000, waktu : 1000}, (kembalian) => {
		beli(kembalian, {item : "daging sapi", harga : 40000, waktu : 1000}, (kembalian) =>{
			beli(kembalian, {item :"air", harga : 3000, waktu : 1000}, (kembalian) => {
				beli(kembalian, {item : "susu", harga : 42000, waktu : 1000}, (kembalian) => {
				})
			})
		})
	})
})