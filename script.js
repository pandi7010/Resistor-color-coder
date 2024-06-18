const colorValues = {
    "0": "Black",
    "1": "Brown",
    "2": "Red",
    "3": "Orange",
    "4": "Yellow",
    "5": "Green",
    "6": "Blue",
    "7": "Violet",
    "8": "Gray",
    "9": "White",
    "10": "Gold",
    "20": "Silver"
};

const multipliers = {
    "0": 1,
    "1": 10,
    "2": 100,
    "3": 1000,
    "4": 10000,
    "5": 100000,
    "6": 1000000,
    "7": 10000000,
    "8": 100000000,
    "9": 1000000000,
    "10": 0.1,
    "20": 0.01
};

const tolerances = {
    "1": "±1%",
    "2": "±2%",
    "5": "±0.5%",
    "6": "±0.25%",
    "7": "±0.1%",
    "10": "±5%",
    "20": "±10%"
};

function updateResistor() {
    const band1 = document.getElementById('band1').value;
    const band2 = document.getElementById('band2').value;
    const band3 = document.getElementById('band3').value;
    const band4 = document.getElementById('band4').value;

    if (band1 !== "none" && band2 !== "none" && band3 !== "none" && band4 !== "none") {
        const value = ((parseInt(band1) * 10) + parseInt(band2)) * multipliers[band3];
        const tolerance = tolerances[band4];

        document.getElementById('resistorValue').textContent = `${value} Ω`;
        document.getElementById('toleranceValue').textContent = tolerance;

        updateResistorGraphic(band1, band2, band3, band4);
    } else {
        document.getElementById('resistorValue').textContent = 'N/A';
        document.getElementById('toleranceValue').textContent = '±0%';
        document.getElementById('resistorGraphic').innerHTML = '';
    }
}

function updateResistorGraphic(band1, band2, band3, band4) {
    const resistorGraphic = document.getElementById('resistorGraphic');
    resistorGraphic.innerHTML = `
        <div class="band-color" id="bandColor1" style="background-color: ${colorValues[band1].toLowerCase()}"></div>
        <div class="band-color" id="bandColor2" style="background-color: ${colorValues[band2].toLowerCase()}"></div>
        <div class="band-color" id="bandColor3" style="background-color: ${colorValues[band3].toLowerCase()}"></div>
        <div class="band-color" id="bandColor4" style="background-color: ${colorValues[band4].toLowerCase()}"></div>
    `;
}

function reset() {
    document.getElementById('band1').value = "none";
    document.getElementById('band2').value = "none";
    document.getElementById('band3').value = "none";
    document.getElementById('band4').value = "none";
    document.getElementById('resistorValue').textContent = 'N/A';
    document.getElementById('toleranceValue').textContent = '±0%';
    document.getElementById('resistorGraphic').innerHTML = '';
}
