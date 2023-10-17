import ChartBox from '../../components/chartbox/ChartBox';
import './home.scss';
import ReminderPage from '../../components/ReminderPage/ReminderPage';
import DiseaseSummary from '../../summaries/DiseaseSummary';
import MatingSummary from '../../summaries/MatingSummary';
import FeedingSummary from '../../summaries/FeedingSummary';
import VaccinationSummary from '../../summaries/VaccinationSummary';
import QuarantineSummary from '../../summaries/QuarantineSummary';
import AnimalSummary from '../../summaries/AnimalSummary';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="box box1">
        <ChartBox />
      </div>
      <div className="box box2">
        <DiseaseSummary />
      </div>
      <div className="box box7">
        <QuarantineSummary />
      </div>
      <div className="box box4">
        <ReminderPage />
      </div>
      <div className="box box5">
        <MatingSummary />
      </div>
      <div className="box box6">
        <FeedingSummary />
      </div>

      <div className="box box3">
        <VaccinationSummary />
      </div>
      <div className="box box8">
        <AnimalSummary />
      </div>
    </div>
  );
};

export default Home;
