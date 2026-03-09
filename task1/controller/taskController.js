const getTask = (req, res) => 
    {
    res.json({
        id: 63,
        title: "My First API",
        description: "task details",
        status: "Assigned"
    });
};

const createTask = (req, res) => {
    const task = req.body;
    res.json({
        message: "API created successfully",
        task
    });
};

module.exports = {
    getTask,
    createTask
};