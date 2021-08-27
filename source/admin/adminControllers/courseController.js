const Course =require("../../../models/courses");


const allCourses = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    // const id = req.params.id;
    // if (!id) {
    //   return res.status(400).json({ message: "Lesson id required" });
    // }
    const doc = await Course.find();
    console.log(doc);
    res.json({ status: "OK", data: doc });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error getting course", error: e.message });
  }
};
  const addCourses = async (req, res) => {

    const Modal = req.model;
    const {title,description,photo}=req.body;
    
    if (!title) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    if (!req.user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    try {
      const course = await Course.create({
        title,
        description,
        photo,
        postBy:req.user
      });
    
      return res.status(201).send({ status: "course has beeen created",course:course });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        message: "Error to creating a course",
        error: e.message,
      });
    }
  };

  module.exports={addCourses,allCourses};