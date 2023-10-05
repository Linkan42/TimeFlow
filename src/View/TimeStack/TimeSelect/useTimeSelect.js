import { useState } from 'react';

const useUpdateTimeSelect = () => {

  const UpdateTimeSelect = async (inputValueLocation, inputValueAgenda, inputValueFrom, inputValueTo) => {
      const response = await fetch('/api/meeting/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meetingId: 1,
          location: inputValueLocation,
          startTime: inputValueFrom,
          endTime: inputValueTo,
          agenda: inputValueAgenda,
          }), 
      });
      if (response.ok !== true) {
        throw new Error('Failed to add it the the database');
      }
  };

  return { UpdateTimeSelect};
};

export default useUpdateTimeSelect;
