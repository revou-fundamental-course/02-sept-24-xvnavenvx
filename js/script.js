// ini Javascript 

// Merubah warna klik menu jajargenjang
function ccjajargenjang() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor='bisque';
    document.getElementById('segitiga-btn').style.backgroundColor='whitesmoke';
}

// Merubah warna klik menu jajargenjang
function ccsegitiga() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor='whitesmoke';
    document.getElementById('segitiga-btn').style.backgroundColor='bisque';
}

function validateLuasSegitiga() {
    let alas=document.getElementById('panjang-alas').value;
    let tinggi=document.getElementById('tinggi').value;

    if (alas == '' || tinggi == '' || alas.includes('e') || tinggi.includes('e')) {
        alert('Ada Isian yang Belum Terisi atau Adanya Kesalahan Pengisian Angka. Cek kembali isian Panjang Alas atau Tinggi!');
        
    };
    
    document.getElementById('LuasSegitiga').value = 0.5*alas*tinggi;
}

function validateKelilingSegitiga() {
    let sisiA=document.getElementById('sisi-A').value;
    let sisiB=document.getElementById('sisi-B').value;
    let sisiC=document.getElementById('sisi-C').value;

    if (sisiA == '' || sisiB == '' || sisiC == '' || sisiA.includes('e') || sisiB.includes('e') || sisiC.includes('e')) {
        alert('Ada Isian yang Belum Terisi atau Adanya Kesalahan Pengisian Angka. Cek kembali isian Panjang Sisi!');
        
    };
    
    document.getElementById('KelilingSegitiga').value = parseInt(sisiA)+parseInt(sisiB)+parseInt(sisiC);
}

function ResetLuasSegitiga() {
    document.getElementById('panjang-alas').value = "";
    document.getElementById('tinggi').value = "";
    document.getElementById('LuasSegitiga').value ="";
}

function ResetKelilingSegitiga() {
    document.getElementById('sisi-A').value = "";
    document.getElementById('sisi-B').value = "";
    document.getElementById('sisi-C').value ="";
    document.getElementById('KelilingSegitiga').value ="";
}
