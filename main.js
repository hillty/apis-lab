const residentsButton = document.getElementById("residents-button");
const namesSection = document.getElementById("names");

function onClick() {
    axios.get("https://swapi.dev/api/planets/2")
        .then((res) => {
            namesSection.innerHTML = ""
            const residents = res.data.residents
            for(let i = 0; i < residents.length; i++){
                axios.get(residents[i])
                    .then((res) => {
                        const link = document.createElement("a")
                        link.setAttribute("href", residents[i])
                        const nameHeading = document.createElement("h2")
                        nameHeading.textContent = res.data.name 

                        link.appendChild(nameHeading)
                        namesSection.appendChild(link) 
                    })
            }
        })
}

residentsButton.addEventListener("click", onClick) 