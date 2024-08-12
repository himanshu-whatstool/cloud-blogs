
import { MainTodo } from '../components/AddTodo';
import FormsAntd from '../components/Antd/forms';
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
        <Route path="forms-antd" element={<FormsAntd />} />
        <Route path="main-todo" element={<MainTodo />} />
      </Routes>
    </Router>
  )
}

export default BrowseRouter



