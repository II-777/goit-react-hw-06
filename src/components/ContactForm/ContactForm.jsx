import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { useState } from 'react';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required('Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Invalid name format"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required('Required')
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Invalid phone format"),
});

export default function ContactForm({ onAdd }) {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field
          className={css.field}
          type="text"
          name="name"
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
        />
        <ErrorMessage name="name" component="div" className={css.error} />
        {isNameFocused && ( // Show message only when focused
          <div style={{ fontSize: '12px', color: 'gray', marginTop: '5px', marginBottom: '5px' }}>
            Name may include letters, apostrophes, dashes, and spaces, and must be 3 to 50 characters long. For example: Adrian, Jacob Mercer.
          </div>
        )}
        <label htmlFor="number">Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          onFocus={() => setIsNumberFocused(true)}
          onBlur={() => setIsNumberFocused(false)}
        />
        <ErrorMessage name="number" component="div" className={css.error} />
        {isNumberFocused && ( // Show message only when focused
          <div style={{ fontSize: '12px', color: 'gray', marginTop: '5px', marginBottom: '10px' }}>
            Phone numbers may contain up to 10 digits only. For example: +123-333-1234 or 123-22-22.
          </div>
        )}

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
