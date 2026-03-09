const getStudents = (req, res) => {
    res.json([
        { id: 1, name: "Akshith", branch: "Computer Science" },
        { id: 2, name: "Rakshith", branch: "Electrical and Electronics" }
    ]);
};

const getCourses = (req, res) => {
    res.json([
        { id: 101, course: "Data Analytics" },
        { id: 102, course: "DBMS" }
    ]);
};

const getTeachers = (req, res) => {
    res.json([
        { id: 1, name: "Prof. Varun", subject: "Mathematics" },
        { id: 2, name: "Prof. Tarun", subject: "Physics" }
    ]);
};

module.exports = {
    getStudents,
    getCourses,
    getTeachers
};