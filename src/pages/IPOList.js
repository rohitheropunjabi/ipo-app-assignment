import React from 'react';
import { Link } from 'react-router-dom';

const ipoData = [
  { id: 1, image: 'https://banner2.cleanpng.com/20180509/uwq/kisspng-goair-rajiv-gandhi-international-airport-airline-l-5af34ca6736239.9663336815258943104726.jpg', company: 'GO AIR', issueDate: '4th - 7th Oct 2022', issueSize: '₹'+3600+' Crores' , priceRange: '₹50-60', minInvestQty: '₹'+50000, minInvestInfo: '100 Shares/5 Lots' },
  { id: 2, image: 'https://media.licdn.com/dms/image/C4D0BAQEb22w26oMEpA/company-logo_200_200/0/1650889586913/bajajhindusthansugar_logo?e=1725494400&v=beta&t=H_IRgwgp4KmkQ_kT08OJHftDuUKUuurK2dpaugCMw7Y', company: 'BAJAJ ENERGY', issueDate: '4th - 7th Oct 2022', issueSize: '₹'+3600+' Crores', priceRange: '₹50-60', minInvestQty: '₹'+50000, minInvestInfo: '100 Shares/5 Lots' },
  { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Tf2Pm7OZQZgEAvZRdx25LZSxeo2uTpnZxg&s', company: 'OYO', issueDate: 'To be announced', issueSize: '₹'+3600+' Crores', priceRange: '₹50-60', minInvestQty: '₹'+50000, minInvestInfo: '100 Shares/5 Lots' }
];

function IPOList() {
  return (
    <div className="ipo-list">
      <h1>IPO Lists</h1>
      <table>
        <thead>
          <tr>
          <th style={{textAlign:'left'}}>Company / Issue Date</th>
            <th>Issue Size</th>
            <th>Price Range</th>
            <th>Min Invest/qty</th>
          </tr>
        </thead>
        <tbody>
          {ipoData.map((ipo) => (
            <tr key={ipo.id}>
              <td className="company-cell">
              <Link to={`/ipo-details/${encodeURIComponent(ipo.image)}/${encodeURIComponent(ipo.company)}`} className="company-link">
                <img src={ipo.image} alt={`${ipo.company} logo`} className="company-logo" />
                <div className="company-info">
                  <span className="company-name" style={{ fontSize: '18px' }}>{ipo.company}</span>
                  <span className="issue-date">{ipo.issueDate}</span>
                </div>
              </Link>
              </td>
              <td>{ipo.issueSize}</td>
              <td>{ipo.priceRange}</td>
              <td className="min-invest-cell">
                <div className="min-invest-info">
                  <span className="min-invest-qty">{ipo.minInvestQty}</span>
                  <span className="min-invest-extra">{ipo.minInvestInfo}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPOList;
