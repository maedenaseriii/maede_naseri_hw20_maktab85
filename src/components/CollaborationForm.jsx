import React from "react";
import useInput from "../hooks/use-input";
import "./CollaborationForm.css";

const nameValidation = (value) =>
  value.trim() !== "" && value.length > 3 && value.match(/^[a-zA-Z]*$/);
const emailValidation = (value) =>
  value.trim() !== "" &&
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
const collabrationPosValidation = (value) => value.trim() !== "";
const phoneNumValidation = (value) =>
  value.trim() !== "" && value.length == 11 && value.match(/^09/);
const duffelBagValiddation = (value) => value.trim() !== "";

const CollaborationForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValue,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(nameValidation);
  const {
    value: emailValue,
    isValid: emailIsValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidation);
  const {
    value: collabrationPosValue,
    isValid: collabrationPosIsValue,
    hasError: collabrationPosHasError,
    valueChangeHandler: collabrationPosChangeHandler,
    inputBlurHandler: collabrationPosBlurHandler,
    reset: resetCollabrationPos,
  } = useInput(collabrationPosValidation);
  const {
    value: phoneNumValue,
    isValid: phoneNumIsValue,
    hasError: phoneNumHasError,
    valueChangeHandler: phoneNumChangeHandler,
    inputBlurHandler: phoneNumBlurHandler,
    reset: resetPhoneNum,
  } = useInput(phoneNumValidation);
  const {
    value: duffelBagValue,
    isValid: duffelBagIsValue,
    hasError: duffelBagHasError,
    valueChangeHandler: duffelBagChangeHandler,
    inputBlurHandler: duffelBagBlurHandler,
    reset: resetdDuffelBag,
  } = useInput(duffelBagValiddation);

  let formIsValid = false;
  if (
    firstNameIsValue &&
    emailIsValue &&
    collabrationPosIsValue &&
    phoneNumIsValue &&
    duffelBagIsValue
  ) {
    formIsValid = true;
  }
  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const collabrationPosClasses = collabrationPosHasError
    ? "form-control invalid"
    : "form-control";
  const phoneNumClasses = phoneNumHasError
    ? "form-control invalid"
    : "form-control";
  const duffelBagClasses = duffelBagHasError
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("submitted");
    console.log(
      firstNameValue,
      emailValue,
      collabrationPosValue,
      phoneNumValue,
      duffelBagValue
    );

    resetFirstName();
    resetEmail();
    resetCollabrationPos();
    resetPhoneNum();
    resetdDuffelBag();
  };

  return (
    <form onSubmit={submitHandler} className="control-group">
      <div className={firstNameClasses}>
        <label htmlFor="name"> نام *</label>
        <input
          type="text"
          id="name"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameHasError && (
          <p className="error-text">.نام وارد شده نامعتبر است</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name"> ایمیل *</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">ایمیل وارد شده نامعتبر است</p>
        )}
      </div>
      <div className={collabrationPosClasses}>
        <label htmlFor="name"> موقغیت همکاری * </label>
        <input
          type="text"
          id="name"
          value={collabrationPosValue}
          onChange={collabrationPosChangeHandler}
          onBlur={collabrationPosBlurHandler}
        />
        {collabrationPosHasError && (
          <p className="error-text">موقغیت همکاری وارد شده نامعتبر است</p>
        )}
      </div>
      <div className={phoneNumClasses}>
        <label htmlFor="name"> شماره تماس * </label>
        <input
          type="text"
          id="name"
          value={phoneNumValue}
          onChange={phoneNumChangeHandler}
          onBlur={phoneNumBlurHandler}
        />
        {phoneNumHasError && (
          <p className="error-text">.شماره وارد شده نامعتبر است</p>
        )}
      </div>
      <div className={duffelBagClasses}>
        <label htmlFor="name"> (pdfیا png,jpg با فرمت های )فایل رزومه * </label>
        <input className="inputfile"
          accept="image/png, image/gif, image/jpeg"
          type="file"
          id="name"
          value={duffelBagValue}
          onChange={duffelBagChangeHandler}
          onBlur={duffelBagBlurHandler}
        />
        {duffelBagHasError && (
          <p className="error-text">.فایل رزومه وارد شده نامعتبر است</p>
        )}
      </div>
      <br />
      <div className="form-actions">
        <button disabled={!formIsValid}>ارسال درخواست</button>
      </div>
    </form>
  );
};

export default CollaborationForm;
