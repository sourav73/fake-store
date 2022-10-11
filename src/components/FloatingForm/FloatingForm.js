import React from 'react';
import styles from './FloatingForm.module.scss';

const FloatingForm = ({
  type,
  label,
  name,
  value,
  handleChange,
  className
}) => {
  return (
    <div className={`${styles.form} ${className}`}>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder=" "
          value={value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder=" "
          name={name}
          value={value}
          onChange={handleChange}
        />
      )}

      <label>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default FloatingForm;
