import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator";
import {usersService} from "../../services";

const UserForm = () => {

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(userValidator)});

    const submit = async (user) => {
        const {data} = await usersService.create(user);
        console.log(data)

    }

    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'id'}{...register('id', {
        //         valueAsNumber:true,
        //         min: {value:11, message:'з 11'},
        //         max: {value:20, message:'числа до 20'}
        //        })}/>
        //     {errors.id && <span>{errors.id.message}</span>}
        //
        //     <input type="text" placeholder={'name'}{...register('name', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яеіїІЇ]{1,15}&/,
        //             message:'повинно містити до 15 букв'
        //         }
        //     })}/>
        //     {errors.name && <span>{errors.name.message}</span>}
        //
        //     <input type="text" placeholder={'username'}{...register('username', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яеіїІЇ]{1,15}&/,
        //             message:'повинно містити до 15 букв'
        //     }})}/>
        //     {errors.username && <span>{errors.username.message}</span>}
        //     <input type="text" placeholder={'email'}{...register('email',{
        //         pattern:{
        //             value: /^[a-zA-Zа-яА-яеіїІЇ@]{1,25}&/,
        //             message: 'повинно містити до 25 букв та символ - "@"'
        //     }})}/>
        //     {errors.email && <span>{errors.email.message}</span>}
        //     <button>Save</button>
        // </form>
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'id'}{...register('id')}/>
        {errors.id && <span>{errors.id.message}</span>}

        <input type="text" placeholder={'name'}{...register('name')}/>
        {errors.name && <span>{errors.name.message}</span>}

        <input type="text" placeholder={'username'}{...register('username')}/>
        {errors.username && <span>{errors.username.message}</span>}

        <input type="text" placeholder={'email'}{...register('email')}/>
        {errors.email && <span>{errors.email.message}</span>}

        <button disabled={isValid}>Save</button>
    </form>
    );
};

export {UserForm};