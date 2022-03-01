//Objeto que llevará el record de acciones en project e issues

class History {
    constructor({
        typeEvent,
        flagEvent,
        actionEvent,
        dateEvent,
        assignedDev,
    
    }) {
        this.typeEvent = typeEvent,
        this.flagEvent = flagEvent,
        this.actionEvent = actionEvent,
        this.dateEvent = dateEvent,
        this.assignedDev = assignedDev
    }
    //pending methods
    
} 

/* Workflow:
none -> open = created
open -> in progress = working on  
in progress -> review = been reviewed
review -> in progress = correction
review -> done = completed

re-opened
 */

const history1 = new History({
    flagEvent: "Create new button for API integration",
    typeEvent: task,
    actionEvent: "created",
    dateEvent: "17/02/2022",
    assignedDev: "Diego Patiño"
})
