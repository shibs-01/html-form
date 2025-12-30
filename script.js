function uiHandling(){
  const techSelect = document.getElementById("techStack");
  const countrySelect = document.getElementById("country");
  
  if(techSelect.value === ""){
    techSelect.classList.add("placeholder-tech");
  } else {
    techSelect.classList.remove("placeholder-tech");
  }
  
  if(countrySelect.value === ""){
    countrySelect.classList.add("placeholder-tech");
  } else {
    countrySelect.classList.remove("placeholder-tech");
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const techSelect = document.getElementById("techStack");
  const countrySelect = document.getElementById("country");
  

  uiHandling();
  
  techSelect.addEventListener("change", uiHandling);
  countrySelect.addEventListener("change", uiHandling);
});
function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const address = document.getElementById("address").value.trim();
  const techStack = document.getElementById("techStack").value;

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "";

  if (!name || !email || !age || !phone || !country || !gender || !techStack || !address) {
    alert("All fields are required");
    return;
  }

  if (isNaN(age) || age <= 0) {
    alert("Invalid age");
    return;
  }

  if (!/^[0-9]{10,15}$/.test(phone)) {
    alert("Invalid telephone number");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email");
    return;
  }

  document.getElementById("output").innerHTML = `
    <table>
      <tr><th>Name</th><td>${name}</td></tr>
      <tr><th>Email Address</th><td>${email}</td></tr>
      <tr><th>Age</th><td>${age}</td></tr>
      <tr><th>Phone no.</th><td>${phone}</td></tr>
      <tr><th>Country</th><td>${country}</td></tr>
      <tr><th>Gender</th><td>${gender}</td></tr>
      <tr><th>Tech Stack</th><td>${techStack}</td></tr>
      <tr><th>Address</th><td>${address.replace(/\n/g,"<br>")}</td></tr>
    </table>
  `;
}
