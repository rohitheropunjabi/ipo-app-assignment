import React from 'react';
import { FiDownload, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import './IPODetails.css';
import { useParams } from 'react-router-dom';
import './IPOList.js';
import { Link } from 'react-router-dom';

const ipoData = {
  id: 1,
  company: 'Company A',
  image: 'https://example.com/path/to/companyA.png',
  issueDate: '12 Dec - 15 Dec 22',
  issueSize: '₹'+3+','+600+ - + 3+','+700+' Cr.',
  priceRange: '₹100-200',
  minInvestQty: '₹50,000',
  lotSize: '150 shares/lots',
  listedOn: '15 Dec 22',
  listedPrice: '₹150',
};

function IPODetails() {
  const {  id, image } = useParams(); 
  const ipo = ipoData;

  return (
    <div className="ipo-details">
      <div>
        <p style={{ color: 'grey' }}>Home {'>'} Market watch</p>
      </div>
      <div className="header-section">
      <div>
        <p className="back-btn" style={{ color: 'darkgrey' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'darkgrey' }}>
            <FiArrowLeft />
          </Link>
        </p>
      </div>
      <img src={decodeURIComponent(image)} alt={`${id} logo`} className="company-logo" />
<h1 className="company-name">{id}</h1>
        <button className="download-btn">
          <FiDownload />
        </button>
        <button className="apply-btn">
          Apply Now
        </button>
      </div>

      <div className="details-section">
        <h2>IPO Details</h2>
        <div className="details-table">
          <div className="details-row">
            <div>Issue Size</div>
            <div>Price Range</div>
            <div>Minimum Amount</div>
            <div>Lot Size</div>
          </div>
          <div className="details-row-data">
            <div>{ipo.issueSize}</div>
            <div>{ipo.priceRange}</div>
            <div>{ipo.minInvestQty}</div>
            <div>{ipo.lotSize}</div>
          </div>
          <div className="details-row">
            <div>Issue Dates</div>
            <div>Listed On</div>
            <div>Listed Price</div>
            <div>Listing Gains</div>
          </div>
          <div className="details-row-data">
            <div>{ipo.issueDate}</div>
            <div>{ipo.listedOn}</div>
            <div>{ipo.listedPrice}</div>
            <div>₹10 {'('}<span style={{ color: 'red' }}>10.0%</span>{')'}</div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2>IPO Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Bidding Starts</span>
            <span className="timeline-date">12 Dec 2023</span>
          </div>
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Bidding Ends</span>
            <span className="timeline-date">15 Dec 2023</span>
          </div>
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Allotment Finalization</span>
            <span className="timeline-date">18 Dec 2023</span>
          </div>
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Refund Initiation</span>
            <span className="timeline-date">18 Dec 2023</span>
          </div>
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Demat Transfer</span>
            <span className="timeline-date">18 Dec 2023</span>
          </div>
          <div className="timeline-item">
            <FiCheckCircle className="timeline-icon" />
            <span>Listing Date</span>
            <span className="timeline-date">21 Dec 2023</span>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About the company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet sem ex, non fringilla nisl ultricies ut. Integer a urna eget neque tempor fringilla ut eget risus. Praesent posuere, ipsum ut tincidunt auctor, ex neque mattis felis, in venenatis libero urna a risus. Praesent elementum nisl vitae lorem volutpat, ac ullamcorper ipsum gravida. Praesent diam nisl, feugiat sed convallis id, fermentum et lectus. Morbi molestie aliquet quam, eu euismod massa suscipit et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed purus vel mauris facilisis pretium. Praesent consectetur est ut dui pretium, ut bibendum lorem suscipit. Morbi non neque id velit tincidunt malesuada eu quis dolor. Etiam posuere blandit lacus, et eleifend turpis ullamcorper non.
        </p>
        <p>
          Donec malesuada risus neque, et consectetur sapien pulvinar sed. Cras iaculis vehicula lacus, quis tincidunt erat eleifend et. Aliquam in nibh molestie, imperdiet neque nec, varius diam. Donec finibus pellentesque metus, a lobortis nulla feugiat vel. Nullam nec vestibulum massa. Duis dictum maximus sodales. Vivamus auctor, arcu vitae efficitur ullamcorper, urna enim porta dolor, id tincidunt sapien dui vel enim. Aliquam lacus orci, dictum in tincidunt vel, malesuada eleifend ipsum. Nam tristique sed justo ut sodales. Cras arcu mi, ultrices in orci non, elementum molestie quam. Phasellus nisl nulla, imperdiet vitae tortor non, dignissim facilisis libero. Integer sit amet urna quis diam tempus viverra id tristique nulla.
        </p>
      </div>
    </div>
  );
}

export default IPODetails;
