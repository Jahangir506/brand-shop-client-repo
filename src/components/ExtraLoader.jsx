import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ExtraCardDetails from './ExtraCardDetails';


const ExtraLoader = () => {
  const [bring, setBring] = useState([]);
  const bringAll = useLoaderData();
  const { brandName } = useParams();

  // const idInt = parseInt(id);
  // console.log(idInt);

  useEffect(() => {
    const bringData = bringAll?.filter(bring => bring?.brandName === brandName);
    setBring(bringData);
  }, [brandName, bringAll]);

  console.log(bring);

  return <ExtraCardDetails bring={bring}></ExtraCardDetails>;
};

export default ExtraLoader;