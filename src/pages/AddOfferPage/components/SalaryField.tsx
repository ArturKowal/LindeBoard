// import { ChangeEvent, FC } from "react";

// interface InputProps {
//   value: string | number;
//   error: boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const SalaryField: React.FC = () => {
// : FC<InputProps> = ({ value, error, onChange }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">PLN</span>
      <input
        type="text"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
      />
      <span className="input-group-text">gross per month</span>
    </div>
  );
};

export default SalaryField;
