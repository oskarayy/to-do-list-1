import { useContext, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import './fonts/Kodchasan-ExtraLight.ttf';
import './fonts/Kodchasan-Light.ttf';
import './fonts/Kodchasan-Medium.ttf';
import './fonts/Kodchasan-Regular.ttf';
import './fonts/Kodchasan-SemiBold.ttf';
import './fonts/Kodchasan-Bold.ttf';

import './App.css';
import ThemeContext from './store/context/theme-context';
import Header from './components/Header';
import Banner from './components/Banner';
import TaskList from './components/tasks/TaskList';
import FixedButton from './components/interface/FixedButton';
import NewTask from './components/NewTask';

function App() {
  const { theme } = useContext(ThemeContext);
  const [newTaskHidden, setNewTaskHidden] = useState(true);

  return (
    <Provider store={store}>
      <div className='Background' id={theme}>
        <div className='App'>
          <Header />
          <Banner />
          <TaskList />
          {!newTaskHidden && (
            <NewTask onHideForm={setNewTaskHidden.bind(null, true)} />
          )}
          <FixedButton
            className={
              newTaskHidden
                ? 'add-task-button'
                : 'add-task-button add-task-button--hidden'
            }
            onClick={setNewTaskHidden.bind(null, false)}
          />
        </div>
      </div>
    </Provider>
  );
}

export default App;
