
import OtpBox from '../components/otpBox';
import { ScrollList } from '../components/ScrollList';
import { SpotComp } from '../components/spotlight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function BrowseRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotComp />} />
        <Route path="otp-box" element={<OtpBox />} />
        <Route path="scroll-api" element={<ScrollList />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter



