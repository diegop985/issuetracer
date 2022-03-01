//Declaración de Clase Project

class Project {
    constructor({
        projectName,
        projectKey,
        projectCategory,
        projectIssues = [],
        projectUsers = [],
        projectOwner,
        projectHistory = []
    }) {
        this.projectName = projectName
        this.projectKey = projectKey
        this.projectCategory = projectCategory
        this.projectIssues = projectIssues
        this.projectUsers = projectUsers
        this.projectOwner = projectOwner
        this.projectHistory = projectHistory
    }
    //pending method to get the key, first letters
}


const project1 = new Project({
    projectName: "Bug Tracker",
    projectKey: "BT",
    projectCategory: "Mannaged Develop Team",
    projectOwner: "Diego A Patiño S",
    // projectUsers: [diego, new User({name:"Testing Usr"})],
    //projectIssues:,
    //projectHistory:,
})
