//Categories
const categoryCtrl = async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "categories created",
        });
    } catch (error) {
        res.json(error.message);
    }
};


//Categories/:id
const categoryIdCtrl =  async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "categories route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Delete
const categoryDeleteCtrl =  async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "delete categories route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

//Update
const categoryUpdateCtrl =  async (req, res) =>{
    try {
        res.json({
            status: "success",
            data: "update categories route",
        });
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = {
    categoryCtrl,
    categoryIdCtrl,
    categoryDeleteCtrl,
    categoryUpdateCtrl,
};
