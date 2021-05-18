var mongoose = require("mongoose");

var EncrypTech= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxlength: 32,
            trim: true,
            unique:true
        },
        Keys:{
            type: String,
            unique:true,
            maxlength:5,

        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000
          },

    }
)
