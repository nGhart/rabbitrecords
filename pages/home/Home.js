import ChartBox from '../../components/chartbox/ChartBox';
import './home.scss';
import ReminderPage from '../../components/ReminderPage/ReminderPage';
import TransactionSummary from '../../components/transactionSummary/TransactionSummary';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="box box1">1</div>
      <div className="box box2">
        <ChartBox />
      </div>
      <div className="box box3">3</div>
      <div className="box box4">
        <ReminderPage />
      </div>
      <div className="box box5">5</div>
      <div className="box box6">6</div>
      <div className="box box7">7</div>
      <div className="box box8">8{/* <TransactionSummary /> */}</div>
    </div>
  );
};

export default Home;
