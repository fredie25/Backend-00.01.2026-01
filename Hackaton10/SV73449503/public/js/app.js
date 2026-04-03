const pendientesList = document.getElementById("pendientes");
const completadosList = document.getElementById("completados");
const form = document.getElementById("item-form");

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("es-PE");
};

const renderList = (target, items, showCompleteButton) => {
  target.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "No hay items";
    target.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = item.nombre;

    const desc = document.createElement("div");
    desc.textContent = item.descripcion;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `Fecha: ${formatDate(item.fecha)}`;

    li.appendChild(title);
    li.appendChild(desc);
    li.appendChild(meta);

    if (showCompleteButton) {
      const actions = document.createElement("div");
      actions.className = "actions";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Completar";
      completeBtn.addEventListener("click", async () => {
        await fetch(`/items/${item._id}/completar`, { method: "PATCH" });
        await loadData();
      });

      actions.appendChild(completeBtn);
      li.appendChild(actions);
    }

    target.appendChild(li);
  });
};

const loadData = async () => {
  const [pendientesRes, completadosRes] = await Promise.all([
    fetch("/items/pendientes"),
    fetch("/items/completados")
  ]);

  const pendientes = await pendientesRes.json();
  const completados = await completadosRes.json();

  renderList(pendientesList, pendientes, true);
  renderList(completadosList, completados, false);
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    nombre: form.nombre.value.trim(),
    descripcion: form.descripcion.value.trim(),
    fecha: form.fecha.value
  };

  await fetch("/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  form.reset();
  await loadData();
});

loadData();
