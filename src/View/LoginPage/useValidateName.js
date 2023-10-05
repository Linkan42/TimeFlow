

const useValidateName = () => {
    const ValidateName = async (Name) => {
        try{
            const response = await fetch('/api/ValidateName', {method: 'POST',
                                                               headers: {'Content-Type':'application/json'},
                                                               body: JSON.stringify({ Name: Name})});
            if(response.ok){
                console.log('couldnt find name');
                return false;
            }
            else{
                console.log(response);
                console.log('herename');
                return true;
            }
        }
        catch(error){
            console.log(error);
            return false;
        }
    };
    return {ValidateName};
};

export default useValidateName;