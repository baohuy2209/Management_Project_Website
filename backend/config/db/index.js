const mongoose = require("mongoose");
const Role = require("../../models/role.model");
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
    initial();
  } catch (err) {
    console.log(err);
  }
}
function initial() {
  Role.estimatedDocumentCount()
    .then((count) => {
      if (count === 0) {
        const admin = new Role({ name: "Admin" });
        admin
          .save()
          .then(() => {
            console.log("Admin role created");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
        const projectManager = new Role({ name: "ProjectManager" });
        projectManager
          .save()
          .then(() => {
            console.log("Project Manager role created");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
        const customer = new Role({ name: "Customer" });
        customer
          .save()
          .then(() => {
            console.log("Customer role created");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
        const employee = new Role({ name: "Employee" });
        employee
          .save()
          .then(() => {
            console.log("Employee role created");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
        const visitors = new Role({ name: "Visitor" });
        visitors
          .save()
          .then(() => {
            console.log("Visitors role created");
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { connectDB };
