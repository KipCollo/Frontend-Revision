const mongoose = require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/playground")
   .then(()=>{console.log("connected to db..")})
   .catch(err=> console.error("Couldnt connect..",err))

const courseSchema = new mongoose.Schema(
    {
        name: String,
        autor:String,
        tags:[String],
        date:{type:Date, default:Date.now},
        isPublished: Boolean
    }
)

const Course = mongoose.model("Course", courseSchema);

async function createCourse(){
const course = new Course(
    {
        name:"React",
        autor:"Collins Kipkosgei",
        tags:["node " ,"frontend"],
        isPublished: true

    }
)


const result = await course.save()
console.log(result)
}

createCourse();