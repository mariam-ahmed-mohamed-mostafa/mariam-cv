const element = document.getElementById("cv");
html2pdf()
  .set({
    margin: 0.5,
    filename: 'My_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  })
  .from(element)
  .save();
