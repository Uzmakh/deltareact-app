function handleFormSubmit() {
    console.log("Form submitted!")
}

const Form = () => {
  return (
      <div>
          <input type="text" placeholder="Write something!" />
          <button onClick={handleFormSubmit}>Submit</button>
      
    </div>
  )
}

export default Form
