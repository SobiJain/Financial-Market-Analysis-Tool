import React from 'react'
import Summary from '../components/Display/Summary'
import QuaterlyResults from '../components/Display/QuaterlyResults'
import PF from '../components/Display/PF'
import BalanceSheet from '../components/Display/BalanceSheet'
import CashFlows from '../components/Display/CashFlows'
import '../components/UI/Card.css'
function CompanyInfo(props) {
  return (
    <>
        <div /*style ={{background: "rgb(218, 213, 213)", width:"100%"}}*/>
        <Summary/>
        <QuaterlyResults />
        <PF />
        <BalanceSheet />
        <CashFlows />
        </div>
    </>
  )
}

CompanyInfo.propTypes = {}

export default CompanyInfo
