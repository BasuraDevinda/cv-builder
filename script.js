// script.js

const inputs = {
    name: document.getElementById("name"),
    jobTitle: document.getElementById("jobTitle"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    location: document.getElementById("location"),
    summary: document.getElementById("summary"),
    skills: document.getElementById("skills"),
    education: document.getElementById("education"),
    experience: document.getElementById("experience"),
    projects: document.getElementById("projects")
};

const previews = {
    name: document.getElementById("previewName"),
    jobTitle: document.getElementById("previewJobTitle"),
    email: document.getElementById("previewEmail"),
    phone: document.getElementById("previewPhone"),
    location: document.getElementById("previewLocation"),
    summary: document.getElementById("previewSummary"),
    skills: document.getElementById("previewSkills"),
    education: document.getElementById("previewEducation"),
    experience: document.getElementById("previewExperience"),
    projects: document.getElementById("previewProjects")
};

function updatePreview(){

    previews.name.innerText = inputs.name.value || "Your Name";
    previews.jobTitle.innerText = inputs.jobTitle.value || "Job Title";

    previews.email.innerText = inputs.email.value;
    previews.phone.innerText = inputs.phone.value;
    previews.location.innerText = inputs.location.value;

    previews.summary.innerText = inputs.summary.value;

    previews.education.innerText = inputs.education.value;

    previews.experience.innerText = inputs.experience.value;

    previews.projects.innerText = inputs.projects.value;

    // Skills
    previews.skills.innerHTML = "";

    const skillsArray = inputs.skills.value.split(",");

    skillsArray.forEach(skill => {

        if(skill.trim() !== ""){

            const li = document.createElement("li");

            li.innerText = skill.trim();

            previews.skills.appendChild(li);
        }
    });
}

Object.values(inputs).forEach(input => {
    input.addEventListener("input", updatePreview);
});

function saveCV(){

    const cvData = {
        name: inputs.name.value,
        jobTitle: inputs.jobTitle.value,
        email: inputs.email.value,
        phone: inputs.phone.value,
        location: inputs.location.value,
        summary: inputs.summary.value,
        skills: inputs.skills.value,
        education: inputs.education.value,
        experience: inputs.experience.value,
        projects: inputs.projects.value
    };

    localStorage.setItem("cvData", JSON.stringify(cvData));

    alert("CV Saved Successfully!");
}

function loadCV(){

    const savedData = localStorage.getItem("cvData");

    if(savedData){

        const cvData = JSON.parse(savedData);

        inputs.name.value = cvData.name || "";
        inputs.jobTitle.value = cvData.jobTitle || "";
        inputs.email.value = cvData.email || "";
        inputs.phone.value = cvData.phone || "";
        inputs.location.value = cvData.location || "";
        inputs.summary.value = cvData.summary || "";
        inputs.skills.value = cvData.skills || "";
        inputs.education.value = cvData.education || "";
        inputs.experience.value = cvData.experience || "";
        inputs.projects.value = cvData.projects || "";

        updatePreview();
    }
}

function clearCV(){

    localStorage.removeItem("cvData");

    Object.values(inputs).forEach(input => {
        input.value = "";
    });

    updatePreview();

    alert("CV Cleared!");
}

function downloadCV(){

    const element = document.getElementById("cv");

    const options = {
        margin: 0.5,
        filename: 'Professional_CV.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(options).from(element).save();
}

window.onload = loadCV;
