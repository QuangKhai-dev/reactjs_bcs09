import ContentComponent from './components/BaiTap/ContentComponent';
import FooterComponent from './components/BaiTap/FooterComponent';
import HeaderComponent from './components/BaiTap/HeaderComponent';
import HomeComponent from './components/BaiTap/HomeComponent';
import NavigationComponent from './components/BaiTap/NavigationComponent';
import BaiTapBinding from './components/BaiTapBindingDuLieu/BaiTapBinding';
import DemoEvent from './components/DemoEvent/DemoEvent';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Header />
      <Footer /> */}
      <HomeComponent />
      <HeaderComponent />
      <div className="row">
        <NavigationComponent />
        <ContentComponent />
      </div>
      <FooterComponent />
      <BaiTapBinding />
      <DemoEvent />
    </div>
  );
}

export default App;
