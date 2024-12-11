addEventListener("DOMContentLoaded", (event) => {
    const sortBySelectors = document.getElementsByClassName("sorting-handler");
    for (let i = 0; i < sortBySelectors.length; i++) {
        sortBySelectors[i].addEventListener("click", (event) => {
            document.getElementById(`helper-radio-${sortBySelectors[i].id.split("-")[2]}`).checked = true;
        })
    }
    document.getElementById("search_make").addEventListener("change", (event) => {
        changeCarMake(event.target.value);
    })
    getCarMakes();
});

async function getCarMakes() {
    try {
        const response = await fetch("/api/filter/make/");
        if (!response.ok) {
            console.error("Could not fetch makes of cars.")
        }

        response.json().then(makes => {
            makes.forEach(make => {
                makeOption = document.createElement("option");
                makeOption.text = make;
                document.getElementById("search_make").add(makeOption);
            })

        })
    } catch (error) {
        console.error(error.message);
    }
}

async function getCarModels() {
    clearOptions("search_model", ["All"]);
    try {
        const makeSelect = document.getElementById("search_make");
        const make = makeSelect.options[makeSelect.selectedIndex].value;
        const response = await fetch(`/api/filter/model?make=${make}`);
        if (!response.ok) {
            console.error("Could not fetch makes of cars.")
        }

        response.json().then(models => {
            models.forEach(model => {
                modelOption = document.createElement("option");
                modelOption.text = model;
                document.getElementById("search_model").add(modelOption);
            })

        })
    } catch (error) {
        console.error(error.message);
    }
}

function clearOptions(id, newEntries) {
    const selectElement = document.getElementById(id);
    for (let i=selectElement.options.length -1; i>=0; i--) {
        selectElement.remove(i);
    }
    newEntries.forEach((entry) => {
        modelOption = document.createElement("option");
        modelOption.text = entry;
        selectElement.add(modelOption);
    })
}

function changeCarMake(make) {
    document.getElementById("search_model").disabled = (make === "All");
    getCarModels()
}