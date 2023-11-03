import { useState } from 'react'

export default function Validation() {
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    if (name === "email") {
      
      if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
        setError({ ...error, [name]: "Укажите email правильно" });
        setIsValid(false);
      } else {
        setError({ ...error, [name]: e.target.validationMessage });
        setIsValid(formValue.password && formValue.password.length >= 8);
      }
    } else if (name === "password") {
      if (value.length < 8) {
        setError({ ...error, [name]: "В пароле должно быть не меньше 8 знаков" });
        setIsValid(false);
      } else {
        setError({ ...error, [name]: e.target.validationMessage });
        setIsValid(formValue.email && /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i.test(formValue.email));
      }
    } else {
      setError({ ...error, [name]: e.target.validationMessage });
      setIsValid(false);
    }
  };

  function resetValidation(formValue = {}, error = {}) {
    setFormValue(formValue);
    setError(error);
    setIsValid(false);
  }

  function setData(nameValue, emailValue) {
    setFormValue({ name: nameValue, email: emailValue });
    setError({});
    setIsValid(false);
  }

  function setInput(input) {
    setFormValue({ movie: input });
    setError({});
    setIsValid(false);
  }

  return { formValue, error, handleChange, resetValidation, setData, setInput, isValid };
}