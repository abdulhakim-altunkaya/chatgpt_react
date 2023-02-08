import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


function App() {
  let[inputValue, setInputValue] = useState("");
  let[displayValue, setDisplayValue] = useState("");

  const api = process.env.REACT_APP_CHATGPT_API;
  const configuration = new Configuration({apiKey: api});
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await openai.createCompletion({
      prompt: inputValue,
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 1000
    });
    const message = response.data.choices[0].text;
    setDisplayValue(message);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit">SUBMIT SIR</button>
      </form>
      <p>{displayValue}</p>
    </div>
  );
}

export default App;
