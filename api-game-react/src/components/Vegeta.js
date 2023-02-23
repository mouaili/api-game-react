import React, { Component } from 'react';
import vegeta from '../Vegeta.png';
import CountHits from '../countHits/CounterHits';

export class Vegeta extends Component {
  render() {
    const { name, hocState, AddOneHit, life } = this.props;
    const lifeValue =
      life > 0 ? (
        <td>
          <span className='badge text-bg-success p-2'> {life} %</span>
        </td>
      ) : (
        <td>
          <span className='badge text-bg-danger p-2'>Mort</span>
        </td>
      );

    const button =
      life > 0 ? (
        <button className='btn btn-primary m-2' onClick={AddOneHit}>
          {name} frappe
        </button>
      ) : (
        <button className='btn btn-danger  disabled m-2'>{name} Mort</button>
      );

    return (
      <div className='col'>
        <img src={vegeta} width='100' alt='' />
        <br />
        {button}
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Coup{hocState.hits > 1 ? `s` : ''}</th>
              <th scope='col'>Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountHits(Vegeta, 10);
