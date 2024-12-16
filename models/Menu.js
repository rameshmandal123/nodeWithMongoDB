const mongoose = require("mongoose");

// create menu schemaa
const MenuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    price:{
        type: Number,
        default: 0,
    },
    taste:{
        type: String
    },
    is_dring:{
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String]
    },
    num_sales:{
        type: Number,
        default: 0
    },
    averageRating:{
        type: Number,
        min: 0,
        max:5,
        default: 0
    },
    comments: [
        {
            person: {
                type: String, 
                required: true
            },
            comment: {
                type: String, 
                required: true
            },
            rating: {
                type: Number, 
                min: 0,
                max: 5,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now 
            }
        }
    ]
});

// calculate avera
MenuItemSchema.methods.calculateAverageRating = ()=>{
    if(this.comments.length===0){
        this.averageRating = 0;
        return;
    }

    const totalRating = this.comments.reduce((acc,curr)=>acc+curr.rating,0);
    this.averageRating = totalRating/this.comments.length;
}

// Hook to update averageRating before saving
MenuItemSchema.pre('save', function (next){
    this.calculateAverageRating();
    next();
});

//create model for MenuItem using mongoose
const MenuItem = mongoose.model('MenuItem',MenuItemSchema);
module.exports = MenuItem;
