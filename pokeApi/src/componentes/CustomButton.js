import { Button } from "react-bootstrap";

function CustomInput({name, disabled}) {
    return (
      <>
        <Button type="button" className="btn btn-primary me-5 btn-lg" disabled={disabled}>{name}</Button>
      </>
    );
  }
  
  
  export default CustomInput;