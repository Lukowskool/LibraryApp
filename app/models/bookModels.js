const moongoose = require("moongoose");
const {schema} = moongoose;

const Book = new schema({

    title : {type : String, required: true},
    author : {type : String, required: true },
    borrowed : {type : Boolean, required: false},
    id :{ type : String,  required: true}

},
    {
        timeStamp: true
    }


    );
module.exports = moongoose.model("books", Book);

