let employees = JSON.parse(localStorage.getItem("allEmployees")) || [...mockEmployees];

function renderEmployees(data) {
  const list = document.getElementById("employee-list");
  list.innerHTML = "";
  const paginated = paginate(data);

  paginated.forEach(emp => {
    const div = document.createElement("div");
    div.className = "employee-card";
    div.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>Email: ${emp.email}</p>
      <p>Department: ${emp.department}</p>
      <p>Role: ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    list.appendChild(div);
  });

  setupPagination(data);
}

function deleteEmployee(id) {
  if (confirm("Are you sure to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    localStorage.setItem("allEmployees", JSON.stringify(employees));
    renderEmployees(employees);
  }
}

function editEmployee(id) {
  const emp = employees.find(e => e.id === id);
  if (emp) {
    localStorage.setItem("editEmp", JSON.stringify(emp));
    window.location.href = "form.html";
  }
}

window.onload = () => {
  renderEmployees(employees);
};
