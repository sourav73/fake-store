import React from 'react';
import styles from './FloatingForm.module.scss';

const FloatingForm = ({
  type,
  label,
  name,
  value,
  handleChange,
  handleBlur
}) => {
  return (
    <div className={styles.form}>
      <input
        type={type}
        placeholder=" "
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="">
        <span>{label}</span>
      </label>
    </div>
  );
};

export default FloatingForm;
