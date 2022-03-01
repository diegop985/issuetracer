
//Declaración Issue - Ticket

class Issue {
    constructor({
        issueId,
        issueName,
        issueDescription,
        issueCategory,
        issuePriority,
        issueStatus = "none",
        issueAssigne,
        issueProject,
        issueHistory = []
    }) {
        this.issueId = issueId
        this.issueName = issueName
        this.issueDescription = issueDescription
        this.issueCategory = issueCategory
        this.issuePriority = issuePriority
        this.issueStatus = issueStatus
        this.issueAssigne = issueAssigne
        this.issueProject = issueProject
        this.issueHistory = issueHistory
    }
    //pending methods
    //issueDescript debe ser un objeto :D
}


/* Status accepted:

none
open
in progress
review
done

re-opened
 */

const issue1 = new Issue({
    issueName: "Complete classes and biz logic",
    issueDescription: "Hi Diego, please work on the bussisnes logic for the Bug Tracker:",
    issueCategory: "Task",
    issueAssigne: diego,
    issueId: "01",
    issuePriority: "High",
    issueStatus: "In Progress",
    // issueProject: project1,
    issueHistory: "XX/XX/XXXX X person created this issue :D"
})