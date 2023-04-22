let employee = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
  ];
  
  const filter_button = document.getElementById("filter-button");
  const proff_select = document.getElementById("proff");
  const employeeList = document.getElementById("employee_list");
  const add_user = document.getElementById("add_user");
  const Enter_Name = document.getElementById("Enter_Name");
  const Enter_Profession = document.getElementById("Enter_Profession");
  const Enter_Age = document.getElementById("Enter_Age");
  
  window.addEventListener("DOMContentLoaded", (event) => {
    
    display_employees(employee);
   
  });
  
  filter_button.addEventListener("click",(event)=> {
    event.preventDefault();
    const selected_proff = proff_select.value;
    if (selected_proff == "")
     {
       alert("Select a Profession"); 
       return; 
    }
    display_employees(employee.filter(emp => emp.profession == selected_proff));
  })
  add_user.addEventListener("click",(event)=>{
    event.preventDefault();
    const name = Enter_Name.value;
    const profession = Enter_Profession.value;
    const age = Enter_Age.value;
    add_employee(name, profession, age);
    
    display_employees(employee);
    Enter_Name.value="";
    Enter_Profession.value="";
    Enter_Age.value="";
  })
  const display_employees = (employees) => {
    employeeList.innerHTML ="";
    employees.forEach((emp) => {
        const listItem = document.createElement("li");
        listItem.classList.add("employee");
     
        const id = document.createElement("span")
        id.textContent = emp.id;
  
        const name = document.createElement("p");
        name.textContent = "Name: " + emp.name;

        const profession = document.createElement("p");
        profession.textContent = "Profession: " + emp.profession;
    
        const age = document.createElement("p");
        age.textContent = "Age: " + emp.age;
    
        listItem.appendChild(id);
        listItem.appendChild(name);
        listItem.appendChild(profession);
        listItem.appendChild(age);
        
        employeeList.appendChild(listItem);
      }); 
  }

  function add_employee(name, profession, age){
    let new_employee = {
        id: employee.length + 1,
        name: name,
        profession: profession,
        age: age
      };
    
      employee.push(new_employee);
    
  }