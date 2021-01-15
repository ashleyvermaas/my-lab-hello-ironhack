// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav className="nav">
          <img src="../images/ironhack-logo.svg" className="nav-img" alt="ironhack logo" />
          <img src="../images/menu-top.svg" className="nav-img" alt="menu"/>
        </nav>
        <div className="header-main">
          <h1 className="header-title">Say hello to ReactJS</h1>
          <p className="header-text">You will learn how to use the most popular frotend library, and become a super Ninja developer.</p>
          <a href="" className="header-btn">Awesome!</a>
        </div>
      </header>

      <section className="column-section">
        <ul className="column-list">
          <li className="column-item">
            <img src="../images/icon1.png" className="item-img" alt="declarative visualization" />
            <h4 className="item-title">Declarative</h4>
            <p className="item-text">React makes it painless to create interactive UIs.</p>
          </li>
          <li className="column-item">
            <img src="../images/icon2.png" className="item-img" alt="components visualization" />
            <h4 className="item-title">Components</h4>
            <p className="item-text">Build encapsulated components that manage their state.</p>
          </li>
          <li className="column-item">
            <img src="../images/icon3.png" className="item-img" alt="single-way visualization" />
            <h4 className="item-title">Single-Way</h4>
            <p className="item-text">A set of immutable values are passed to the components.</p>
          </li>
          <li className="column-item">
            <img src="../images/icon4.png" className="item-img" alt="JSX visualization" />
            <h4 className="item-title">JSX</h4>
            <p className="item-text">Statically-typed designed to run on modern browsers.</p>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default App;
