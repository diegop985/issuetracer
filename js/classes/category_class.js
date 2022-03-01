//Declaración catergories


class Category {
    constructor({
        nameCategory,
        colorCategory
    }) {
        this.nameCategory = nameCategory,
        this.colorCategory = colorCategory
    }
} 

const bug = new Category ({
    nameCategory: "Bug",
    colorCategory: "red",
})

const improvement = new Category ({
    nameCategory: "Improvement",
    colorCategory: "orange"
})

const newFeature = new Category ({
    nameCategory: "New Feature",
    colorCategory: "pruple"
})

const task = new Category ({
    nameCategory: "Task",
    colorCategory: "hard-blue"
})

const subTask = new Category ({
    nameCategory: "Sub-Task",
    colorCategory: "soft-blue"
})