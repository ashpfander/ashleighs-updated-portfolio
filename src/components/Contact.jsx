import { useState } from 'react';
import { validateEmail } from '../utils/helper';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleEmptyField = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Check if the input value is empty
    if (inputValue === '') {
      setErrorMessage(`${inputType} is required.`);
    } else {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check if any of the input fields are empty
    if (name === '' || email === '' || message === '') {
      setErrorMessage('Some or all inputs are empty. Please fill out correctly.');
      return;
    }

    // Check to see if the email is valid or not. It will display the error message if not.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      return;
    }
    
    alert(`Thank you for your message, ${name}!`);

    // If successful, the fields are cleared
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="mt-5" onSubmit={handleFormSubmit} noValidate>
      <h2 className="olive-text text-center kalam-bold pb-3">Leave me a message!</h2>
      <div className="form-floating mb-3">
        <input value={name}
          name="Name"
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Name"
          onChange={handleInputChange}
          onBlur={handleEmptyField} />
        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input value={email}
          name="Email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleInputChange}
          onBlur={handleEmptyField} />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <textarea value={message}
          name="Message"
          class="form-control"
          placeholder="Leave a message here"
          id="floatingTextarea2"
          style={{height: '125px'}}
          onChange={handleInputChange}
          onBlur={handleEmptyField}></textarea>
        <label for="floatingTextarea2">Message</label>
      </div>
      {errorMessage && (
        <div>
          <p className="pt-3 olive-text">{errorMessage}</p>
        </div>
      )}
      <button type="submit" className="p-3 mt-3 gabarito-regular">Submit</button>
    </form>
  );
  }
  
  export default Contact;