import * as React from "react";

export default function ErrorRadios() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [answer, setAnswer] = React.useState(1);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "1") {
      setAnswer(1);
      setHelperText("You got it!");
      setError(false);
    } else if (value === "2") {
      setAnswer(2);
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          گزینه 1
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          2
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          گزینه 3
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          گزینه 4
        </label>
      </div>
    </>
  );
}
