import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menuContainer">
      <div className="item">
        <span className="title">General</span>
        <Link to="/animals" className="listItem">
          <i className="fas fa-home"></i>
          <span className="listItemTitle">Animal Records</span>
        </Link>
        <Link to="/employee" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Employee Records</span>
        </Link>
        <Link to="/feed" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Feed Records</span>
        </Link>
        <Link to="/inventory" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Inventory</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Breeding</span>
        <Link to="/mating" className="listItem">
          <i className="fas fa-user-alt"></i>

          <span className="listItemTitle">Mating Records</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Health</span>
        <Link to="health" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Health Records</span>
        </Link>
        <Link to="/" className="listItem">
          <i className="fas fa-home"></i>
          <span className="listItemTitle">Medication Stock</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Finance</span>
        <Link to="transaction" className="listItem">
          <i className="fas fa-home"></i>
          <span className="listItemTitle">Expense Manager</span>
        </Link>
        <Link to="invoice" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Invoice</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Others</span>
        <Link to="/contact" className="listItem">
          <i className="fas fa-home"></i>
          <span className="listItemTitle">Contacts</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
