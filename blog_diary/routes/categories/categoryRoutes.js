const express = require('express');
const { categoryCtrl, categoryIdCtrl, categoryDeleteCtrl, categoryUpdateCtrl } = require('../../controllers/categories/categoryCtrl');


const categoryRouter = express.Router();

//Post/api/v1.0.0/categories
categoryRouter.post('/', categoryCtrl);


//Get/api/v1.0.0/categories/:id
categoryRouter.get("/:id", categoryIdCtrl);

//Delet/api/v1.0.0/categories/:id
categoryRouter.delete("/:id", categoryDeleteCtrl);

//Put/api/v1.0.0/categories/:id
categoryRouter.put("/:id", categoryUpdateCtrl);

module.exports = categoryRouter;
