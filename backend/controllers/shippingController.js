import shipping from '../models/shippingModel.js';
const shippingController = async(req, res) => {
    try {
        console.log('heyyyyyyyyyyyyyyyyyyyyy');
        const { name, address,email, mobile,landmark,pincode} = req.body;
        console.log('name', name, address);
            const data = await shipping.create({
                name: name,
                address: address,
                email: email,
                mobile: mobile,
                landmark: landmark,
                pincode: pincode
            });
                return res.status(201).json(data);
        }
     catch(error) {
        res.send(400).json({
            error: "server error"
        })
        console.log(error);
    }
}

export { shippingController };