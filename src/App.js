// import logo from './logo.svg';
import "./App.css";
import "./components/appStyles.css";
// import styles from './components/appStyles.module.css'
// import { Hello } from './components/Hello';
// import {Message} from './components/Message';
// import {ClickHandler} from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { NameList } from './components/NameList';
// import { StyleSheet } from './components/StyleSheet';
// import { Inline } from './components/Inline';
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* <Hello name='jiahui' gender='male'> <p>Test</p></Hello>
          <Hello name='Shanon' gender='female' />
          <Message />
          <ClickHandler /> */}
          {/* <ParentComponent />
          <UserGreeting />
          <NameList />
          <StyleSheet />
          <Inline />
          <h1 className='error'> Error</h1>
          <h1 className={styles.success}> Success</h1> */}
          <Form />
        </p>
        {/* <a

          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
