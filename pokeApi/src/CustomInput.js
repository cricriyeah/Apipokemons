function CustomInput({label, disabled}) {
    return (
      <>
        <label htmlFor="">{label}</label>
        <input type="text" disabled={disabled} />
      </>
    );
  }
  
  
  export default CustomInput;