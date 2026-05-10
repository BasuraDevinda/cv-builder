function generateCV() {
  document.getElementById("cvName").innerText =
    document.getElementById("name").value;

  document.getElementById("cvEmail").innerText =
    document.getElementById("email").value;

  document.getElementById("cvSkills").innerText =
    document.getElementById("skills").value;

  document.getElementById("cvEducation").innerText =
    document.getElementById("education").value;

  document.getElementById("cvExperience").innerText =
    document.getElementById("experience").value;
}

function downloadCV() {
  const element = document.getElementById("cv");

  html2pdf()
    .set({
      margin: 1,
      filename: 'my-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .from(element)
    .save();
}
