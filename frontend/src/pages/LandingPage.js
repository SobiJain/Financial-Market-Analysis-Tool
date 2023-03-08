import React from 'react'
import LandingCard from '../components/UI/LandingCard';
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};
function LandingPage(props) {
  return (
    <div style={styles}> <LandingCard /></div>


  )
}

LandingPage.propTypes = {}

export default LandingPage
