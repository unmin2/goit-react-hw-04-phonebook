import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { contactform } from './ContactForm.styled';

function ContactForm({ onSubmitData }) {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitData(formData);
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={contactform} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          maxLength="12"
          pattern="^\+[\d]{1,11}$"
          title="Please enter a phone number starting with '+' and up to 12 digits."
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;
