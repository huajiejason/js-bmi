// (A) CHANGE BMI MEASURING SYSTEM
function measureBMI () {
    // (A1) GET HTML ELEMENTS
    let unit = document.getElementById("bmi-metric").checked,
        weight = document.getElementById("bmi-weight"),
        height = document.getElementById("bmi-height")
  
      weightu.innerHTML = "KG";
      weight.min = 1; weight.max = 635;
      heightu.innerHTML = "CM";
      height.min = 54; height.max = 272;
  }
  
  // (B) CALCULATE BMI
  function calcBMI (weight,height) {
    var result =' ';
    // (B2) CALCULATE BMI
    // METRIC BMI = MASS (KG) / HEIGHT (M) SQUARE
      height = height / 100;
      bmi = weight / (height * height);
    // ROUND OFF - 2 DECIMAL PLACES
      bmi = Math.round(bmi * 100) / 100;
      
    // (B3) SHOW RESULTS
    if (bmi < 18.5) {
      return result = bmi + " - Underweight";
    } else if (bmi < 25) {
        return result = bmi + " - Normal weight";
    } else if (bmi < 30) {
        return result = bmi + " - Pre-obesity";
    } else if (bmi < 35) {
        return result = bmi + " - Obesity class I";
    } else if (bmi < 40) {
        return result = bmi + " - Obesity class II";
    } else {
        return result = bmi + " - Obesity class III";
    }
  }

test("Unit test I", () => {

});
