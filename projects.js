const chr=document.getElementById('chr');
const cal=document.getElementById('cal');
const land1=document.getElementById('landing1');
const land2=document.getElementById('landing2');
const land3=document.getElementById('landing3 ');
chr.addEventListener('click',function(){
    let plink='chromelandingpage.html';
    window.open(plink,'_blank');
});
cal.addEventListener('click',function(){
    let plink='Calculator.html';
    window.open(plink,'_blank');
});
land1.addEventListener('click',function(){
    let plink='ResturantLandingPage.html';
    window.open(plink,'_blank');
});
land2.addEventListener('click',function(){
    let plink='CryptoCurrencyLandingPage.html';
    window.open(plink,'_blank');
});
land3.addEventListener('click',function(){
    let plink='Compitition.html';
    window.open(plink,'_blank');
});