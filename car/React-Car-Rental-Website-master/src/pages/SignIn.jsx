import React,{ useState,useHistory } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles.module.css";

const SignIn = () => {
	const history= useHistory();
	const [data, setData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
      
		 const res=await fetch('/SignIn',{
			method : "POST",
			headers: {
				"content-type" : "application/json"
			},
			body:JSON.stringify({
				email,password
			})
		 });
		 const result=res.json();
		 if(res.status===400||!result){
			window.alert("invalid credentials");
		 }
		 else{
			window.alert("Login Successful")
		 }
		 history.push('/');
		}

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;