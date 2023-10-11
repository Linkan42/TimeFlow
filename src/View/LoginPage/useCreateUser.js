


const useCreateUser = () => {
	const CreateUser = async (Email, Name, Password) => {
		try{
			const response = await fetch("/api/CreateUser", {method: "POST",
				headers: {"Content-Type":"application/json"},
				body: JSON.stringify({ Email: Email,
					Name: Name,
					Password: Password})});
		}
		catch(error){
			console.error(error);
		}
	};
	return {CreateUser};
};

export default useCreateUser;