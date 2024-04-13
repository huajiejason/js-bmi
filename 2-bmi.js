// (A) CHANGE BMI MEASURING SYSTEM
function measureBMI () {
  // (A1) GET HTML ELEMENTS
  let weight = document.getElementById("bmi-weight"),
      height = document.getElementById("bmi-height")

    weightu.innerHTML = "KG";
    weight.min = 1; weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54; height.max = 272;
}

// (B) CALCULATE BMI
function calcBMI () {
  // (B1) GET HTML ELEMENTS
  let bmi = null,
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results = document.getElementById("bmi-results");

  // (B2) CALCULATE BMI
  // METRIC BMI = MASS (KG) / HEIGHT (M) SQUARE
    height = height / 100;
    bmi = weight / (height * height);
  // ROUND OFF - 2 DECIMAL PLACES
    bmi = Math.round(bmi * 100) / 100;
    
  // (B3) SHOW RESULTS
  if (bmi < 18.5) {
    results.innerHTML = bmi + " - Underweight";
  } else if (bmi < 25) {
    results.innerHTML = bmi + " - Normal weight";
  } else if (bmi < 30) {
    results.innerHTML = bmi + " - Pre-obesity";
  } else if (bmi < 35) {
    results.innerHTML = bmi + " - Obesity class I";
  } else if (bmi < 40) {
    results.innerHTML = bmi + " - Obesity class II";
  } else {
    results.innerHTML = bmi + " - Obesity class III";
  }
  return false;
}
