document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
});
