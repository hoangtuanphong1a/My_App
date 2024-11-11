const btnE1 = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weighttValue = document.getElementById("weight").value;

    const bmiValue = weighttValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
    } else if (bmiValue >= 30) {
        weightConditionEl.innerText = "Obesity";
    }
}
btnE1.addEventListener("click", calculateBMI);
