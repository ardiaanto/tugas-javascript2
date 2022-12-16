const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


cekHariKerja('minggu')
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

// panggil function kode cekHariKerja dengan parameter hari kerja kemudian gunakan then untuk menampilkan hasilnya jika berhasil dan catch untuk menampilkan error jika gagal

const cekH = async (day) => {
    try {
        const cek = await cekHariKerja(day)
        console.log(cek)
    } catch (error) {
        console.log(error)
    }
}
cekH('minggu')

// Dengan menbuat function baru cekH menggunakan async await, maka fungsi cekH akan menunggu fungsi cekHariKerja selesai dijalankan, jika berhasil maka akan menampilkan hasilnya dan jika gagal maka akan menampilkan error




