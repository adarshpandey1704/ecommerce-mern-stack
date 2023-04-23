import Category from '../models/categoryModel.js';

const categoryController = async(req, res) => {
    try {
        const categoryExists = await Category.findOne(req.body);
        if(categoryExists) {
            res.status(400).json({
                result: "category already exists"
            })
        } else {
            const category = await Category.create(req.body);
            if(category) {
                res.status(201).json({
                    _id: category._id,
                    name: category.name,
                    createdAt: category.createdAt
                })
            }
        }
    } catch(error) {
        res.send(400).json({
            error: "server error"
        })
        console.log(error);
    }
}
export {categoryController };