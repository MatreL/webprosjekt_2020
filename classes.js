class Category {
    constructor(color, title){
        this.height = 100;
        this.width = 100;
        this.color = color;
        this.title = title;
    }
}

class Member {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

class Task {
    constructor(title, deadline, member){
            this.title = title;
            this.deadline = deadline;
            this.member = member;
    }
}