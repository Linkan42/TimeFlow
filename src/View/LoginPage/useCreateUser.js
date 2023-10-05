


const useCreateUser = () => {
    const CreateUser = async (Email, Name, Password, UserId) => {
        try{
            const response = await fetch('/api/CreateUser', {method: 'POST',
                                                            headers: {'Content-Type':'application/json'},
                                                            body: JSON.stringify({ Email: Email,
                                                                                   Name: Name,
                                                                                   Password: Password,
                                                                                   UserId: UserId})});
            if(response.ok){
                console.log('user created');
            }
            else{
                console.log('user was not created');
            }
        }
        catch(error){
            console.log(error);
        }
    };
    return {CreateUser};
};

export default useCreateUser;