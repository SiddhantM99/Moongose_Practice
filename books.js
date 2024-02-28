const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
   
   title: 
   {
    type: String,
required: true,
maxLength: 20,},

author: {
    type: String,
},
prices: {
    type: Number,
    min: 1,
},
discount : {
    type: Number,
    default: 0,
},
category: {
    type: String,
    enum: ["fiction", "non-fiction"],
},
genres: [String],
});

const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate("65de95cfc163207e704561db", {prices: 1000}, {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

// Book.insertMany([{title: "MARVEL COMICS",
//     author: "Stan Lee",
// prices: 500,
// category: "fiction",
// genres: ["superheroes", "science fiction"]}])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// Book.insertMany([{title: "MATHEMATICS XII",
//     author: "RD sharma",
//     prices: 1000},{title: "MATHEMATICS XII",
//     author: "RS Aggarwal"}])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
