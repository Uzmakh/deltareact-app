function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

const Form = () => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Write something!" />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
