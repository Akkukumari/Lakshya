import React from 'react'
import "./All.css";
import Filter from './Filter';
import Tutordetail from './Tutordetail';
import Footer from './Footer';

const Findtutor =()=> {
  return (
    < >
     <div className='tutor'>
    <Filter/>
     <Tutordetail/>

     </div>
     <Footer  />
    </>
  );
};

export default Findtutor;