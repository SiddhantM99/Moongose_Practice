const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.insertMany([{name: "Siddhant",
//     email: "sid@gmail.com",
//     age: 48},{name: "Siddhant",
//     email: "sid@gmail.com",
//     age: 48}])
//     .then((data) => {
//         console.log(data);
//     });

// User.find({name: "Raghav"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

    // User.find({age: { $gt: 47}})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    User.deleteMany( {name: "Siddhant"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    // User.deleteOne( {name: "Siddhant"})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // User.findByIdAndUpdate("65dd6fe5a8c3a74a96fed025", {name: "Yash"}, {new: true})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // User.findOneAndUpdate({name: "Siddhant"}, {name: "Ishita"}, {new: true})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    // User.updateMany({name: "Siddhant"}, {age: 51})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // User.updateOne({name: "Siddhant"}, {age: 51})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // User.findById("65dd65d9e43188759f721649")
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    // User.findOne({age: {$gt: 45}})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    // User.find({age: {$gt: 45}})
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });


    // User.find()
    // .then((res) => {
    //     console.log(res[0].name);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

// const user1 = new User({
//     name: "Siddhant",
//     email: "sid@gmail.com",
//     age: 48,
// });

// user1.save();

// const user2 = new User({
//     name: "Raghav",
//     email: "ramd@gmail.com",
//     age: 28,
// });

// user2.save()
// .then((res) => {
//     console.log(res);
// }
// )
// .catch((err) => {
//     console.log(err);
// });