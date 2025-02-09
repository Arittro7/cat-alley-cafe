import React, { useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ChefRecoCard from './ChefRecoCard/ChefRecoCard';

const Chef = () => {

  const [recommends, setRecommends] = useState([]);
  fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    const chefRecommends = data.filter(item => item.category === 'chef');
    setRecommends(chefRecommends)
  })

  return (
    <div className='my-20'>
      <SectionTitle
      subHeading="Should Try"
      heading={"Chef Recommends"}
      ></SectionTitle>
     <div className='grid grid-cols-3 gap-4'>
     {
        recommends.map(recommend=><ChefRecoCard
        key={recommend._id}
        recommend={recommend}
        >
        </ChefRecoCard>)
      }
     </div>

    </div>
  );
};

export default Chef;