(async function () {
  const employeeListData = await fetch("./data.json");
  const employeeListJson = await employeeListData.json();
  const employeeData = employeeListJson;
  // console.log(employeeData);

  const employeeListContainer = document.querySelector(".employee-list");
  const employeeInformation = document.querySelector(".employee-information");
  const formContainer = document.querySelector(".form-body");
  const addEmployeeModal = document.querySelector(".add-employee-modal");
  const addEmployeeBtn = document.querySelector(".add-employee-btn");
  let selectedEmployee = employeeData[0];
  let selectedEmployeeId = employeeData[0]?.id;

  employeeListContainer.addEventListener("click", (e) => {
    if (
      e.target.tagName.toLowerCase() === "li" &&
      selectedEmployeeId !== e.target.id
    ) {
      selectedEmployeeId = e.target.id;
      displayTheEmployeeInformation(selectedEmployeeId);
      [...employeeListContainer?.children].forEach((emp) =>
        emp.id === selectedEmployeeId
          ? emp.classList.add("selected")
          : emp.classList?.remove("selected")
      );
      selectedEmployee = employeeData[selectedEmployeeId - 1];
    }

    if (e.target.tagName.toLowerCase() === "span") {
      let newEmployeeData = [...employeeListContainer?.children].filter(
        (emp) => emp.id !== e.target.parentNode.getAttribute("id")
      );
    }
  });

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(formContainer);
    let values = [...formData.entries()];

    let empData = {};
    values.forEach((val) => (empData[val[0]] = val[1]));
    empData.id = employeeData[employeeData.length - 1].id + 1;
    addEmployeeModal.style.display = "none";
    formContainer.reset();
    employeeData.push(empData);
    generateEmployeeList();
  });
  addEmployeeBtn.addEventListener("click", (e) => {
    addEmployeeModal.style.display = "flex";
  });

  const generateEmployeeList = () => {
    employeeListContainer.innerHTML = "";

    employeeData.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `${element.firstName} ${element.lastName} <span>X</span>`;

      if (parseInt(selectedEmployeeId, 10) === element.id) {
        li.classList.add("selected");
        selectedEmployeeId = element.id;
        displayTheEmployeeInformation(selectedEmployeeId);
      }

      li.setAttribute("id", element.id);
      employeeListContainer.appendChild(li);
    });
  };
  const displayTheEmployeeInformation = (selectedEmployeeId) => {
    const {
      firstName,
      lastName,
      image,
      age,
      address,
      email,
      phone,
      birthDate,
    } = employeeData[selectedEmployeeId - 1];
    employeeInformation.innerHTML = "";
    employeeInformation.innerHTML = `
    <img class="employee-img" alt="employee-img" src="${image}"/>
            <span>${firstName} ${lastName}</span>
            <span>${age}</span>
            <span>${address?.address}</span>
            <span>${email}</span>
            <span>${phone}</span>
            <span>${birthDate}</span>

    `;
  };
  generateEmployeeList();
})();
