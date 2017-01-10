var banyakData = document.querySelector("#banyakData");
var kolomData = document.querySelector("#kolomData");
var data = document.querySelector("#data");
var hasil = document.querySelector("#hasil");
var rumusnya = document.querySelector("#rumusnya");
var jumlahData;
var buttonMasukan = document.querySelector("#masukanBanyakData");
var buttonProses = document.querySelector("#prosesData");
var buttonCariY = document.querySelector("#cariY");
var nilaiX = [];
var nilaiXKe2 = [];
var nilaiY = [];
var nilaiXkuadrat = [];
var nilaiXKe2kuadrat = [];
var nilaiXKe2KaliX = [];
var nilaiXKe2KaliY = [];
var nilaiYkuadrat = [];
var nilaiXkaliY = [];
var jumlahNilaiX = 0;
var jumlahNilaiXKe2 = 0;
var jumlahNilaiXKe2kuadrat = 0;
var jumlahNilaiXKe2KaliX = 0;
var jumlahNilaiXKe2KaliY = 0;
var jumlahNilaiY = 0;
var jumlahNilaiXkuadrat = 0;
var jumlahNilaiYKuadrat = 0;
var jumlahNilaiXkaliY = 0;
var a1;
var a2;
var a0;
var a;
var b;
var y;

// finishing;
var b1;
var b2;
var akhirA;

/*


*/



//hasil
var xparseFloat = document.querySelector("#XparseFloat");
var buttonCariY = document.querySelector("#cariY");
var hasilY = document.querySelector("#hasilY");
var hasilTable = document.querySelector("#hasilTable");
var solusiRumus = document.querySelector("#solusiRumus");




// rumus Y = a + bX;



buttonMasukan.addEventListener("click", function() {
    hasil.style.display = "none";
    kolomData.style.display = "block";

    jumlahData = parseFloat(banyakData.value);
    var textsnya = "";
    textsnya += "<table class='isiTable'>";
    textsnya += "<tr>";
    textsnya += "<th>nomor</th>";
    textsnya += "<th>x</th>";
    textsnya += "<th>x2</th>";
    textsnya += "<th>y</th>";
    textsnya += "</tr>";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += "<tr>";
        textsnya += '<td>' + no + '</td><td> <input class="x" type="text"> </td><td><input class="xke2" type="text"></td><td> <input class="y" type="text"></td><\p>';
        textsnya += "</tr>";
    }
    textsnya += "</table>";
    data.innerHTML = textsnya;
});



buttonProses.addEventListener("click", function() {
    for (var i = 0; i < jumlahData; i++) {
        // loop lakukan perhitungan dan pengambilan x2, xke2, y2, x * y
        nilaiX[i] = parseFloat(document.querySelectorAll(".x")[i].value);
        nilaiXkuadrat[i] = Math.pow(nilaiX[i], 2);
        nilaiXKe2[i] = parseFloat(document.querySelectorAll(".xke2")[i].value);
        nilaiXKe2kuadrat[i] = Math.pow(nilaiXKe2[i], 2);
        nilaiY[i] = parseFloat(document.querySelectorAll(".y")[i].value);
        nilaiYkuadrat[i] = Math.pow(nilaiY[i], 2);
        nilaiXkaliY[i] = nilaiX[i] * nilaiY[i];
        nilaiXKe2KaliX[i] = nilaiXKe2[i] * nilaiX[i];
        nilaiXKe2KaliY[i] = nilaiXKe2[i] * nilaiY[i];
    }
    // lakukan pencarian nilai jumlah tiap varible arraay

    ambilJumlahNilai();
    pecahkanRumus();
    cetakTableHasil();
    tampilkanHasilOperasisatu();
});



function penumlahanNilai(data) {
    return data.reduce(function(a, b) {
        return a + b;
    });
}



function pecahkanRumus() {
    hasil.style.display = "block";

}

function ambilJumlahNilai() {
    jumlahNilaiX = penumlahanNilai(nilaiX);
    jumlahNilaiY = penumlahanNilai(nilaiY);
    jumlahNilaiXkaliY = penumlahanNilai(nilaiXkaliY);
    jumlahNilaiXkuadrat = penumlahanNilai(nilaiXkuadrat);
    jumlahNilaiYKuadrat = penumlahanNilai(nilaiYkuadrat);
    jumlahNilaiXKe2 = penumlahanNilai(nilaiXKe2);
    jumlahNilaiXKe2kuadrat = penumlahanNilai(nilaiXKe2kuadrat);
    jumlahNilaiXKe2KaliX = penumlahanNilai(nilaiXKe2KaliX);
    jumlahNilaiXKe2KaliY = penumlahanNilai(nilaiXKe2KaliY);
}

function cetakTableHasil() {
    jumlahData = parseFloat(banyakData.value);
    var textsnya = "";
    textsnya += "<table class='isiTable'>";
    textsnya += "<tr>";
    textsnya += "<th>nomor</th>";
    textsnya += "<th>X</th>";
    textsnya += "<th>Y</th>";
    textsnya += "<th>X^2</th>";
    textsnya += "<th>Y^2</th>";
    textsnya += "<th>X * Y</th>";
    textsnya += "<th>X2</th>";
    textsnya += "<th>X2 ^2</th>";
    textsnya += "<th>X2 * x</th>";
    textsnya += "<th>X2 * y</th>";
    textsnya += "</tr>";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += "<tr>";
        textsnya += '<td>' + no + '</td><td>' + nilaiX[i] +
            '</td><td>' + nilaiY[i] +
            '</td><td>' + nilaiXkuadrat[i] +
            '</td><td>' + nilaiYkuadrat[i] +
            '</td><td>' + nilaiXkaliY[i] +
            '</td><td>' + nilaiXKe2[i] +
            '</td><td>' + nilaiXKe2kuadrat[i] +
            '</td><td>' + nilaiXKe2KaliX[i] +
            '</td><td>' + nilaiXKe2KaliY[i] +
            '</td> <\p>';
        textsnya += "</tr>";
    }
    textsnya += "<tr>";
    textsnya += "<td>Totalnya = </td>";
    textsnya += '<td>' + jumlahNilaiX +
        '</td><td> ' + jumlahNilaiY +
        '</td><td>' + jumlahNilaiXkuadrat +
        '</td><td>' + jumlahNilaiYKuadrat +
        '</td><td>' + jumlahNilaiXkaliY +
        '</td><td>' + jumlahNilaiXKe2 +
        '</td><td>' + jumlahNilaiXKe2kuadrat +
        '</td><td>' + jumlahNilaiXKe2KaliX +
        '</td><td>' + jumlahNilaiXKe2KaliY +
        '</td>';
    textsnya += "</td>";
    textsnya += "</table>";
    hasilTable.innerHTML = textsnya;
}


function tampilkanHasilOperasisatu() {
    tahanDulu();
}

function tahanDulu() {
    var teks = "";
    var tempData = operasiPersiapan();
    tempData.forEach(function(datanya, index) {
        teks += "<p>tahan" + index + ": " + datanya + "</p>";
    });
    $("#persipanOperasi").html(teks);
    lanjutKedua();
}

function lanjutKedua() {
    var tempData = operasiPersiapan();
    var teks = $("#persipanOperasi").html();
    b1 = operasiKetiga(tempData[1], tempData[3], tempData[4], tempData[5], tempData[0]);
    b2 = operasiKetiga(tempData[0], tempData[4], tempData[3], tempData[5], tempData[1]);
    akhirA = operasiKeempat(jumlahNilaiY, b1, jumlahNilaiX, b2, jumlahNilaiXKe2, jumlahData);
    teks += "<p> b1 = " + b1 + "</p>";
    teks += "<p> b2 = " + b2 + "</p>";
    teks += "<p> a = " + akhirA + "</p>";
    teks += "<p>Y = " + akhirA + " - " + b1 + "X1 - " + b2 + "X2</p>";
    teks += "<p>Korelasinya yaitu = akar (((b1 * Exy) + (b2 * Ex2y)) / Ey^2) </p>";
    teks += "<p>Korelasinya yaitu = akar (((" + b1 + " * " + jumlahNilaiXkaliY + ") + (" + b2 + " * " + jumlahNilaiXKe2KaliY + ")) / " + jumlahNilaiYKuadrat + ") </p>";
    teks += "<p>Korelasinya yaitu = akar (((" + (b1 * jumlahNilaiXkaliY) + ") + (" + (b2 * jumlahNilaiXKe2KaliY) + ")) / " + jumlahNilaiYKuadrat + ") </p>";
    teks += "<p>Korelasinya yaitu = akar (((" + ((b1 * jumlahNilaiXkaliY) + (b2 * jumlahNilaiXKe2KaliY)) + ")) / " + jumlahNilaiYKuadrat + ") </p>";
    teks += "<p>Korelasinya yaitu = akar (((" + (((b1 * jumlahNilaiXkaliY) + (b2 * jumlahNilaiXKe2KaliY)) / jumlahNilaiYKuadrat) + ") </p>";
    teks += "<p>Korelasinya yaitu = " + (Math.sqrt((((b1 * jumlahNilaiXkaliY) + (b2 * jumlahNilaiXKe2KaliY)) / jumlahNilaiYKuadrat))).toFixed(3) + " </p>";
    teks += "<p>Korelasinya yaitu = " + kesimpulanKorelasi((Math.sqrt((((b1 * jumlahNilaiXkaliY) + (b2 * jumlahNilaiXKe2KaliY)) / jumlahNilaiYKuadrat))).toFixed(3)) + " </p>";
    teks += "<p>Masukan X1 = <input type='text' id='baruX1'></p>";
    teks += "<p>Masukan X2 = <input type='text' id='baruX2'></p>";
    $("#persipanOperasi").html(teks);
}

$("#cariBaru").on("click", function() {
    var teks = "";
    var baruX1 = parseFloat($("#baruX1").val());
    var baruX2 = parseFloat($("#baruX2").val());
    teks += "<p>Y = " + akhirA + " - " + b1 + "" + baruX1 + " - " + b2 + "" + baruX2 + "</p>";
    teks += "<p>Y = " + akhirA + " - " + (b1 * baruX1) + " - " + (b2 * baruX2) + "</p>";
    teks += "<p>Y = " + (akhirA - (b1 * baruX1) - (b2 * baruX2)) + "</p>";
    $("#hCariBaru").html(teks);
});

function temukanRumus() {
    var teks = $("#persipanOperasi").html();
    teks += "<p>Y ="
}


function operasiSatu(a, b, c) {
    var tempOperasi = a - (Math.pow(b, 2) / c);
    return tempOperasi.toFixed(2);
}

function operasiKedua(a, b, c, d) {
    var tempOperasi = a - ((b * c) / d);
    return tempOperasi.toFixed(2);
}

function operasiKetiga(a, b, c, d, e) {
    var tempOperasiKetiga = ((a * b) - (c * d)) / ((e * a) - (Math.pow(d, 2)));
    return tempOperasiKetiga.toFixed(3);
}

function operasiKeempat(a, b, c, d, e, f) {
    var tempOperasiKempat = (a - (b * c) - (d * e)) / f;
    return tempOperasiKempat.toFixed(3);
}

function operasiPersiapan() {
    var persiapanHasil = [];
    persiapanHasil[0] = operasiSatu(jumlahNilaiXkuadrat, jumlahNilaiX, jumlahData);
    persiapanHasil[1] = operasiSatu(jumlahNilaiXKe2kuadrat, jumlahNilaiXKe2, jumlahData);
    persiapanHasil[2] = operasiSatu(jumlahNilaiYKuadrat, jumlahNilaiY, jumlahData);
    persiapanHasil[3] = operasiKedua(jumlahNilaiXkaliY, jumlahNilaiX, jumlahNilaiY, jumlahData);
    persiapanHasil[4] = operasiKedua(jumlahNilaiXKe2KaliY, jumlahNilaiXKe2, jumlahNilaiY, jumlahData);
    persiapanHasil[5] = operasiKedua(jumlahNilaiXKe2KaliX, jumlahNilaiX, jumlahNilaiXKe2, jumlahData);
    return persiapanHasil;
}

function kesimpulanKorelasi(nilai) {
    var hasilKesimpulan = nilai;
    var kesimpulan = "Jadi Korelasinya ";
    if (hasilKesimpulan <= 0) {
        kesimpulan += " Tidak ada korelasi diantar dua variable (0 atau < 0)";
    } else if (hasilKesimpulan <= 0.25) {
        kesimpulan += " Korelasi sangat lemah (>0 - 0,25)";
    } else if (hasilKesimpulan <= 0.5) {
        kesimpulan += " Korelasi cukup  (>0.25 - 0.5)";
    } else if (hasilKesimpulan <= 0.75) {
        kesimpulan += " Korelasi kuat (>0.5 - 0.75)";
    } else if (hasilKesimpulan <= 0.99) {
        kesimpulan += " Korelasi sangat kuat (>0.75 - 0.99)";
    } else if (hasilKesimpulan <= 1) {
        kesimpulan += " Korelasi sempurna (>0.99 - 1)";
    }
    return kesimpulan;
}