// import { ChangeEvent, FC } from "react";

// interface InputProps {
//   value: string | number;
//   error: boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const DescriptionField: React.FC = () => {
// : FC<InputProps> = ({ value, error, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Description job offer
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
      ></textarea>
    </div>
  );
};

export default DescriptionField;
