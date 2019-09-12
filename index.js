const beli = require('./beli')

const mouse = {
  item: 'Mouse',
  harga: 20000,
  waktu: 2000
}

const copter = {
  item: 'Helicopter Apache',
  harga: 30000,
  waktu: 1000
}

const chocobar = {
  item: 'Snicker',
  harga: 10000,
  waktu: 2000
}

const album = {
  item: 'Mitski Album',
  harga: 10000,
  waktu: 2000
}

const jaket = {
  item: 'Hoodie',
  harga: 10000,
  waktu: 2000
}

beli(70000, mouse, (kembalian) => {
  beli(kembalian, copter, (kembalian) => {
    beli(kembalian, chocobar, (kembalian) => {
      beli(kembalian, album, (kembalian) => {
        beli(kembalian, jaket, (kembalian) => {
          return kembalian
        })
      })
    })
  })
})