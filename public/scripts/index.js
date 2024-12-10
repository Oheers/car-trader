addEventListener("DOMContentLoaded", (event) => {
    const sortBySelectors = document.getElementsByClassName("sorting-handler");
    for (let i = 0; i < sortBySelectors.length; i++) {
        sortBySelectors[i].addEventListener("click", (event) => {
            document.getElementById(`helper-radio-${sortBySelectors[i].id.split("-")[2]}`).checked = true;
        })
    }
});