import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HeaderApp from './components/Header';
import ProductsApp from './components/san-pham';
import IntroduceApp from './components/gioi-thieu';
import FormContainer from './components/lien-he';

const trang_chu = () => <h2>Trang chủ</h2>;

const khuyen_mai = () => <p> Hiện chưa có CTKM, chúng tôi sẽ cập nhật ngay khi có sự kiện. Theo dõi để đừng bỏ lỡ nhé!</p>;
const dai_ly = () => <h2>Đại lý</h2>;
const lien_he = () => <h2>Liên hệ</h2>;

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <HeaderApp/>
        <hr/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={trang_chu}>
            
          </Route>
          <Route path="/san-pham/">
            <ProductsApp/>
          </Route>
          <Route path="/gioi-thieu/">
            <IntroduceApp/>
          </Route>
          <Route path="/chuong-trinh-khuyen-mai/" exact component={khuyen_mai}/>
          <Route path="/chinh-sach-gia-si/" exact component={dai_ly}>
        
          </Route>
          <Route path="/lien-he/" exact component={lien_he}>
            <FormContainer/>
          </Route>
        </Switch> 
      </div>
    </Router>
    </div>
  );
}

export default App;
