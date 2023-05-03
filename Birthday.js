function calculate() {
  const birthday = new Date("2003-09-06");
  const now = new Date();
  
  let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (nextBirthday < now) {
    nextBirthday = new Date(now.getFullYear() + 1, birthday.getMonth(), birthday.getDate()); }
  let yearsRemaining = nextBirthday.getFullYear() - birthday.getFullYear();
  if (now < nextBirthday) { yearsRemaining--; }
  
  document.getElementById("countdown").innerHTML = yearsRemaining;
  setTimeout(calculate, 1000);} 
  window.onload = calculate;