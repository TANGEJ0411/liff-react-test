import liff from '@line/liff';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss'
import pic from '../bg5.jpg'

function HomePage() {
    const [loginReq, setLoginReq] = useState(false)
    const [profile, setProfile] = useState({})
    const [isLoggedIn, setIsloggedin] = useState(false)

    useEffect(() => {
        async function initLogin() {
            if (loginReq || liff.isInClient()) {
                await liff.init({ liffId: "1660858533-loqWyNQE", })
                console.log("初始化成功");
                // Start to use liff's api
                if (!liff.isLoggedIn()) {
                    console.log("你還沒登入Line哦！");
                    liff.login({ redirectUri: window.location.href });
                } else {
                    console.log("你已經登入Line哦！");
                    const idToken = liff.getDecodedIDToken();
                    console.log(idToken); // print decoded idToken object
                    setProfile(idToken)
                    liff.sendMessages([
                        {
                            type: "text",
                            text: "Hello, World!",
                        },
                    ])
                        .then(() => {
                            console.log("message sent");
                        })
                        .catch((err) => {
                            console.log("error", err);
                        });
                    // const idToken = liff.getDecodedIDToken()
                }
            }
        }
        initLogin()
    }, [loginReq])
    // useEffect(() => { }, [])

    // useEffect(() => {
    //   if (isLoggedIn) {
    //     const idToken = liff.getDecodedIDToken();
    //     console.log(idToken);  //print decoded idToken object
    //     setProfile(idToken)
    //   }
    // }, [isLoggedIn])

    return (
        <>
            <button className='btn btn-info' onClick={() => { setLoginReq(true) }}>{isLoggedIn ? '登出' : '登入'}</button>
            {/* {profile.picture && (<img src={profile.picture} />)} */}
            <div className='d-flex justify-content-between mx-3'>
                <h3>我的票夾</h3>
                <button className='btn btn-info' onClick={() => {
                    liff
                        .shareTargetPicker(
                            [
                                {
                                    "type": "flex",
                                    "altText": "this is a flex message",
                                    "contents": {
                                        "type": "bubble",
                                        "header": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Header text"
                                                }
                                            ]
                                        },
                                        "hero": {
                                            "type": "image",
                                            "url": `${pic}`,
                                        },
                                        "body": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Body text"
                                                }
                                            ]
                                        },
                                        "footer": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Footer text"
                                                }
                                            ]
                                        },
                                        "styles": {
                                            "header": {
                                                "backgroundColor": "#00ffff"
                                            },
                                            "hero": {
                                                "separator": true,
                                                "separatorColor": "#000000"
                                            },
                                            "footer": {
                                                "backgroundColor": "#00ffff",
                                                "separator": true,
                                                "separatorColor": "#000000"
                                            }
                                        }
                                    }
                                }

                            ],
                            {
                                isMultiple: true,
                            }
                        )
                        .then(function (res) {
                            if (res) {
                                // succeeded in sending a message through TargetPicker
                                console.log(`[${res.status}] Message sent!`);
                            } else {
                                // sending message canceled
                                console.log("TargetPicker was closed!");
                            }
                        })
                        .catch(function (error) {
                            // something went wrong before sending a message
                            console.log("something wrong happen");
                        });
                }}>轉讓</button>
            </div>
            <div className='d-flex justify-content-center mx-3'>
                <h6 className='border-tic flex-fill text-center'>預約券</h6>
                <h6 className='border-tic flex-fill text-center'>即享券</h6>
            </div>
            <div className='tic-box'>
                <div className='d-md-flex justify-content-md-center'>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                </div>
                <div className='d-md-flex justify-content-md-center'>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                </div>
                <div className='d-md-flex justify-content-md-center'>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                </div>
                <div className='d-md-flex justify-content-md-center'>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                </div>
                <div className='d-md-flex justify-content-md-center'>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                    <div className='tic my-1 mx-auto mx-md-2'>
                        <p>{`我是${profile.name}的票email是${profile.email}`}</p>
                        <Link to={'/detail'}>detail</Link>
                    </div>
                </div>
            </div>
            <div className='icon-box d-flex justify-content-around position-fixed'>
                <p className='mt-2 mb-0'>商店</p>
                <p className='mt-2 mb-0'>票券</p>
                <p className='mt-2 mb-0'>行程</p>
                <p className='mt-2 mb-0'>會員</p>
            </div>
        </>
    );
}

export default HomePage