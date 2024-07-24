
import OtpBox from '../components/otpBox';
import { SpotComp } from '../components/spotlight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function BrowseRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotComp />} />
        <Route path="otp-box" element={<OtpBox />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter



