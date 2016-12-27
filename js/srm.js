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

//hasil
var xNumber = document.querySelector("#Xnumber");
var buttonCariY = document.querySelector("#cariY");
var hasilY = document.querySelector("#hasilY");
var hasilTable = document.querySelector("#hasilTable");
var solusiRumus = document.querySelector("#solusiRumus");


buttonCariY.addEventListener("click", function() {
    y = a + (b * Number(xNumber.value));
    hasilY.innerHTML = "Y = " + y.toFixed(2);
});


// rumus Y = a + bX;



buttonMasukan.addEventListener("click", function() {
    hasil.style.display = "none";
    kolomData.style.display = "block";

    jumlahData = Number(banyakData.value);
    var textsnya = "";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += '<p>' + no + ' <input class="x" type="number"> <input class="xke2" type="number"> <input class="y" type="number"><\p>';
    }
    data.innerHTML = textsnya;
});



buttonProses.addEventListener("click", function() {
    for (var i = 0; i < jumlahData; i++) {
        // loop lakukan perhitungan dan pengambilan x2, xke2, y2, x * y
        nilaiX[i] = Number(document.querySelectorAll(".x")[i].value);
        nilaiXkuadrat[i] = Math.pow(nilaiX[i], 2);
        nilaiXKe2[i] = Number(document.querySelectorAll(".xke2")[i].value);
        nilaiXKe2kuadrat[i] = Math.pow(nilaiXKe2[i], 2);
        nilaiY[i] = Number(document.querySelectorAll(".y")[i].value);
        nilaiYkuadrat[i] = Math.pow(nilaiY[i], 2);
        nilaiXkaliY[i] = nilaiX[i] * nilaiY[i];
        nilaiXKe2KaliX[i] = nilaiXKe2[i] * nilaiX[i];
        nilaiXKe2KaliY[i] = nilaiXKe2[i] * nilaiY[i];
    }
    // lakukan pencarian nilai jumlah tiap varible arraay

    ambilJumlahNilai();
    pecahkanRumus();
    cetakTableHasil();
    cetakKoefesienA1();
    cetakKoefesienA2();
    cetakKoefesienA0();
});



function penumlahanNilai(data) {
    return data.reduce(function(a, b) {
        return a + b;
    });
}



function pecahkanRumus() {
    hasil.style.display = "block";
    rumusnya.textContent = "Y = " + a0 + " + " + a1 + " * X ";

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
    a1 = caria1();
    a2 = caria2();
    a0 = caria0();
}

function cetakTableHasil() {
    jumlahData = Number(banyakData.value);
    var textsnya = "";
    var no = 0;
    for (var i = 0; i < jumlahData; i++) {
        no++;
        textsnya += '<p>' + no + ' <input class="x" type="number" value="' + nilaiX[i] +
            '" readonly="readonly"> <input class="y" type="number"  value="' + nilaiY[i] +
            '"readonly="readonly"> <input class="x2" type="number"  value="' + nilaiXkuadrat[i] +
            '"readonly="readonly"> <input class="x2" type="number"  value="' + nilaiYkuadrat[i] +
            '"readonly="readonly"> <input class="xkaliy" type="number"  value="' + nilaiXkaliY[i] +
            '"readonly="readonly"> <input class="xke2" type="number"  value="' + nilaiXKe2[i] +
            '"readonly="readonly"> <input class="xke2kuadrat" type="number"  value="' + nilaiXKe2kuadrat[i] +
            '"readonly="readonly"> <input class="xke2kalix" type="number"  value="' + nilaiXKe2KaliX[i] +
            '"readonly="readonly"> <input class="xke2kaliy" type="number"  value="' + nilaiXKe2KaliY[i] +
            '"readonly="readonly"> <\p>';
    }
    textsnya += '<p> <input class="ex" type="text" value="Ex = ' + jumlahNilaiX +
        '" readonly="readonly"> <input class="ey" type="text"  value="Ey = ' + jumlahNilaiY +
        '"readonly="readonly"> <input class="ex2" type="text"  value="Ex2 = ' + jumlahNilaiXkuadrat +
        '"readonly="readonly"> <input class="ex2" type="text"  value="Ey2 = ' + jumlahNilaiYKuadrat +
        '"readonly="readonly"> <input class="exkaliy" type="text"  value="Ex*y = ' + jumlahNilaiXkaliY +
        '"readonly="readonly"> <input class="exke2" type="text"  value="Exke2 = ' + jumlahNilaiXKe2 +
        '"readonly="readonly"> <input class="exke2kuadrat" type="text"  value="Exke2kuadrat = ' + jumlahNilaiXKe2kuadrat +
        '"readonly="readonly"> <input class="exke2kalix" type="text"  value="Exke2*x = ' + jumlahNilaiXKe2KaliX +
        '"readonly="readonly"> <input class="exke2kaliy" type="text"  value="Exke2*y = ' + jumlahNilaiXKe2KaliY +
        '"readonly="readonly"> <\p>';
    hasilTable.innerHTML = textsnya;
}


function cetakKoefesienA1() {
    var teks = solusiRumus.innerHTML;
    teks += "<p>a1 = ((Exke2^2)(Ex * y) - (Ex*xke2)(Exke2*y)) / ( ((Ex^2)(Exke2^2)) - (Ex*xkedua)^2 )</p>";
    teks += "<p>a1 = (" + jumlahNilaiXKe2kuadrat + ")(" + jumlahNilaiXkaliY +
        ") - (" + jumlahNilaiXKe2KaliX + ")(" + jumlahNilaiXKe2KaliY + ")" +
        "/ ( (" + jumlahNilaiXkuadrat + ")(" + jumlahNilaiXKe2kuadrat + ") - ( pangkatdua(" +
        jumlahNilaiXKe2KaliX + "))<p>";
    teks += "<p>a1 = " + a1 + "<p>";
    solusiRumus.innerHTML = teks;
}

function caria1() {
    var a1 = (jumlahNilaiXKe2kuadrat * jumlahNilaiXkaliY) - (jumlahNilaiXKe2KaliX * jumlahNilaiXKe2KaliY);
    a1 = a1 / ((jumlahNilaiXkuadrat * jumlahNilaiXKe2kuadrat) - (Math.pow(jumlahNilaiXKe2KaliX), 2));
    return a1;
}


function cetakKoefesienA2() {
    var teks = solusiRumus.innerHTML;
    teks += "<br><p>a2 = (Ex1^2)(EXke2*y) - (Ex*xke2)(Ex*y) / (Ex1^2) (Exke2)^2  - (Exke2*x)^2</p>";
    teks += "<p>a2 = (" + jumlahNilaiXkuadrat + ")(" + jumlahNilaiXKe2KaliY + ") - ( " +
        jumlahNilaiXKe2KaliX + " ) (" + jumlahNilaiXkaliY + ")" +
        "/ (" + jumlahNilaiXkuadrat + ") pangkat2( + " + jumlahNilaiXKe2 + ")" + " - pangkat2( " + jumlahNilaiXKe2KaliX + ") </p>";
    teks += "<p>a2 = " + a2 + "<p>";
    solusiRumus.innerHTML = teks;
}

function caria2() {
    var a2 = (jumlahNilaiXkuadrat * jumlahNilaiXKe2KaliY) - (jumlahNilaiXKe2KaliX * jumlahNilaiXkaliY);
    a2 = a2 / ((jumlahNilaiXkuadrat * Math.pow(jumlahNilaiXKe2, 2) - Math.pow(jumlahNilaiXKe2KaliX, 2)));
    return a2;
}

function cetakKoefesienA0() {
    var banyakData = nilaiX.length;
    var teks = solusiRumus.innerHTML;
    teks += "<br><p>a0 = (Ey/n) - (Ex/n) - (Exke2/n)</p>";
    teks += "<p>a0 = (" + jumlahNilaiY + "/" + banyakData + ") - (" + jumlahNilaiX + "/" + banyakData + " ) - (" + jumlahNilaiXKe2 + "/" + banyakData + ")</p>";
    teks += "<p>a0 = (" + jumlahNilaiY / banyakData + ") - (" + jumlahNilaiX / banyakData + ") - (" + jumlahNilaiXKe2 / banyakData + ")</p>";
    teks += "<p>a0 = " + a0;
    solusiRumus.innerHTML = teks;
}

function caria0() {
    var banyakData = nilaiX.length;
    var a0 = (jumlahNilaiY / banyakData) - (jumlahNilaiX / banyakData) - (jumlahNilaiXKe2 / banyakData);
    return a0;
}