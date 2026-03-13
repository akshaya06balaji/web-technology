document.addEventListener("DOMContentLoaded", () => {

  /* ========= LIVE PREVIEW ========= */
  function updateText(id, previewId) {
    const input = document.getElementById(id);
    const preview = document.getElementById(previewId);
    if (!input || !preview) return;

    input.addEventListener("input", () => {
      preview.innerText = input.value;
    });
  }

  updateText("name", "pname");
  updateText("email", "pemail");
  updateText("phone", "pphone");
  updateText("education", "pedu");
  updateText("experience", "pexp");
  updateText("summary", "psummary");

  /* ========= SKILLS (comma → bullets) ========= */
  const skillsInput = document.getElementById("skills");
  const skillsPreview = document.getElementById("pskills");

  skillsInput.addEventListener("input", () => {
    skillsPreview.innerHTML = "";
    skillsInput.value.split(",").forEach(skill => {
      if (skill.trim()) {
        const li = document.createElement("li");
        li.innerText = skill.trim();
        skillsPreview.appendChild(li);
      }
    });
  });

  /* ========= PROJECTS (line → bullets) ========= */
  const projectsInput = document.getElementById("projects");
  const projectsPreview = document.getElementById("pprojects");

  projectsInput.addEventListener("input", () => {
    projectsPreview.innerHTML = "";
    projectsInput.value.split("\n").forEach(project => {
      if (project.trim()) {
        const li = document.createElement("li");
        li.innerText = project.trim();
        projectsPreview.appendChild(li);
      }
    });
  });

  /* ========= DARK MODE ========= */
  const toggleBtn = document.getElementById("darkToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerText = "☀ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const dark = document.body.classList.contains("dark-mode");
    toggleBtn.innerText = dark ? "☀ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", dark ? "dark" : "light");
  });

  /* ========= DASHBOARD NAV ========= */
  document.getElementById("buildBtn").addEventListener("click", () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("builder").hidden = false;
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    document.getElementById("builder").hidden = true;
    document.getElementById("dashboard").style.display = "flex";
  });

  /* ========= TEMPLATE SWITCH ========= */
  const templateSelect = document.getElementById("templateSelect");
  const resume = document.getElementById("resume");

  templateSelect.addEventListener("change", () => {
    resume.className = "preview " + templateSelect.value;
  });

  /* ========= VALIDATION ========= */
  const downloadBtn = document.getElementById("downloadBtn");

  function allFieldsFilled() {
    return ["name","email","phone","skills","education","experience","projects","summary"]
      .every(id => document.getElementById(id).value.trim() !== "");
  }

  function checkFormStatus() {
    downloadBtn.disabled = !allFieldsFilled();
  }

  document.querySelectorAll("input, textarea").forEach(el =>
    el.addEventListener("input", checkFormStatus)
  );

  checkFormStatus();

  /* ========= PDF ========= */
  window.downloadPDF = function () {
    if (!allFieldsFilled()) {
      alert("⚠ Please fill in all fields before downloading your resume.");
      return;
    }

    html2pdf().from(resume).set({
      margin: 0,
      filename: "My_Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).save();
  };

});
