import { ChangeEvent } from "react";

interface Props {
  salary: (item: string) => void;
}

const SalaryField = ({ salary }: Props) => {
  const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    console.log("salary is:", target.value);
    salary(target.value);
  };
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">PLN</span>
      <input
        type="number"
        min="0"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
        onChange={(event) => {
          handleEvent(event);
        }}
      />
      <span className="input-group-text">gross per month</span>
    </div>
  );
};

export default SalaryField;
