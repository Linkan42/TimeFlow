import { useState } from 'react';

const useUpdateTimeSelect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const UpdateTimeSelect = async () => {
    setLoading(true);
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
        //set loding false both in error and in main funk
      setLoading(false);
    } 
    catch (error) {
      setError(error.message);
      setLoading(false);
      //set loding false both in error and in main funk
    }
  };

  return { UpdateTimeSelect, loading, error };
};

export default useUpdateTimeSelect;
