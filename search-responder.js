const models = {
    "Audi": ["A1", "A2", "A3", "A4", "A5", "e-tron", "Q1", "Q3", "Q5", "Q8 e-tron"],
    "BMW": ["1-Series", "2-Series", "3-Series", "4-Series", "5-Series", "M1", "M2", "M3", "M4", "M5", "X1", "X3", "X5"],
    "Citroen": ["C1", "C3", "C4", "C5", "e-C3", "e-C4", "e-C4x"],
    "Dacia": ["Duster", "Jogger", "Spring"],
    "Peugot": ["107", "108", "207", "208", "2008", "307", "308", "3008", "407", "408", "508", "508 SW", "5008"],
    "SEAT": ["Ateca", "Ibiza", "Leon", "Toledo"],
    "Vauxhall": ["Astra", "Crossland", "Corsa", "Corsa-e", "Grandland", "Insignia", "Meriva", "Mokka", "Vectra"],
    "Volkswagen": ["eon", "Golf", "Passat", "Polo", "Tiguan", "Touran"]
}

function getMakes() {
    return ["Audi", "BMW", "Citroen", "Dacia", "Peugot", "SEAT", "Vauxhall", "Volkswagen"];
}

function getModels(make) {
    return models[make]
}

module.exports = {getMakes, getModels}