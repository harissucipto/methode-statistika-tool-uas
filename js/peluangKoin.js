function SampleKoin(n) {
    // digunakan untuk banyak koin kecil dari 3.
    var sample = [];
    var banyakSample = Math.pow(2, n);
    // dasar sample
    for (var i = 0; i < banyakSample; i++) {
        var tempSample = [];
        for (var x = 0; x < 3; x++) {
            tempSample[x] = "G";
        }
        sample.push(tempSample);
    }
    // scanning angka G dan insert angka A;
    var batas = (banyakSample / 2) - 1;
    var pegangan = 0;
    for (var i = 0; i < batas; i++) {
        sample[i][pegangan] = "A";
        if (pegangan == (n - 1)) {
            pegangan = 0;
        } else {
            pegangan += 1;
        }
    }

    // copy scanning pastekan ke selanjutnya
    pegangan = 0;
    lanjut = ((banyakSample / 2) - 1);
    akhir = banyakSample - 2;
    for (var i = lanjut; i < banyakSample; i++) {
        sample[i][pegangan] = "A";
        if (pegangan == (n - 1)) {
            pegangan = 0;
        } else {
            pegangan += 1;
        }
    }

    // lakukan perubahan dari scanning sebelumnya dengan mengganti inversnya
    pegangan = 0;
    lanjut = ((banyakSample / 2) - 1);
    akhir = banyakSample - 2;
    for (var i = lanjut; i < banyakSample; i++) {
        for (var index = 0; index < n; index++) {
            if (sample[i][index] === "A") {
                sample[i][index] = "G";
            } else {
                sample[i][index] = "A";
            }
        }
    }

    // lalu finishing dengan melakukan pergantian AAA baris terkahir kurang 1 (banyakSample - 2);
    var f1 = banyakSample - 2;
    sample[f1] = sample[f1].map(function(item) {
        return "A";
    });
    // // lalu finishing dengan melakukan pergantian AAA baris terkahir (banyakSample - 1);
    var f2 = banyakSample - 1;
    sample[f2] = sample[f2].map(function(item) {
        return "G";
    });

    return sample;
}


function Kejadian(jumlahKoin, dicari, banyak) {
    var sampleKoinya = SampleKoin(jumlahKoin);
    var hasil = [];
    sampleKoinya.forEach(function(item) {
        var storage = 0;
        item.forEach(function(nilai) {
            if (nilai === dicari) {
                storage += 1;
            }
        });
        if (storage === parseInt(banyak)) {
            hasil.push(item);
        }
    });

    return hasil;
}


console.log(SampleKoin(3));