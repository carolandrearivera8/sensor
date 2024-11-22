const pollutionLevels = [
    {level: "Bueno", color: "#4caf50"},
    { level: "Moderado", color: "#ffeb3b" },
    { level: "Dañino para grupos sensibles", color: "#ff9800" },
    { level: "Dañino", color: "#f44336" },
    { level: "Muy dañino", color: "#9c27b0" },
    { level: "Peligroso", color: "#b71c1c" },
]

const pollutionLevelDiv = document.getElementById("pollution-level");

// Función para actualizar el nivel de contaminación
function updatePollutionLevel() {
    // Seleccionar un nivel aleatorio
    const randomLevel = pollutionLevels[Math.floor(Math.random() * pollutionLevels.length)];

    // Actualizar el contenido y el color del contenedor
    pollutionLevelDiv.textContent = randomLevel.level;
    pollutionLevelDiv.style.backgroundColor = randomLevel.color;
}

// Actualizar cada 5 segundos
setInterval(updatePollutionLevel, 5000);

// Primera actualización
updatePollutionLevel();