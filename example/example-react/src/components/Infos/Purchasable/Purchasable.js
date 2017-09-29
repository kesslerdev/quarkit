import React from 'react'
import { connect } from 'react-redux'
import HumanizeDuration  from 'humanize-duration'
import "@material/list/dist/mdc.list.css"
import Purchase from './Purchase'
import ResourceBag from '../Resource/ResourceBag'
import './Purchasable.css'


const Purchasable = ({ purchasable, possessor, date}) => {

  const isPurchased = () => {
    return possessor.possessions.find(
      go => go.possession.slug === purchasable.slug && go.possession.typeName === purchasable.typeName) !== undefined
  }

  return (
    <li className="mdc-list-item mdc-ripple-upgraded">
    <span className="mdc-list-item__start-detail grey-bg" role="presentation">
              <i className="material-icons" aria-hidden="true">store</i>
            </span>
    <span className="mdc-list-item__text">
    Building : {purchasable.slug}
              <span className="mdc-list-item__text__secondary">
                <ResourceBag bag={purchasable.productions} />
                {purchasable.nextProductionTime ? HumanizeDuration(purchasable.nextProductionTime - date, { round: true }) : ''}
              </span>
    </span>
    {isPurchased() ? <i className="material-icons mdc-list-item__end-detail" style={{color:'green'}} aria-hidden="true">check</i> :
        <Purchase purchasable={purchasable} possessor={possessor} />}
  </li>
  );
}

const mapStateToProps = (state, props) => {
  return {
    date: state.time.current,
  }
}

const DataPurchasable = connect(
  mapStateToProps
)(Purchasable)
 //
export default DataPurchasable
