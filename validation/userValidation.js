const yup = require("yup")

const userSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
  
})

module.exports = userSchema;