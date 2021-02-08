const moongoose = require("moongoose");
const {schema} = moongoose;

const Book = new schema({

    title : {type : String, required: true},
    author : {type : String, required: true },
    

}

