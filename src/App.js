import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, id) => {
            const Page = route.component;
            return <Route key={id} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
