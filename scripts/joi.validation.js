import joi from "joi";

const schema = joi.object({
    name: joi.string().min(5).max(10).required(),
    age: joi.number().integer().min(1).max(85).required(),
    amount: joi.number()
})

const payload = {
    name: "princeko",
    age: 80,
    amount: 5000
}

const {error, value} = schema.validate(payload);
if(error) {
    console.log(error.message)
}else{
    console.log(value)
}