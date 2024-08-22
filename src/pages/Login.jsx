import { FormInput, SubmitButton } from "../components";
import { useNavigate, Link, Form } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		if (email === "test@test.com" && password === "test") {
			navigate("/products");
		}
	};

	return (
		<div className="max-w-md mx-auto min-h-screen grid place-items-center bg-base-100">
			<Form
				onSubmit={handleSubmit}
				method="post"
				className="card w-full mx-auto shadow-lg p-8">
				<h3 className="text-2xl font-bold mb-4 text-center text-primary">Login</h3>
				<FormInput
					label="Email"
					name="identifier"
					type="email"
					defaultValue="test@test.com"
				/>
				<FormInput
					label="Password"
					name="password"
					type="password"
					defaultValue="secret"
				/>
				<div className="mt-8">
					<SubmitButton text="Login" />
				</div>
				<div className="mt-8">
					<button
						type="button"
						className="btn btn-secondary btn-block">
						Guest member
					</button>
				</div>
				<div className="mt-8">
					<p>
						Don't have an account?{" "}
						<Link
							to="/register"
							className="link link-hover">
							Register
						</Link>
					</p>
				</div>
			</Form>
		</div>
	);
};
export default Login;
