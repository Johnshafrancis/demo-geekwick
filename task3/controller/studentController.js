const students = [
    { id: 1, studentName: "Rahul", branchName: "CSE", collegeName: "ATME" },
    { id: 2, studentName: "Anita", branchName: "ECE", collegeName: "ATME" }
];

const getAllStudents = (req, res) => {
    res.json(students);
};

const getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

const createStudent = (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.json({
        message: "Student created successfully",
        student: newStudent
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};