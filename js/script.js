
// Create Issue

// Display Issue form


let createIssueDiv = document.createElement("div") 

createIssueDiv.className = "dinamicContainer"


btnCreateIssue.onclick = () => {
    deleteAndCreate()
    if (createIssueDiv.childNodes.length !=1) {
        createIssueDiv.innerHTML = `
        <div class="formContainer">
                    <h1>Create Issue</h1>
                    <div class="stroke"></div>
                    <form action="" id="createIssueForm" class="createIssueForm">
                        <label for="createIssueTitle">Title</label>
                        <input type="text" id="createIssueTitle" class="createIssueTitle">
                        <label for="createIssueDescription">Description</label>
                        <textarea name="description" id="createIssueDescription" class="createIssueDescription" cols="25" rows="4" form="createIssueForm"></textarea>
                        <label for="createIssueTypes">Issue Type</label>
                        <select name="issueTypes" id="createIssueTypes" class="createIssueTypes">
                            <option value="">-- Select Type ---</option>
                            <option value="bug">Bug</option>
                            <option svalue="improvement">Improvement</option>
                            <option value="newFeature">New Feature</option>
                            <option value="task">Task</option>
                            <option value="subtask">SubTask</option>
                        </select>
                        <label for="createIssueAssignDev">Assign</label>
                        <select name="" id="createIssueAssignDev" class="createIssueAssignDev">
                            <option value="">-- Select Assigne --</option>
                            <option value="diegoDev">Diego Dev</option>
                            <option value="otroDev">Otro Dev</option>
                            <option value="anotherDev">Another Dev</option>
                        </select>
                        <label for="createIssuePriority">Priority</label>
                        <select name="issueTypes" id="createIssuePriority" class="createIssuePriority">
                            <option value="">-- Select Type ---</option>
                            <option value="High">High</option>
                            <option value="Low">Medium</option>
                            <option value="task">Low</option>
                        </select>    
                        <input type="submit" class="createIssueSubmitBtn" id="createIssueSubmitBtn" value="Create">
                    </form>
                </div>
    `

    container.appendChild(createIssueDiv)
    validarForm()
    
    } 

}

const validarForm = () => {
    
    const myForm = document.getElementById("createIssueForm")

    if (createIssueDiv.childNodes.length != 0)  {

        submitIssueBtn = document.getElementById("createIssueSubmitBtn")
        submitIssueBtn.onclick = (e) => {
            e.preventDefault() //Previene que se actualice

            //Instanciamos el nuevo objeto issue con la info puesta en el issue form
            const issueNuevo = new Issue ({

                issueName: myForm.querySelector("#createIssueTitle").value,
                issueDescription: myForm.querySelector("#createIssueDescription").value,
                issueCategory: myForm.querySelector("#createIssueTypes").value,
                issueAssigne: myForm.querySelector("#createIssueAssignDev").value,
                issuePriority: myForm.querySelector("#createIssuePriority").value
            })
            //Agregamos obj a array de objetos
            issuesArray.push(issueNuevo)
            const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
            guardarLocal("listadeIssues", JSON.stringify(issuesArray));


            //Alerta de creación exitosa
            Swal.fire({
                position: "top-end",
                title: 'Your Issue Has Been Created Succesfully!',
                timer: 1500,
                icon: 'success',
                showConfirmButton: false,
                customClass: 'sweetalert-lg'
              })

              //Limpiamos el form
              myForm.querySelector("#createIssueTitle").value = ""
              myForm.querySelector("#createIssueDescription").value = ""
              myForm.querySelector("#createIssueTypes").value = ""
              myForm.querySelector("#createIssueAssignDev").value = ""
              myForm.querySelector("#createIssuePriority").value = ""
        }
    }
    
}



//Function para mostrar issues :D
myIssuesBtn.onclick = () => {
    lsToObj()
    deleteAndCreate()
    
    let showIssueDiv = document.createElement("div") 

    showIssueDiv.className = "showIssueDiv"

    showIssueDiv.innerHTML= `
        <h1>My Issues</h1><br>
        <hr>
        <div class="showIssueRow">
            <p>Name</p>
            <p>Description</p>
            <p>Category</p>
            <p>Dev Assigned</p>
            <p>Priority</p>
        </div>
        <div class="issuesDiv" id="issuesDiv"></div>
    `

    let issueRow = showIssueDiv.querySelector("#issuesDiv")
    

    for (let obj in showIssuesArray) {
        console.log(showIssuesArray[obj].issueName)
        issueRow.innerHTML+=`
            <div class="issueRow">
            <p>${showIssuesArray[obj].issueName}</p>
            <p>${showIssuesArray[obj].issueDescription}</p>
            <p>${showIssuesArray[obj].issueCategory}</p>
            <p>${showIssuesArray[obj].issueAssigne}</p>
            <p>${showIssuesArray[obj].issuePriority}</p>
            </div>
        `
    }
    container.appendChild(showIssueDiv)
}


//Function transformar local storage a objs
function lsToObj () {
    const almacenados = JSON.parse(localStorage.getItem("listadeIssues"))

    showIssuesArray = []

    for (const objeto of almacenados) {
        showIssuesArray.push(new Issue(objeto))
    }
}

//Funcion para limpiar contenido del container main section
const deleteAndCreate = () => {
    if (container.children.length != 0) {
        container.innerHTML=""
    }
}