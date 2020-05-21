import React, { useState } from 'react';
import EmailValidator from 'email-validator';

const AddAnswerModal = (props) => {
  const [warnings, setWarning] = useState({});
  const [info, setInfo] = useState({
    answer: '',
    nickName: '',
    email: '',
  });
  const showHideClassName = props.show
    ? 'modal modal-show'
    : 'modal modal-hide';

  const handleSubmit = () => {
    if (checkIfMandatoryFieldsFilled()) {
      alert('Answer has been submitted! Thank you :)');
      props.handleClose();
    } else {
      alert('Please fill out mandatory fields');
    }
  };
  const handleTextChange = (e, field) => {
    setInfo({
      ...info,
      [field]: e.target.value,
    });
  };

  const checkIfMandatoryFieldsFilled = () => {
    let isValid = true;
    if (info.answer.length === 0) {
      setWarning((warnings) => {
        return {
          ...warnings,
          answer: true,
        };
      });
      isValid = false;
    }
    if (info.nickName.length === 0) {
      setWarning((warnings) => {
        return {
          ...warnings,
          nickName: true,
        };
      });
      isValid = false;
    }
    if (info.email.length === 0 || !EmailValidator.validate(info.email)) {
      setWarning((warnings) => {
        return {
          ...warnings,
          email: true,
        };
      });
      isValid = false;
    }
    return isValid;
  };
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <form>
          <label
            className={
              warnings.nickName ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Nickname:</div>
            <input
              type='text'
              value={info.nickName}
              placeholder='Example: jackson11!'
              onChange={(e) => handleTextChange(e, 'nickName')}></input>
          </label>
          <label
            className={
              warnings.answer ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Answer:</div>
            <input
              type='text'
              value={info.answer}
              placeholder='Example: What is the texture like?'
              onChange={(e) => handleTextChange(e, 'answer')}></input>
          </label>
          <label
            className={
              warnings.email ? 'addReviewField warning' : 'addReviewField'
            }>
            <div>Email:</div>
            <input
              type='email'
              placeholder='Example: jackson11@email.com'
              value={info.email}
              onChange={(e) => handleTextChange(e, 'email')}></input>
          </label>
          <input
            className='bottom-btn fs32 bold'
            type='button'
            onClick={handleSubmit}
            value='Add Answer'></input>
        </form>
        <button className='bottom-btn fs32 bold' onClick={props.handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddAnswerModal;
