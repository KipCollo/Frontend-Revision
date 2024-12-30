const mongoose =require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(console.log("Connected to db.."))
  .catch((err)=>{console.log("error in", err)})

const projectSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    isPublished: Boolean,
    age: Number
})

const Project = mongoose.model('Project', projectSchema)
const customer = new Project()

async function returnD() {

  const query = await Project.find()
  console.log(query)

}
returnD()