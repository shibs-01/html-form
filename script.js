function submitForm() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "";

  const techEls = document.querySelectorAll(".tech:checked");
  const tech = Array.from(techEls).map(t => t.value);

  if (!name || !age || !gender || !country || tech.length === 0 || !address || !phone || !email) {
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
      <tr><th>Age</th><td>${age}</td></tr>
      <tr><th>Gender</th><td>${gender}</td></tr>
      <tr><th>Country</th><td>${country}</td></tr>
      <tr><th>Tech Stack</th><td>${tech.join(", ")}</td></tr>
      <tr><th>Address</th><td>${address.replace(/\n/g,"<br>")}</td></tr>
      <tr><th>Telephone</th><td>${phone}</td></tr>
      <tr><th>Email</th><td>${email}</td></tr>
    </table>
  `;
}
