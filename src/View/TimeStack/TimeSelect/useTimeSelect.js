import { useState } from 'react';

const useUpdateTimeSelect = () => {
  const [error, setError] = useState(null);

  const UpdateTimeSelect = async () => {
    setError(null);

    try {
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingProposalId: 1,
        location: 'JTH',            
        startTime: '11:00',
        endTime: '12:00',
        createrUserId: 1}), 
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
