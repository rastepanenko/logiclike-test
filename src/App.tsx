import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RecoilRoot, } from 'recoil';
import MainScreen from './app/main/MainScreen';

export default function AppRecoilWrapper() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
