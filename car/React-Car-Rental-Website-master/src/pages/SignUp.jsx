import { useState } from "react";
import pic from '../../src/assets/all-images/cars-img/nissan-offer.png';
import { Link} from 'react-router-dom';
import styles from "../styles/styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
        cpassword: "",
	});
	// const [error, setError] = useState("");
	// const navigate = useNavigate();
  let name,value;
	const handleChange = (e) => {
		name=e.target.name;
		value=e.target.value;
		setData({ ...data, [name]:value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	
            const {username,email,password,cpassword}=data;

			const res=await fetch("/SignUp",{
				method:"POST",
				headers:{
					"content-type":"application/json"
				},
				body:JSON.stringify({
					username,email,password,cpassword
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form method ="POST" className={styles.form_container} onSubmit={handleSubmit}>
						<div className="signup_image">
							<figure><img src={pic} alt='registration'/> 
					         	<h1>Create Account</h1>
						      </figure>
						</div>
						<input
							type="text"
							placeholder="UserName"
							name="username"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
                		<input
							type="password"
							placeholder="Confirm Password"
							name="cpassword"
							onChange={handleChange}
							value={data.cpassword}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							SignUp
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;