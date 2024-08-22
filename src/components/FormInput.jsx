const FormInput = ({ label, name, type, defaultValue }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text capitalize">{label}</span>
			</label>
			<input
				type={type}
				className="input input-bordered w-full"
				name={name}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default FormInput;
