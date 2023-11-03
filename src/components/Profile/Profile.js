import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import Validation from "../../hooks/Validation";

const Profile = ({
  onLogout,
  isEditing,
  errorMessageProfile,
  buttonDisabled,
  isLoading,
  setIsEditing,
  setButtonDisabled,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [lastName, setLastName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [lastEmail, setLastEmail] = useState(currentUser.email);
  const { formValue, error, setData, handleChange } = Validation();

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  function handleEditClick() {
    setIsEditing(true);
    setData(currentUser.name, currentUser.email);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi
      .editProfile(formValue)
      .then(() => {
        setLastName(name);
        setLastEmail(email);
      })
      .then(() => {
        alert("Изменения сохранены");
        setButtonDisabled(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (
      formValue.name === currentUser.name &&
      formValue.email === currentUser.email
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [formValue.name, formValue.email, currentUser.name, currentUser.email]);

  function handleControl(e) {
    handleChange(e);
  }

  return (
    <main className="profile">
      <h2 className="profile__hello">Привет, {currentUser.name}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input">
          <label htmlFor="acc-name" className="profile__lable">
            Имя
          </label>
          <input
            className="profile__intel"
            name="name"
            id="acc-name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            value={isEditing ? formValue.name : currentUser.name}
            onChange={handleControl}
            disabled={isEditing ? false : true}
          ></input>
          <span className="name-field-error profile__span">{error.name}</span>
        </div>
        <div className="profile__input">
          <label htmlFor="acc-email" className="profile__lable">
            E-mail
          </label>
          <input
            className="profile__intel"
            id="acc-email"
            name="email"
            type="text"
            required
            minLength="2"
            maxLength="40"
            value={isEditing ? formValue.email : currentUser.email}
            onChange={handleControl}
            disabled={isEditing ? false : true}
          ></input>
          <span className="name-field-error profile__span">{error.name}</span>
        </div>
        <h2 className="profile__error">{errorMessageProfile}</h2>
        <button
          type="submit"
          className={`profile__save ${
            isEditing ? "profile__save_active" : "profile__save"
          } ${buttonDisabled ? "profile__save" : ""}`}
          disabled={isEditing && buttonDisabled ? true : false}
        >
          {" "}
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
        <button
          type="button"
          className="profile__edit"
          onClick={handleEditClick}
        >
          Редактировать
        </button>
        <button className="profile__quit" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
};

export default Profile;
