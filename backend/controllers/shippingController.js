import shipping from '../models/shippingModel.js';
const shippingController = async(req, res) => {
    try {
            const address = await shipping.create(req.body);
            if(address) {
                res.status(201).json(address);
            }
        }
     catch(error) {
        res.send(400).json({
            error: "server error"
        })
        console.log(error);
    }
}

export { shippingController };