import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { sendContactMessage, resetContactState } from '../redux/contactSlice';
import type { ContactFormValues } from '../types/Type';
import { registerFormSchemas } from '../schemas/FormSchemas';

import { HiArrowUpRight } from 'react-icons/hi2';
import '../css/Contact.css';

function Contact() {
    const dispatch = useDispatch<AppDispatch>();

    const { loading, success, error } = useSelector(
        (state: RootState) => state.contact
    );
    useEffect(() => {
        return () => {
            dispatch(resetContactState());
        };
    }, [dispatch]);

    const formik = useFormik<ContactFormValues>({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            message: '',
        },
        validationSchema: registerFormSchemas,
        onSubmit: async (values, { resetForm }) => {
            const result = await dispatch(sendContactMessage(values));

            if (sendContactMessage.fulfilled.match(result)) {
                resetForm();
            }
        },
    });
    return (
        <section className="contact">
            <div className="contact__inner">
                <span className="eyebrow">
                    <span className="eyebrow-tag">03</span>
                    <span className="eyebrow-line" />
                    CONTACT
                </span>
                <h2 className="contact__title">
                    Say hello<span>.</span>
                </h2>
                <p className="contact__text">
                    Always happy to connect, exchange ideas, and talk about the web.
                </p>
                <div className="contact__grid" id="contact">
                    <form className="form" onSubmit={formik.handleSubmit} id="contact">
                        <div className="form__row">
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <span className="field__error">
                                        {formik.errors.name}
                                    </span>
                                )}
                            </div>

                            <div className="field">
                                <label htmlFor="surname">Surname</label>
                                <input
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    placeholder="Your surname"
                                    value={formik.values.surname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.surname && formik.errors.surname && (
                                    <span className="field__error">
                                        {formik.errors.surname}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <span className="field__error">
                                    {formik.errors.email}
                                </span>
                            )}
                        </div>

                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Write a message..."
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <span className="field__error">
                                    {formik.errors.message}
                                </span>
                            )}
                        </div>

                        {success && (
                            <p className="form__success">
                                Your message has been sent successfully.
                            </p>
                        )}
                        {error && (
                            <p className="form__error">
                                {error}
                            </p>
                        )}
                        <button type="submit" className="form__button" disabled={loading} >
                            <span>
                                {loading ? 'Sending...' : 'Send Message'}
                            </span>
                            {!loading && <HiArrowUpRight />}
                        </button>
                    </form>
                    <aside className="info">
                        <p className="info__label">Direct email</p>
                        <a className="info__email" href="mailto:berattkarabulutt@gmail.com">
                            berattkarabulutt@gmail.com
                        </a>
                        <p className="info__label info__label--spaced">
                            Elsewhere
                        </p>
                        <ul className="info__links">
                            <li>
                                <a href="https://github.com/beratkrbltt" target="_blank" rel="noreferrer" >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/berat-karabulut-2791bb277/?isSelfProfile=true" target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Contact;