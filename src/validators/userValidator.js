import Joi, {options} from "joi";

const userValidator = Joi.object({
    id:Joi.number().min(11).max(20).required().messages({
        'number.min':'вводити з 10',
        'number.max':'вводити до 20'
    }),
    name:Joi.string().regex(/^[a-zA-Zа-яА-яеіїІЇ]{1,15}&/).required().messages({
        'string.pattern.base':'повинно містити до 15 букв'
    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яеіїІЇ]{1,15}&/).required().messages({
        'string.pattern.base':'повинно містити до 15 букв'
    }),
    email:Joi.string().regex(/^[a-zA-Zа-яА-яеіїІЇ@]{1,25}&/).required().messages({
        'string.pattern.base':'повинно містити до 25 букв та символ - "@"'
    })
})

export {
    userValidator
}