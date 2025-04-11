import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import About from './pages/About';
import CustomerSupport from './pages/customer/CustomerSupport';
import CustomerSupportNotice from './pages/customer/CustomerSupportNotice';
import CustomerSupportFAQ from './pages/customer/CustomerSupportFAQ';
import CustomerSupportEvent from './pages/customer/CustomerSupportEvent';
import CustomerSupportInquiry from './pages/customer/CustomerSupportInquiry';
import InstallationCases from './pages/InstallationCases';
import InstallationCasesGallery from './pages/InstallationCasesGallery';
import UnAttendAuth from './pages/UnAttendAuth'; // 전화무인인증 페이지
import Manlesscafe from './pages/Manlesscafe'; // 무인전자 페이지
import WireAndWirelessIntroduce from './pages/wireandwireless/WireAndWirelessIntroduce'; // 유무선 단말기 소개 페이지

// Wire
import WireLC7401S from './pages/wireandwireless/wire/WireLC7401S';
import WireLC7403S from './pages/wireandwireless/wire/WireLC7403S';
import WireLC7602S from './pages/wireandwireless/wire/WireLC7602S';

// Wireless
import WirelessLC7211S from './pages/wireandwireless/wireless/WirelessLC7211S';
import WirelessLC7311S from './pages/wireandwireless/wireless/WirelessLC7311S';
import WirelessSM7701S from './pages/wireandwireless/wireless/WirelessSM7701S';

//MobileSystem
import MobileCBP3000 from './pages/mobilesystem/MobileCBP3000';
import MobileCBP3100 from './pages/mobilesystem/MobileCBP3100';
import MobileCBR3000 from './pages/mobilesystem/MobileCBR3000';
import MobileCBR3100 from './pages/mobilesystem/MobileCBR3100';

//Kiosk
import KioskIntroduce from './pages/kiosk/KioskIntroduce';
import KioskOkPos from './pages/kiosk/KioskOkPos';
import KioskIamu from './pages/kiosk/KioskIamu';
import KioskPosbank from './pages/kiosk/KioskPosbank';
import KioskKisAndroid156inch from './pages/kiosk/KioskKisAndroid15.6inch';
import KioskKisAndroid215inch from './pages/kiosk/KioskKisAndroid21.5inch';
import KioskE200 from './pages/kiosk/kioskE200';
import KioskbarrierfreeT6B from './pages/kiosk/KioskbarrierfreeT6B';
import Kioskbarrierfreemazic from './pages/kiosk/Kioskbarrierfreemazic';

// POS
import PosIntroduce from './pages/pos/PosIntroduce';
import PosOkPos from './pages/pos/PosOkPos';
import Posbankapexax from './pages/pos/Posbankapexax';
import E250P from './pages/pos/PosE250P';
import ArcPos from './pages/pos/PosArcPos';

// Toss
// import TossTerminalsIntroduce from './pages/tossterminals/TossTerminalsIntroduce';
import TossTerminals from './pages/tossterminals/TossTerminals';
import Tossfront from './pages/tossterminals/TossFront';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {/* 메인 페이지 */}
        <Route index element={<Home />} />
        {/* 무인인증 페이지 */}
        <Route path="unattend-auth" element={<UnAttendAuth />} />

        {/* 고객 지원 페이지 */}
        <Route path="customer-support">
          <Route index element={<CustomerSupport />} />
          <Route path="notice" element={<CustomerSupportNotice />} />
          <Route path="faq" element={<CustomerSupportFAQ />} />
          <Route path="event" element={<CustomerSupportEvent />} />
          <Route path="inquiry" element={<CustomerSupportInquiry />} />
        </Route>

        {/* 키오스크 소개 페이지 */}
        <Route path="kiosk-introduce" element={<KioskIntroduce />} />

        {/* 키오스크 상세 페이지 */}
        <Route path="kiosk">
          <Route path="okposInfo" element={<KioskOkPos />} />
          <Route path="iamuInfo" element={<KioskIamu />} />
          <Route path="posbankInfo" element={<KioskPosbank />} />
          <Route path="kisandroidInfo15.6inchInfo" element={<KioskKisAndroid156inch />} />
          <Route path="kisandroidInfo21.5inchInfo" element={<KioskKisAndroid215inch />} />
          <Route path="kioskE200Info" element={<KioskE200 />} />
          <Route path="kioskbarrierfreeT6BInfo" element={<KioskbarrierfreeT6B />} />
          <Route path="kioskbarrierfreemazicInfo" element={<Kioskbarrierfreemazic />} />
        </Route>

        {/* 무인전자 페이지 */}

        <Route path="manlesscafe" element={<Manlesscafe />} />

        {/* POS 소개 페이지 */}
        <Route path="pos-introduce" element={<PosIntroduce />} />

        {/* POS 상세 페이지 */}
        <Route path="pos">
          <Route path="okposInfo" element={<PosOkPos />} />
          <Route path="posbankInfo" element={<Posbankapexax />} />
          <Route path="E250PInfo" element={<E250P />} />
          <Route path="ArcPosInfo" element={<ArcPos />} />
        </Route>

        {/* 토스 단말기 소개 페이지 */}
        <Route path="tossterminals">
          {/* 토스 단말기 상세 페이지 */}
          <Route path="tossterminalsInfo" element={<TossTerminals />} />
          <Route path="tossfrontInfo" element={<Tossfront />} />
        </Route>

        {/* 유무선 단말기 소개 페이지 */}
        <Route path="wireandwireless-introduce" element={<WireAndWirelessIntroduce />} />

        {/* 유선 단말기 상세 페이지 */}
        <Route path="wire">
          <Route path="WireLC7401SInfo" element={<WireLC7401S />} />
          <Route path="WireLC7403SInfo" element={<WireLC7403S />} />
          <Route path="WireLC7602SInfo" element={<WireLC7602S />} />
        </Route>

        {/* 무선 단말기 상세 페이지 */}
        <Route path="wireless">
          <Route path="WirelessLC7211SInfo" element={<WirelessLC7211S />} />
          <Route path="WirelessLC7311SInfo" element={<WirelessLC7311S />} />
          <Route path="WirelessSM7701SInfo" element={<WirelessSM7701S />} />
        </Route>

        {/* 모바일 시스템 상세 페이지 */}
        <Route path="mobilesystem">
          <Route path="MobileCBP3000Info" element={<MobileCBP3000 />} />
          <Route path="MobileCBP3100Info" element={<MobileCBP3100 />} />
          <Route path="MobileCBR3000Info" element={<MobileCBR3000 />} />
          <Route path="MobileCBR3100Info" element={<MobileCBR3100 />} />
        </Route>

        {/* 회사 소개 페이지 */}
        <Route path="about" element={<About />} />

        {/* 설치 사례 페이지 */}
        <Route path="installation-cases" element={<InstallationCases />} />

        {/* 설치 사례 갤러리 페이지 */}
        <Route path="installation-cases-gallery" element={<InstallationCasesGallery />} />

        {/* 404 페이지 (홈으로 리다이렉트) */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </Router>,
);
