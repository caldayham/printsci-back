const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        organization: {type: String},
        selfDescription: {type: String},
        img: {type: String},
        hashedSaltedPass: { type: String, required: true },
        salt: {type: String, required: true},
        profiles: [
            {
                firstName: {type: String},
                lastName: {type: String},
                role: {type: String},
            }
        ],
        cart: [
            {
                productId: {type: String},
                quantity: {type: Number}
            }
        ],
        orderIds: {type: Array},
        reviewIds: {type: Array },
        questionIds: {type: Array},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);