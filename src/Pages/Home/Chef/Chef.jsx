import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ChefRecoCard from './ChefRecoCard/ChefRecoCard';

const Chef = () => {
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        const chefRecommends = data.filter((item) => item.category === 'chef');
        setRecommends(chefRecommends);
      })
      .catch((error) => console.error('Error fetching menu:', error));
  }, []); // Runs only once when the component mounts

  return (
    <div className="my-20 container w-[1380px] ">
      <SectionTitle subHeading="Should Try" heading="Chef Recommends" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommends.map((recommend) => (
          <ChefRecoCard key={recommend._id} recommend={recommend} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
