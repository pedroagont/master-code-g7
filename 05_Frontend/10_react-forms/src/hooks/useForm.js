import { useState } from 'react';

function useForm(callback) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  }

  return { formData, handleChange, handleSubmit }
}

export default useForm;
