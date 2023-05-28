import { useState } from "react";

function FeedbackForm({onSubmit}) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Give us your Feedback</h2>
          <div className="Field">
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              id="score"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="Field">
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

function Feedback() {
    const handleSubmit = () => {
      alert("Form submitted! Thank you for your feedback.");
    };
  
    return (
      <div className="">
        <FeedbackForm onSubmit={handleSubmit} />
      </div>
    );
  }

export default Feedback;
