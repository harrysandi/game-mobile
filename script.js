function getPilihanKomputer() {
    const comp = Math.random();

    if ( comp < 0.34) return 'kertas';
    if ( comp >= 0.34 && comp < 0.67)  return 'batu';
    return 'gunting';
}

function getPilihanPlayer(comp, player) {
    if ( player == comp) return 'Seri';
    if ( player == 'kertas') return(comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    if ( player == 'batu') return (comp == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    if ( player == 'gunting') return (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    return 'BISA MAINNYA GAK SIH?!!!!!';
}

function acak(){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['kertas', 'batu', 'gunting'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0 ;
        
    }, 100);
}

let pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    acak();

    setTimeout(() => {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
        const info = document.querySelector('.info');
    
        info.innerHTML = hasil;
        
    }, 1000);
});

let pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    acak();

    setTimeout(() => {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
        const info = document.querySelector('.info');
    
        info.innerHTML = hasil;
        
    }, 1000);
});

let pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getPilihanPlayer(pilihanKomputer, pilihanPlayer);

    acak();

    setTimeout(() => {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
        const info = document.querySelector('.info');
    
        info.innerHTML = hasil;
        
    }, 1000);

});