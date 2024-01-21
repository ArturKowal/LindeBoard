// import { ChangeEvent, FC } from "react";

// interface InputProps {
//   value: string | number;
//   error: boolean;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

const TitleField: React.FC = () => {
// FC<InputProps> = ({ value, error, onChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="title"
          placeholder="Job title / position name"
        //   value={value}
        //   onChange={onChange}
        >
          {/* {error && <p className="error">Input filed can't be empty!</p>} */}
        </input>
      </div>
    </div>
  );
};

export default TitleField;
