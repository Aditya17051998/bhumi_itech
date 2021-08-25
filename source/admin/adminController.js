const bcrypt=require('bcryptjs');

const changeUserPassword = async (req, res) => {
    const Modal = req.model;
    const { oldPassword, newPassword } = req.body;
    console.log(oldPassword,newPassword)
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    if (!req.user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    try {
      const user = await Modal.findById(req.user._id).exec();
    //   const match = await user.checkPassword(oldPassword);
    const match=await bcrypt.compare(req.body.oldPassword,user.password);
      if (!match) {
        return res.status(401).json({ message: "incorrect old password" });
      }
      const doc = await Modal.findByIdAndUpdate(req.user._id);
      if (doc) {
        const hash=await bcrypt.hash(req.body.newPassword,12);
        doc.password =hash;
        await doc.save();
      }
      res.json({ status: "OK", message: "Password Changed Successfully" });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        message: "Error fetching user object",
        error: e.message,
      });
    }
  };

  module.exports={changeUserPassword};