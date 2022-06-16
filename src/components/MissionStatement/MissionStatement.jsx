import './MissionStatement.css';
import missionStatementImage from '../../assets/shared/desktop/image-best-gear.jpg';

const MissionStatement = () => {
  return (
    <div className='missionStatement__wrapper'>
      <div className='missionStatement__container'>
        <div className='missionStatement__content'>
          <h4>
            Bringing you the
            <span> best </span>
            audio gear
          </h4>
          <p>
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={missionStatementImage} alt='mission-statement' />
      </div>
    </div>
  );
};

export default MissionStatement;
