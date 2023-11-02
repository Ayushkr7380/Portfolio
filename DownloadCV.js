window.jsPDF = window.jspdf.jsPDF;
const res=document.getElementById('main5-button');
res.addEventListener('click', function() {
    // let imageUrl = 'ayushResume.jpg';

    // let pdf = new jsPDF();
    // pdf.addImage(imageUrl, 'JPEG', 10, 10, 190, 277);
    // pdf.save('ayushResume.pdf');
    const g = 'https://drive.google.com/file/d/1MoFPHw0acI6WniLPqUDvS9NbeOnEbkwQ/view?usp=sharing';
    window.open(g, '_blank');

});
