import { useState } from 'react';

const useUpdateTimeSelect = () => {
  const [error, setError] = useState(null);
  
  const UpdateTimeSelect = async (inputValueLocation, inputValueAgenda, inputValueFrom, inputValueTo) => {
    setError(null);
    console.log('use');
    console.log(inputValueLocation);
    console.log('hello');
    try {
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingProposalId: 1,
          location: inputValueLocation,
          startTime: inputValueFrom,
          endTime: inputValueTo,
          agenda: inputValueAgenda,
          maxVote: 5
          }), 
      });
      if (response.ok !== true) {
        throw new Error('Failed to add it the the database');
      }
    } 
    catch (error) {
      setError(error.message);
    }
  };

  return { UpdateTimeSelect, error };
};

export default useUpdateTimeSelect;
