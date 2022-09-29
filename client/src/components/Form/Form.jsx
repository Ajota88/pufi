import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Style.scss"

const Form = () => {
  const [state, handleSubmit] = useForm("mrgdkgpq");
  if (state.succeeded) {
      return <p>Gracias por suscribirse!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="form_container">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ingresa tu email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </form>
  );
}

export default Form