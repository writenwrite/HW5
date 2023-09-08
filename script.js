// Fungsi untuk membuka tab
function openTab(tabName) {
    var tabs = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata(pendaftar) {
    var totalUangSangu = 0;
    var totalUmur = 0;

    for (var i = 0; i < pendaftar.length; i++) {
        totalUangSangu += pendaftar[i].uangSangu;
        totalUmur += pendaftar[i].umur;
    }

    var rataRataUangSangu = totalUangSangu / pendaftar.length;
    var rataRataUmur = totalUmur / pendaftar.length;

    return {
        rataRataUangSangu: rataRataUangSangu.toFixed(2),
        rataRataUmur: rataRataUmur.toFixed(2),
    };
}

// Fungsi untuk menambahkan pendaftar ke tabel
function tambahPendaftar() {
    var nama = document.getElementById("nama").value;
    var umur = parseInt(document.getElementById("umur").value);
    var uangSangu = parseInt(document.getElementById("uangSangu").value);

    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Data tidak memenuhi kriteria!");
        return;
    }
    var pendaftar = {
        nama: nama,
        umur: umur,
        uangSangu: uangSangu
    };

    var table = document.getElementById("table");
    var tableBody = document.getElementById("table-body");
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = pendaftar.nama;
    cell2.innerHTML = pendaftar.umur;
    cell3.innerHTML = pendaftar.uangSangu;

    var pendaftarRows = tableBody.getElementsByTagName("tr");
    var resume = document.getElementById("resume");
    var rataRata = hitungRataRata(Array.from(pendaftarRows).map(row => {
        var cells = row.getElementsByTagName("td");
        return {
            nama: cells[0].innerText,
            umur: parseInt(cells[1].innerText),
            uangSangu: parseInt(cells[2].innerText)
        };
    }));

    resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar Rp. ${rataRata.rataRataUangSangu} dengan rata-rata umur ${rataRata.rataRataUmur} tahun.`;

    // Reset nilai input
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uangSangu").value = "";
}

// Tampilkan tab Registrasi saat halaman dimuat
openTab("Registrasi");

