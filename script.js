function beregnMoms() {
  let beloeb = document.getElementById("beloeb").value;
  let moms = document.getElementById("moms").value / 100 + 1;
  let total = document.getElementById("total");

  let totalValue = beloeb * moms;
  total.textContent = totalValue;
  console.log("beløbet er: " + beloeb, "momsprocenten er: " + ((moms*100)-100) + "%", "totalt bliver det: " + totalValue)
  console.log("momsprocenten er: " + ((moms*100)-100) + "%")
  console.log("totalt bliver det: " + totalValue)
}