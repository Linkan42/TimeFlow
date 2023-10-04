
const useGetUserList = () => {

  const GetUserList = async () => {
    try {
      const response = await fetch('/api/userList', {
        method: 'GET'
      });
      return response;
    }
    catch(err){
        throw err;
    }
}
  
  return { GetUserList };
};

export default useGetUserList;
