let data = [
    {
        judul : "Asal usul Trenggalek",
        kategori : "sejarah",
        img : "assets/images/trenggalek.jpeg",
        kontent : "Dahulu, ada sepasang suami istri bernama Ki Ageng Sinawang dan Raden Ayu Saraswati yang merawat seorang bayi laki-laki bernama Menak Sopal.  Berbeda dari bayi-bayi lain, Menak Sopal terbilang cukup aneh. Setiap malam hari, ketika sedang tidur, tubuhnya akan mengeluarkan sinar bak kunang-kunang. Raden Ayu Saraswati dan Ki Ageng Sinawang percaya bahwa sinar itu menandakan bahwa kelak Menak Sopal akan menjadi pemuda yang luar biasa.  Dugaan mereka pun benar. Ketika Menak Sopal sudah tumbuh dewasa, ia menjadi pria yang sangat senang menolong orang lain dan memiliki keahlian malih rupa (berubah wujud). Suatu ketika, penduduk di sekitar tempat tinggal Menak Sopal di Padepokan Sinawang mengalami masalah kekurangan air.  Karena masalah itu, mereka kerap berebut air di tepi Sungai Bagong. Menak Sopal pun ingin membantu para penduduk yang sedang kekurangan air. Menak Sopal lantas menyelidiki keadaan di sekitar Sungai Bagong. Beberapa hari kemudian, ia memutuskan untuk membendung airnya.  Menak Sopal mengajak para pemuda di Padepokan Sinawang untuk membantunya membangun bendungan air itu.  Tidak butuh waktu lama, Menak Sopal dan para pemuda berhasil menyelesaikan pembangunan bendungan. Namun, baru saja diselesaikan, tiba-tiba bendungan tersebut ambrol. Menak Sopal dan para pemuda segera memperbaikinya, tetapi bendungan kembali ambrol setelah selesai diperbaiki. Rupanya, penyebab bendungan air itu kerap ambrol adalah seekor buaya putih besar yang merusak bendungan dengan sabetan ekornya. "
    }, 
    {
        judul : "Motor listrik dengan super hemat daya",
        kategori : "teknologi",
        img : "assets/images/motorlistrik.jpg",
        kontent : "KABARFAJAR-Saat ini sudah mulai ramai muncul motor listrik terbaru dari berbagai produsen. Dengan kelahiran motor lsitrik di Indonesia akan menambah persaingan di dunia otomotif. Salah satu kelebihan motor listrik ini adalah hemat energi dan dapat menjaga kualitas udara di Indonesia. Salah satu produsen yang ikut meramaikan motor listrik di Indonesia adalah Honda. Ya, Honda siap meluncurkan motor listrik bagi warga Indonesia. Kabar baiknya, motor listrik yang dinamakan U GO ini kabarnya sudah didaftarkan di Pangkalan Data dan Kekayaan Intelektual Kemenkumham Indonesia. Wah, dengan kehadiran motor listrik U GO dari Honda makin meramaikan bursa persaingan motor listrik di Tanah Air. Honda mendaftarkan langsung merek dan gambar paten motor listrik U-GO dengan teregistrasi nomor A00202102364."
    },
    {
        judul : "Here We Go Dejong",
        kategori : "olahraga",
        img : "assets/images/dejong.jpg",
        kontent : "Kedatangan Erik ten Hag di Manchester United telah banyak dinanti, terutama dengan para penggemar yang ingin melihat gaya sepakbola baru dan atraktif. Musim lalu untuk Setan Merah sangat menyedihkan, untuk sedikitnya, dan pelatih asal Belanda itu telah membuktikan silsilah merek sepak bola yang dapat memukau para pengamat. Penting bagi filosofi sepakbola manajer mana pun adalah pemain yang tepat, dan sepuluh Hag tidak berbeda. Skuad Man United saat ini sama sekali tidak memiliki kualitas yang diharapkan dari klub sebesar itu, dan pelatih Belanda itu pasti akan membutuhkan bala bantuan. Tinggi dalam daftar itu adalah mantan Ajax dan gelandang Barcelona saat ini Frenkie de Jong. Gelandang Belanda telah menjadi target utama oleh sepuluh Hag, dan pelatih melihat dia sebagai penandatanganan penting untuk rencananya. Saga transfer telah berlangsung cukup lama sekarang, dengan laporan menunjukkan bahwa FC Barcelona telah menolak tawaran pertama United sebesar € 60 juta plus tambahan. Dengan hari-hari yang terus berlalu hingga pra-musim dimulai, sepuluh Hag akan sangat ingin menyelesaikan kesepakatan sesegera mungkin. Sementara masih untuk melihat apakah transfer berhasil, kita telah melihat bagaimana gelandang Belanda berusia 25 tahun itu akan cocok di Old Trafford."
    }
]

function showData(data) {
    return `<article class="artikel-item">
        <h2>${data.judul}</h2>
        <h5>${data.kategori}</h5>
        <img src="${data.img}" alt="">
        <p>${data.kontent}</p>
    </article>`
}


const nav = document.querySelectorAll("li")

let pilih = "Semua"
nav.onclick = function() {
    console.log(this);
}

let item = ''
data.forEach((e) => {
    item += showData(e)
})
const content = document.getElementById("content")
content.innerHTML = item

nav.forEach((e) = function(a) {
    a.onclick = function() {
        pilih = a.textContent
        if (pilih == "Semua") {
            let item = ''
            data.forEach((e) => {
                item += showData(e)
            })
            const content = document.getElementById("content")
            content.innerHTML = item
        } else if (pilih == "Sejarah") {
            let item = ''
            data.forEach((e) => {
                if (e.kategori == 'sejarah') {
                    item += showData(e)
                }
            })
            const content = document.getElementById("content")
            content.innerHTML = item
        } else if (pilih == "Teknologi") {
            let item = ''
            data.forEach((e) => {
                if (e.kategori == 'teknologi') {
                    item += showData(e)
                }
            })
            const content = document.getElementById("content")
            content.innerHTML = item
        } else if (pilih == "Olahraga") {
            let item = ''
            data.forEach((e) => {
                if (e.kategori == 'olahraga') {
                    item += showData(e)
                }
            })
            const content = document.getElementById("content")
            content.innerHTML = item
        }
    }
})
