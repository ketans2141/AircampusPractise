 function onAdd(result) {
      result.preventDefault();
      let name = document.getElementById("fname").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("num").value;
      let tbody1 = document.querySelector("tbody");
      tbody1.innerHTML += `
      <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td><button class="removeBtn">Remove</button></td>
      </tr>
  `;
  }
  let form1 = document.querySelector("form");
  form1.addEventListener("submit", onAdd);
  function onDeleteRow(result) {
      if (!result.target.classList.contains("removeBtn")) {
          return;
      }
    const btn = result.target;
    btn.closest("tr").remove();
  }
let table1 = document.querySelector("table");
table1.addEventListener("click", onDeleteRow);