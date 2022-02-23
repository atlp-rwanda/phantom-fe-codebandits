import React from 'react';

function Input({ type, placeholder, styles, onChange, name }) {
  return (
    <div className="mb-2 block font-raleway">
      <input
        className={`${styles} appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

function validateOperator(){

  const [emailValid, setEmailValid] = useState(false)
  const emailPartner = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChange = (e) => {};
  const validateEmail = (e) => {
    if (e.target.value.match(emailPartner)) {
      e.target.classList.add('border-green-900');
      setEmailValid(true);
    } else {
      e.target.classList.add('border-red-900');
    }
  };
}


export default Input;
export {validateOperator};
