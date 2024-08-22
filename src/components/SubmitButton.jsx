import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
	const navigation = useNavigation();

	return (
		<button
			disabled={navigation.state === "submitting"}
			className="btn btn-primary btn-block"
			type="submit">
			{navigation.state === "submitting" ? <span className="loading loading-spinner"></span> : text || "Submit"}
		</button>
	);
};
export default SubmitButton;
