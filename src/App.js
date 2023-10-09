import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offer:false,
    radioMode:""
  })

  function changeHandler(event){
    
    const{name,value,checked,type} = event.target
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value}) )
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing value of form")
    console.log(formData)
  }

  return(
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label>
        <br/>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Uday"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
        <br/>

        <label htmlFor="lastName">Last Name</label>
        <br/>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Mahto"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
        <br/>

        <label htmlFor="email">Email</label>
        <br/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Uday@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br/>

        <label htmlFor="country">Country</label>
        <br/>
        <select
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>

          </select>
          <br/>

          <label htmlFor="streetAddress">StreetAddress</label>
          <br/>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="P-7/5"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="outline"
          />
          <br/>

          <label htmlFor="city">City</label>
          <br/>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="New Delhi"
            value={formData.city}
            onChange={changeHandler}
            className="outline"
          />
          <br/>

          <label htmlFor="state">State</label>
          <br/>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Delhi"
            value={formData.state}
            onChange={changeHandler}
            className="outline"
          />
          <br/>

          <label htmlFor="postalCode">Postal Code</label>
          <br/>
          <input
            type="number"
            name="postalCode"
            id="postalCode"
            placeholder="110010"
            value={formData.postalCode}
            onChange={changeHandler}
            className="outline"
          />
          <br/>

          <fieldset>
            <legend>By Email</legend>
            <br/>

            <div className="flex flex-row">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                value={formData.comments}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someone comments</p>
              </div>
            </div>    
            <br/>

            <div className="flex flex-row">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                value={formData.candidates}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when applies for a job</p>
              </div>
            </div>
            <br/>

            <div className="flex flex-row">
              <input
                type="checkbox"
                name="offer"
                id="offer"
                value={formData.offer}
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="offer">Offers</label>
                <p>Get notified when candidate accept or reject offer</p>
              </div>
            </div>
            <br/>
          </fieldset>
          

          <fieldset>
            <legend>Push Notification</legend>
            <p>These are delivered via SMS</p>

            <div className="flex flex-row">
              <input
                type="radio"
                name="radioMode"
                id="everything"
                value="everything"
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="everything">Everything</label>
              </div>
            </div>
            <br/>


            <div className="flex flex-row">
              <input
                type="radio"
                name="radioMode"
                id="sameAsEmail"
                value="sameAsEmail"
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="sameAsEmail">Same As Email</label>
              </div>
            </div>
            <br/>


            <div className="flex flex-row">
              <input
                type="radio"
                name="radioMode"
                id="noPushNotification"
                value="noPushNotification"
                onChange={changeHandler}
              />
              <div>
                <label htmlFor="noPushNotification">No Push Notification</label>
              </div>
            </div>
            <br/>
          </fieldset>

          <button className="bg-blue-500 text-white font-bold rounded-md py-2 px-4">
            Save
          </button>

      </form>
    </div>
  )
}

export default App;
