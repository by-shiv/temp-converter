const degreeInput = document.getElementById('degree');
const inputTypeSelect = document.getElementById('input-type');
const outputTypeSelect = document.getElementById('output-type');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
    const degree = parseFloat(degreeInput.value);
    const inputType = inputTypeSelect.value;
    const outputType = outputTypeSelect.value;

    if (isNaN(degree)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    let result;

    if (inputType === outputType) {
        result = degree;
    } else if (inputType === 'celsius') {
        if (outputType === 'fahrenheit') {
            result = (degree * 9 / 5) + 32;
        } else if (outputType === 'kelvin') {
            result = degree + 273.15;
        }
    } else if (inputType === 'fahrenheit') {
        if (outputType === 'celsius') {
            result = (degree - 32) * 5 / 9;
        } else if (outputType === 'kelvin') {
            result = (degree + 459.67) * 5 / 9;
        }
    } else if (inputType === 'kelvin') {
        if (outputType === 'celsius') {
            result = degree - 273.15;
        } else if (outputType === 'fahrenheit') {
            result = (degree * 9 / 5) - 459.67;
        }
    }

    resultDiv.textContent = `${result.toFixed(2)} ${outputType}`;
}