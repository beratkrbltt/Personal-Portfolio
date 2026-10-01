import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(30, 'Name must be 30 characters or less'),

    surname: yup
        .string()
        .trim()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(30, 'Last name must be 30 characters or less'),

    email: yup
        .string()
        .trim()
        .email('Please enter a valid email address')
        .required('Email is required')
        .max(100, 'Email address is too long'),

    message: yup
        .string()
        .trim()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be 1000 characters or less'),

    term: yup
        .boolean()
        .oneOf([true], 'Please accept the terms to continue'),
});