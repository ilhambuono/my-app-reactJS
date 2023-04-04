import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Region from '../../template/region';
import { fetchRegionAll, selectCount } from '../../../features/region';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function Regionpage(){
  const dispatch = useDispatch();
  const regionData = useSelector(selectCount);
  const [httpStatus, setHttpStatus] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchRegionAll());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(fetchRegionAll());
    return () =>{
      setHttpStatus(null)
    }
  //getAllRegion();
}, [httpStatus]);
  //console.log(regionData)
  return (
    <Region regionDatanih={regionData} setHttpStatus={setHttpStatus}/>
  )
}
export default Regionpage;
  