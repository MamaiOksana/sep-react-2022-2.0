import Joi, {options} from "joi";

const userValidator = Joi.object({

    name:Joi.string().regex(/^[a-zA-Zа-яА-яеіїІЇ]{1,15}$/).required().messages({
        'string.pattern.base':'повинно містити до 15 букв'
    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яеіїІЇ]{1,15}$/).required().messages({
        'string.pattern.base':'повинно містити до 15 букв'
    }),
    email:Joi.string().email({tlds:{allow: false}})
})

export {
    userValidator
}