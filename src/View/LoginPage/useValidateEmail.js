

const useValidateEmail = () => {
	const ValidateEmail = async (Email) => {
		try{
			const response = await fetch("/api/ValidateEmail", {method: "POST",
				headers: {"Content-Type":"application/json"},
				body: JSON.stringify({ Email: Email })});
			if(response.ok){
				console.log("coulnt find email");
				return false;
			}
			else{
				console.log(response);
				console.log("hereemail");
				return true;
			}
		}
		catch(error){
			console.log(error);
			return false;
		}
	};
	return {ValidateEmail};
};

export default useValidateEmail;