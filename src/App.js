import { Routes, Route } from 'react-router-dom';
import Init from './page/Init';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Init />} />
        {/* <Route path='/create-routine' element={<CreateRoutine />} />
        <Route path='/:routine-set' element={<ToDo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
