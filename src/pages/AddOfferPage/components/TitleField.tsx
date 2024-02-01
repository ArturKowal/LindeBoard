import { ChangeEvent } from "react";

interface Props {
  title: (item: string) => void;
}

const TitleField = ({ title }: Props) => {

    const handleEvent = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        console.log("title is:", target.value);
        title(target.value);
      };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Job title / position name"
          onChange={(event) => {
            handleEvent(event);
          }}
        ></input>
      </div>
    </div>
  );
};

export default TitleField;
