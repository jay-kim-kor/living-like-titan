import { Routes, Route } from 'react-router-dom';
import Init from './page/Init';
import CreateRoutine from './page/CreateRoutine';
import Routine from './page/Routine';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* ToDo 완성하면 아래 코드 주석 해제하고 완성하기 */}
        {/* <Route exact path='/' element={<Init />} />
        <Route path='/create-routine' element={<CreateRoutine />} /> */}
        {/* <Route path='/:routine-set' element={<ToDo />} /> */}

        <Route exact path='/' element={<Routine />} />
      </Routes>
    </div>
  );
}

export default App;
