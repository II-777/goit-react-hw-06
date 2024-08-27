import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

// Validation schema for the form
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

// ContactForm Component
export default function ContactForm() {
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    }));
    resetForm();
  };

  // Initial values for the form
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
        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          name="name"
          className={css.field}
          type="text"
          placeholder="John Doe"
          autoComplete="name"
        />
        <ErrorMessage name="name" component="div" className={css.error} />
        <div style={{ fontSize: '12px', color: 'gray', marginTop: '5px', marginBottom: '5px' }}>
          Name may include letters, apostrophes, dashes, and spaces, and must be 3 to 50 characters long. For example: Adrian, Jacob Mercer.
        </div>
        
        {/* Number Field */}
        <label htmlFor="number">Number</label>
        <Field
          id="number"
          name="number"
          className={css.field}
          type="text"
          placeholder="+123-333-4444"
          autoComplete="tel"
        />
        <ErrorMessage name="number" component="div" className={css.error} />
        <div style={{ fontSize: '12px', color: 'gray', marginTop: '5px', marginBottom: '10px' }}>
          Phone numbers may contain up to 10 digits only. For example: +123-333-1234 or 123-22-22.
        </div>

        {/* Submit Button */}
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
