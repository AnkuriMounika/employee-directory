let currentPage = 1;
let itemsPerPage = 10;

function paginate(data) {
  const start = (currentPage - 1) * itemsPerPage;
  return data.slice(start, start + itemsPerPage);
}

function setupPagination(data) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const container = document.getElementById("pagination-controls");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderEmployees(data);
    });
    container.appendChild(btn);
  }
}
