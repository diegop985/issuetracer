// Delaración clase Usuario

class User {
    constructor ({
        name,
        lastname,
        city,
        country,
        email,
        personal_date,
        twitter,
        github,
        slack,
        assignedProjects = [],
        assignedIssues = [],
        issuesCompleted = [],
        projectsHistory = [],
        usr_role,
        manager
    }) {
        this.name = name,
        this.lastname = lastname,
        this.city = city,
        this.country = country,
        this.email = email,
        this.personal_date = personal_date,
        this.social = {
            twitter,
            github,
            slack
        },
        this.github = github,
        this.slack = slack,
        this.assignedProjects = assignedProjects,
        this.assignedIssues = assignedIssues,
        this.issuesCompleted = issuesCompleted,
        this.projectsHistory = projectsHistory,
        this.usr_role = usr_role,
        this.manager = manager
    }
        
}

const diego = new User ({
    name: "Diego",
    lastname: "Patiño",
    city: "Bogotá D.C",
    country: "Colombia",
    email: "diegops985@gmail.com",
    personal_date: "12/34/1990",
    usr_role: "admin",
    manager: "Diego ADMIN",
    twitter: "@diegops9",
    // assignedProjects: project1,
    // assignedIssues: issue1
    //issuesCompleted: if issues.status == completed,
    //projectsHistory: if project.status == finished,
    
})