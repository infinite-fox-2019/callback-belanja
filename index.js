const beli = require('./beli')

const uang = 12000
const objItem = [
  { item: 'Tomat', harga: 2500, waktu: 1000 },
  { item: 'Cabe', harga: 10000, waktu: 2000 },
  { item: 'Timun', harga: 7000, waktu: 3000 },
  { item: 'Pisang', harga: 3000, waktu: 500 },
  { item: 'Apel', harga: 5000, waktu: 4000 },
]

beli(uang, objItem[0], (kembalian) => {
  beli(kembalian, objItem[1], (kembalian) => {
    beli(kembalian, objItem[2], (kembalian) => {
      beli(kembalian, objItem[3], (kembalian) => {
        beli(kembalian, objItem[4], (kembalian) => {
        })
      })
    })
  })
})
