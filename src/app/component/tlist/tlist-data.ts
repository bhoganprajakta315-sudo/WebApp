export class Teacher {
    image: string;
    uname: string;
    gmail: string;
    tclass: string;
    subject: string;

    constructor(image: string, uname: string, gmail: string, tclass: string, subject: string) {
        this.image = image;
        this.uname = uname;
        this.gmail = gmail;
        this.tclass = tclass;
        this.subject = subject;
    }
}

export class TableRows {
    fname: string;
    lname: string;
    uname: string;

    constructor(fname: string, lname: string, uname: string) {
        this.fname = fname;
        this.lname = lname;
        this.uname = uname;
    }
}

// Example Data
export const TopSelling: Teacher[] = [
    new Teacher('assets/images/users/user4.jpg', 'Mahesh Bhandigre', 'mahesh@gmail.com', 'mca A', 'MAD'),
    new Teacher('assets/images/users/user4.jpg', 'V Redekar', 'redekar@gmail.com', 'mca B', 'WT'),
    new Teacher('assets/images/users/user4.jpg', 'vaibhav Patil', 'vaibhav21@gmail.com', 'mca C', 'CC'),
    new Teacher('assets/images/users/user3.jpg', 'mayuri kagwade', 'kagwademayuri12@gmail.com', 'mca A', 'DA')
];

export const Employee: TableRows[] = [
    new TableRows("Mark", "Otto", "@mdo"),
    new TableRows("Jacob", "Thornton", "@fat"),
    new TableRows("Larry", "the Bird", "@twitter")
];
