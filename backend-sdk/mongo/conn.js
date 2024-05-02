import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://chakka:chakka@cluster0.gazqqyg.mongodb.net/?retryWrites=true&w=majority";

export const connect = (callBack) => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      return callBack(err);
    });
};

