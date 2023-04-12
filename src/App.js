import logo from './logo.svg';
import './App.scss';
import liff from '@line/liff';
import { useEffect, useState } from 'react';

function App() {
  const [loginReq, setLoginReq] = useState(false)
  const [profile, setProfile] = useState({})
  const [isLoggedIn, setIsloggedin] = useState(false)
  useEffect(() => {
    if (loginReq || liff.isInClient()) {
      liff
        .init({
          liffId: "1660858533-loqWyNQE", // Use own liffId
        })
        .then(() => {
          // Start to use liff's api
          console.log("初始化成功");
          if (!liff.isLoggedIn()) {
            console.log("你還沒登入Line哦！");
            liff.login();
          } else {
            console.log("你已經登入Line哦！");
            setIsloggedin(true)
            const idToken = liff.getDecodedIDToken()
            setProfile(idToken)
            console.log(idToken)
            alert(`${idToken.name}, ${idToken.email}, ${liff.getProfile().userId}`)
          }
        })
        .catch((err) => {
          // Error happens during initialization
          console.log("INIT", err.code, err.message);
        });
    }
  }, [])

  useEffect(() => { }, [])

  return (
    <div className="wrap position-relative">
      <button onClick={() => { setLoginReq(true) }}>{isLoggedIn ? '登出' : '登入'}</button>
      {/* {profile.picture && (<img src={profile.picture} />)} */}
      <div className='d-flex justify-content-between mx-3'>
        <h3>我的票夾</h3>
        <button>轉讓</button>
      </div>
      <div className='d-flex justify-content-center mx-3'>
        <h6 className='border-tic flex-fill text-center'>預約券</h6>
        <h6 className='border-tic flex-fill text-center'>即享券</h6>
      </div>
      <div className='tic-box'>
        <div className='d-md-flex justify-content-md-center'>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
        </div>
        <div className='d-md-flex justify-content-md-center'>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
        </div>
        <div className='d-md-flex justify-content-md-center'>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
        </div>
        <div className='d-md-flex justify-content-md-center'>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
        </div>
        <div className='d-md-flex justify-content-md-center'>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
          <div className='tic my-1 mx-auto mx-md-2'>{`我是${profile.name}的票`}</div>
        </div>
      </div>
      <div className='icon-box d-flex justify-content-around position-fixed'>
        <p className='mt-2 mb-0'>商店</p>
        <p className='mt-2 mb-0'>票券</p>
        <p className='mt-2 mb-0'>行程</p>
        <p className='mt-2 mb-0'>會員</p>
      </div>
      {/* <div className='icon-box d-flex justify-content-around position-fixed'>
        <p className='mt-2 mb-0'>商店</p>
        <p className='mt-2 mb-0'>點數</p>
        <p className='mt-2 mb-0'>等級</p>
        <p className='mt-2 mb-0'>會員</p>
      </div> */}
    </div >
  );
}

export default App;
