import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const [data, setData] = useState({
		firstname: "",
    lastname:"",
		email: "",
		number: "",
    text: "",
    date:"",
    time:"",
    textarea:""
	});
	// const [error, setError] = useState("");
	// const navigate = useNavigate();
  let name,value;
	const handleChange = (e) => {
		name=e.target.name;
		value=e.target.value;
		setData({ ...data, [name]:value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
	
      const {firstname,lastname,email,number,text,date,time,textarea}=data;

			const res=await fetch("/contact",{
				method:"POST",
				headers:{
					"content-type":"application/json"
				},
				body:JSON.stringify({
          firstname,lastname,email,number,text,date,time,textarea
				})
			})
			const result=await res.json();
			if(result.status === 422 || !result){
				window.alert("Invalid Registration");
				console.log("Invalid");
			}
			else{
				window.alert("Registarion complete");
				console.log("Good Job");
			}
		
	};

  return (
    <Form method="POST" onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name='firstname' placeholder="First Name" onChange={handleChange} value={data.firstname}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name='lastname' placeholder="Last Name" onChange={handleChange} value={data.lastname}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" name='email' placeholder="Email" onChange={handleChange} value={data.email}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" name='number' placeholder="Phone Number" onChange={handleChange} value={data.number}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name='text' placeholder="From Address"onChange={handleChange} value={data.text}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name='text' placeholder="To Address"onChange={handleChange} value={data.text}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" name='date' placeholder="Journey Date" onChange={handleChange} value={data.date}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          onChange={handleChange}
          value={data.time}
          name='time' 
        />
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          name='textarea' 
          className="textarea"
          placeholder="Write"
          onChange={handleChange}
          value={data.textarea}
        ></textarea>
        		<button type="submit" >
							done
						</button>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
