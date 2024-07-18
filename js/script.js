document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("bmiForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      console.log("Form submitted");

      // Get input values
      const gender = document.getElementById("gender").value;
      const age = parseInt(document.getElementById("age").value);
      const height = parseFloat(document.getElementById("height").value);
      const weight = parseFloat(document.getElementById("weight").value);

      console.log("Gender:", gender);
      console.log("Age:", age);
      console.log("Height:", height);
      console.log("Weight:", weight);

      // Validate input
      if (
        isNaN(age) ||
        age <= 0 ||
        isNaN(height) ||
        height <= 0 ||
        isNaN(weight) ||
        weight <= 0
      ) {
        alert("Please enter valid age, height, and weight values.");
        return;
      }

      // Calculate BMI
      const bmi = weight / (height / 100) ** 2;
      console.log("BMI:", bmi);

      // Determine BMI category
      let category = "";
      if (bmi < 18.5) {
        category = "Kekurangan berat badan";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (ideal)";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
      } else {
        category = "Kegemukan (Obesitas)";
      }
      console.log("Category:", category);

      // Display results
      document.getElementById(
        "bmiValue"
      ).textContent = `Your BMI: ${bmi.toFixed(2)}`;
      document.getElementById(
        "bmiCategory"
      ).textContent = `Category: ${category}`;
      document.getElementById("result").style.display = "block";
      console.log("Results displayed");
    });

  document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").style.display = "none";
    console.log("Form reset");
  });
});
