// ===== Mock employee data =====
const employees = [
    {
      id: 1,
      name: "Ichiro Hagiwara",
      position: "Frontend Engineer",
      skills: ["JavaScript", "Vue.js", "HTML", "CSS"],
      summary: "UI設計とJavaScript教育が得意"
    },
    {
      id: 2,
      name: "Taro Yamada",
      position: "Backend Engineer",
      skills: ["Node.js", "Python", "SQL"],
      summary: "API設計とDB設計担当"
    },
    {
      id: 3,
      name: "Hanako Suzuki",
      position: "Designer",
      skills: ["Figma", "UI/UX"],
      summary: "画面設計とUX改善"
    }
  ];
  
  // ===== Root =====
  const app = document.getElementById("app");
  
  // ===== Render list =====
  function renderList() {
    app.innerHTML = `
      <h1>Employee List</h1>
      <ul>
        ${employees.map(emp => `
          <li>
            <button onclick="renderDetail(${emp.id})">
              ${emp.name} - ${emp.position}
            </button>
          </li>
        `).join("")}
      </ul>
    `;
  }
  
  // ===== Render detail =====
  function renderDetail(id) {
    const emp = employees.find(e => e.id === id);
  
    app.innerHTML = `
      <button onclick="renderList()">← Back</button>
      <h2>${emp.name}</h2>
      <p><strong>Position:</strong> ${emp.position}</p>
      <p><strong>Summary:</strong> ${emp.summary}</p>
  
      <h3>Skills</h3>
      <ul>
        ${emp.skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    `;
  }
  
  // ===== Init =====
  renderList();
  