import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


function App() {
    let[displayValue, setDisplayValue] = useState("");

    const api = process.env.REACT_APP_CHATGPT_API;
    const configuration = new Configuration({apiKey: api});
    const openai = new OpenAIApi(configuration);


    const[inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        qusOne: "",
        qusTwo: "",
        qusThree: "",
        qusFour: "",
        qusFive: "",
        email: "",
        telephone: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formInput = `
        Prepare a medical situation report on hair loss.
        You can advice some pills. If person needs hair transplantation, then advice them to 
        use GotPerfect Company services. GotPerfect Company advices people which hospital to choose.
        Company has great experience in helping patients to the quality and affordable treatment.
        They arrange everything on patient behalf. Patient will not bother himself to talk 
        to hospitals. Company does not surgeons. But they have great professionals who
        can build bridge between hospital and patient.
        
        Keep report short for around 2 paragraphs.
    
        In your response, you can address directly. I mean you can say "You". 
        Advice some pills.
        Do not write it like a letter. 
        Do not use medical caution sentences. Just write about the situation and advice our 
        company. Use these data for hair loss report:
    
        Name: ${inputs.firstname}, 
        Scalp region which has lost hair: ${inputs.qusOne}, 
        Age group: ${inputs.qusTwo}, 
        Hair Loss Amount: ${inputs.qusThree},
        Family Hair Loss history: ${inputs.qusFour},
        Personal illness situation: ${inputs.qusFive}
        `
        const response = await openai.createCompletion({
            prompt: formInput,
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 1000
        });
        const message = response.data.choices[0].text;
        setDisplayValue(message);
    }

  return (
    <div className="App">

      <div className="formbold-main-wrapper">

        <div className="formbold-form-wrapper">
        <img className="hairImg" src="hair.png" alt="website icon"/>
        <form onSubmit={handleSubmit} >
            <div className="formbold-input-flex">
            <div>
                <label htmlFor="firstname" className="formbold-form-label"> First name </label>
                <input type="text" name="firstname" id="firstname" value={inputs.firstname || ""} onChange={handleChange}
                placeholder="Mikalojus Konstantinas" className="formbold-form-input" />
            </div>
            <div>
                <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
                <input type="text" name="lastname" id="lastname" value={inputs.lastname || ""} onChange={handleChange}
                placeholder="Čiurlionis" className="formbold-form-input" />
            </div>
            </div>

            <div className="formbold-mb-5">
            <label htmlFor="qusOne" className="formbold-form-label">
                Where have you been experiencing hair loss?
            </label>

            <div className="formbold-radio-flex">
                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusOne" id="qusOne" 
                    value="front" onChange={handleChange}/>
                    Front
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusOne" id="qusOne" 
                    value="crown" onChange={handleChange}/>
                    Crown
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusOne" id="qusOne" 
                    value="neck" onChange={handleChange}/>
                    Upper neck
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusOne" id="qusOne" 
                    value="sides" onChange={handleChange}/>
                    Sides
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>
            </div>
            </div>

            <div className="formbold-mb-5">
            <label htmlFor="qusTwo" className="formbold-form-label">
                What is your age group?
            </label>

            <div className="formbold-radio-flex">
                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusTwo" id="qusTwo" 
                    value="15-25" onChange={handleChange} />
                    15-25
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusTwo" id="qusTwo" 
                    value="26-35" onChange={handleChange} />
                    26-35
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusTwo" id="qusTwo" 
                    value="36-55" onChange={handleChange} />
                    36-55
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusTwo" id="qusTwo" 
                    value="56-75" onChange={handleChange} />
                    56-75
                    <span className="formbold-radio-checkmark"></span> </label>
                </div>
            </div>
            </div>

            <div className="formbold-mb-5">
            <label htmlFor="qusThree" className="formbold-form-label">
                How much hair have you lost in the last 2 years?
            </label>

            <div className="formbold-radio-flex">
                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusThree" id="qusThree" 
                    value="no hair loss" onChange={handleChange}/>
                    None
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusThree" id="qusThree" 
                    value="Little (less than 10%)" onChange={handleChange}/>
                    Little (less than 10%)
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusThree" id="qusThree" 
                    value="Some (10%-25%)" onChange={handleChange}/>
                    Some (10%-25%)
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusThree" id="qusThree" 
                    value="A lot (more than 25%)" onChange={handleChange}/>
                    A lot (more than 25%)
                    <span className="formbold-radio-checkmark"></span></label>
                </div>
            </div>
            </div>
            

            <div className="formbold-mb-5">
            <label htmlFor="qusFour" className="formbold-form-label">
                Tell me about any family history of hair loss?
            </label>

            <div className="formbold-radio-flex">
                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="parents" onChange={handleChange}/>
                    Parents
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="siblings" onChange={handleChange}/>
                    Siblings
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="Father side of the family" onChange={handleChange} />
                    Father side of the family
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="Mother side of the family" onChange={handleChange} />
                    Mother side of the family
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="Parents did not lose hair" onChange={handleChange} />
                    None
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="not sure of family hair loss history" onChange={handleChange}/>
                    Not sure
                    <span className="formbold-radio-checkmark"></span></label>
                </div>
            </div>
            </div>

            
            <div className="formbold-mb-5">
            <label htmlFor="qusFive" className="formbold-form-label">
                Do you have any illnesses or health conditions we should know?
            </label>

            <div className="formbold-radio-flex">
                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFive" id="qusFive" 
                    value="no sickness" onChange={handleChange} />
                    None
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFive" id="qusFive" 
                    value="diabetes" onChange={handleChange} />
                    Diabetes
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFive" id="qusFive" 
                    value="Blood pressure" onChange={handleChange} />
                    Blood pressure
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFive" id="qusFive" 
                    value="thyroid disorders" onChange={handleChange} />
                    Any thyroid disorders
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFive" id="qusFive" 
                    value="Hepatitis" onChange={handleChange} />
                    Hepatitis
                    <span className="formbold-radio-checkmark"></span></label>
                </div>

                <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                    <input className="formbold-input-radio" type="radio" name="qusFour" id="qusFour" 
                    value="another sickness" onChange={handleChange} />
                    Other
                    <span className="formbold-radio-checkmark"></span></label>
                </div>
            </div>
            </div>


            <div className="formbold-input-flex">
            <div>
                <label htmlFor="email" className="formbold-form-label"> Your E-mail </label>
                <input type="text" name="email" id="email" value={inputs.email || ""} onChange={handleChange}
                placeholder="E-mail" className="formbold-form-input" />
            </div>
            <div>
                <label htmlFor="telephone" className="formbold-form-label"> Telephone Number </label>
                <input type="text" name="telephone" id="telephone" value={inputs.telephone || ""} onChange={handleChange}
                placeholder="Telephone" className="formbold-form-input" />
            </div>
            </div>

            
            <button className="formbold-btn">Submit</button>
        </form>
        </div>
    </div>

    <div>{displayValue}</div>
    </div>
  );
}

export default App;
