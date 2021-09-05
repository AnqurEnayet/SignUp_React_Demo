import logo from './logo.svg';
import './App.css';


import './components/signup/Signup';
import Signup from './components/signup/Signup';
import Description from './components/description/Description';


function App() {
  return (
    <div>
      <div className="flex-container">
        <div className="left">
          <Signup />
        </div>
        <div className="right">
          <Description />
        </div>

      </div>
    </div>
  );
}

export default App;
