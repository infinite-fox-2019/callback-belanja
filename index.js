const beli = require("./beli.js");

beli(100000, {item : "permen", harga : 5000, waktu : 1000}, (change) => {
	beli(change, {item : "apel", harga : 10000, waktu : 1000}, (change2) => {
		beli(change2, {item : "daging sapi", harga : 40000, waktu : 1000}, (change3) =>{
			beli(change3, {item :"air", harga : 3000, waktu : 1000}, (change4) => {
				beli(change4, {item : "susu", harga : 42000, waktu : 1000}, (finalChange) => {
				})
			})
		})
	})
})