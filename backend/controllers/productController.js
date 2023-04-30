import formidable from 'formidable';
import _ from 'lodash';
import fs from 'fs';
import Product from '../models/productModel.js';
import User from '../models/userModel.js'

// Creating a prodcut api

const createProductController = async(req, res) => {
    try {
      let form = new formidable.IncomingForm();
      form.keepExtensions = true;
      form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        let product = new Product(fields);
        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should less tham 1 Mb"
                })
            }
           product.photo.data = fs.readFileSync(files.photo.filepath);
           product.photo.contentType = files.photo.mimetype;
        }
        product.save();
        if(product) {
            return res.status(200).json({
                _id: product._id,
                name: product.name,
                description: product.description,
                result: "uploaded successfully"
            })
        };
      })
    } catch(err) {
        console.log('err', err);
    }
};

// getAllProducts Api

const getProducts = async(req, res) => {
    try {
      const products = await Product.find({}).select(['-photo']);
      console.log('product', products);
        return res.status(200).json(products);
    } catch(error) {
        res.json({
            result: error
        })
    }
}

// getProductById

const getProductById = async(req, res) => {
    try{
      const product = await Product.findById(req.params.productId);
      if(!product) {
        return res.status(404)
      } else {
        return res.status(200).json(product);
      }
    } catch(error) {
        return res.json({
            result: error
        })
    }
}

// update a signle product

const updateProductById = async(req, res) => {
   try{
     let product = await Product.findById(req.params.productId);
     let user = await User.findById(req.params.userId);
     let form = new formidable.IncomingForm();
       form.keepExtensions = true;
       form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        const {name, description, category, price, quantity, shipping} = fields;
        if(!name || !description || !category || !price || !quantity || !shipping ) {
            return res.status(400).json({
                error: "All fields are required"
            })
        }
        if(user.role !== 1) {
            return res.json({
                result: "Permission denied"
            })
        } else {
            // It updates the required data inside a product
            product = _.extend(product, fields)
        }
        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should less tham 1 Mb"
                })
            }
           product.photo.data = fs.readFileSync(files.photo.filepath);
           product.photo.contentType = files.photo.mimetype;
        }
        product.save();
        if(product) {
            return res.status(200).json({
                _id: product._id,
                name: product.name,
                description: product.description,
                result: "uploaded successfully"
            })
        };
      })
   } catch(error) {
    return res.json({
        result: error
    })
   }
}

export {createProductController, getProducts, getProductById, updateProductById};