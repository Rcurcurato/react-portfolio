import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);
    };

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 center-content'>
                        <div className='contactForm'>
                            <h1 className='contact-header'>Contact Me</h1>
                            <h1>Questions or Concerns?</h1>
                            <h3>Feel free to reach out
                                by filling out the form below.
                            </h3>
                            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <input
                                            type='text'
                                            name='name'
                                            {...register('name', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Name'
                                        ></input>
                                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    </div>
                                    <div className='col-6'>
                                        <input
                                            type='email'
                                            name='email'
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            className='form-control formInput'
                                            placeholder='Email address'
                                        ></input>
                                        {errors.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                </div>
                                <div className='row formRow'>
                                    <div className='col'>
                                        <input
                                            type='text'
                                            name='subject'
                                            {...register('subject', {
                                                required: { value: true, message: 'Please enter a subject' },
                                                maxLength: {
                                                    value: 75,
                                                    message: 'Subject cannot exceed 75 characters'
                                                }
                                            })}
                                            className='form-control formInput'
                                            placeholder='Subject'
                                        ></input>
                                        {errors.subject && (
                                            <span className='errorMessage'>{errors.subject.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className='row formRow'>
                                    <div className='col'>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            {...register('message', {
                                                required: true
                                            })}
                                            className='form-control formInput'
                                            placeholder='Message'
                                        ></textarea>
                                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                </div>
                                <button className='submit-btn' type='submit'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;