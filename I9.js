import React from 'react';
import '../styles/scss/components/_i9.scss';
import MetadataI9 from './MetadataI9';
import {
	homepageMeta,
} from './../data/meta-data';

const I9 = () => {
  return (     
    <MetadataI9 metadata={homepageMeta} />
    <div className="i9-component">
      <p>
        Forbes participates in E-Verify and will provide the federal government with employee’s Form I-9 Information to confirm authorization to work in the United States. Forbes only uses E-Verify once a candidate has accepted a job offer and completed the Form I-9. For more information about your right to work, please see the{' '}
        <a
          href="https://www.e-verify.gov/sites/default/files/everify/posters/IER_RightToWorkPoster%20Eng_Es.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          notice of right to work
        </a>
        .
      </p>
      <div className="i9-image">
        <a
          href="https://www.forbes.com/careers-page/assets/E-Verify_Participation_Poster_Eng_Es.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.forbes.com/careers-page/assets/E-Verify_Participation_Poster.png"
            alt="i9 Image"
          />
        </a>
      </div>
    </div>
  );
};

export default I9;