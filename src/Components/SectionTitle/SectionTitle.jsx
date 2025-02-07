import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='w-4/12 text-center mx-auto my-5'>
      <h1 className='text-red-500 text-xl font-semibold'>~~~ {subHeading} ~~~</h1>
      <h1 className='text-3xl uppercase border-y-4 my-4 py-3 border-black'>{heading}</h1>
    </div>
  );
};

export default SectionTitle;