const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("Conected!"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


// One to many / Approch 2
// Store a refrence to the child document inside parent


// Define schemas
const orderSchema = new Schema({
    item: String,
    price: Number,
})

const customerSchema = new Schema({
    name: String,
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let data = await Order.deleteMany({ _id: { $in: customer.orders } })
        console.log(data);
    }
})

// Define models
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to add a customer with orders
async function addData() {
    let order1 = new Order({
        item: "Pizza",
        price: 100
    });

    let cust1 = new Customer({
        name: "Garima"
    })

    cust1.orders.push(order1);

    await order1.save();
    await cust1.save();
}

addData()


const deleteCust = async () => {
    let data = await Customer.findByIdAndDelete('65c29ff287705afd65631539'); // Corrected
    console.log(data);
}
// deleteCust()