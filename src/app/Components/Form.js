"use client"

import { useState } from 'react';
import styles from '../styles/Form.module.css';
import CustomAlert from './CustomAlert';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowAlert(true);
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {showAlert && <CustomAlert message="Details submitted" onClose={closeAlert} />}
    </>
  );
};

export default Form;
