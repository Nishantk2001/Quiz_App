export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((Option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={Option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {Option}
        </button>
      ))}
    </div>
  );
}
