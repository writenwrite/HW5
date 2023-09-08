class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

class AplikasiPendaftaran {
    constructor() {
        this.pendaftarList = [];
    }

    openTab(evt, tabName) {
        // Kode untuk membuka tab (sama seperti sebelumnya)
    }

    async tambahPendaftar() {
        const nama = document.getElementById("nama").value;
        const umur = parseInt(document.getElementById("umur").value);
        const uangSangu = parseInt(document.getElementById("uangSangu").value);

        if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
            alert("Data tidak memenuhi kriteria!");
            return;
        }

        const pendaftar = new Pendaftar(nama, umur, uangSangu);
        this.pendaftarList.push(pendaftar);

        await this.updateTable();
    }

    async updateTable() {
        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = '';

        this.pendaftarList.forEach(pendaftar => {
            const newRow = tableBody.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.innerHTML = pendaftar.nama;
            cell2.innerHTML = pendaftar.umur;
            cell3.innerHTML = pendaftar.uangSangu;
        });

        const resume = document.getElementById("resume");
        const rataRata = this.hitungRataRata(this.pendaftarList);

        resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRata.rataRataUangSangu} dengan rata-rata umur ${rataRata.rataRataUmur}`;
    }

    hitungRataRata(pendaftarList) {
        // Kode untuk menghitung rata-rata (sama seperti sebelumnya)
    }
}

const aplikasi = new AplikasiPendaftaran();

document.getElementById("tabRegistrasi").addEventListener("click", () => {
    aplikasi.openTab(event, 'Registrasi');
});

document.getElementById("tabListPendaftar").addEventListener("click", () => {
    aplikasi.openTab(event, 'ListPendaftar');
});

document.getElementById("submitButton").addEventListener("click", async () => {
    await aplikasi.tambahPendaftar();
});
