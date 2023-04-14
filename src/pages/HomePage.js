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
        async function login() {
            try {
                await liff.ready;
                if (!liff.isLoggedIn()) {
                    liff.login()
                    return
                }
                const idToken = await liff.getDecodedIDToken()
                setProfile(idToken)
            } catch (err) {
                // 發生錯誤
                console.log(err.code, err.message)
                alert(err.message)
            }
        }
        login()
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
                                        "hero": {
                                            "type": "image",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                                            "size": "full",
                                            "aspectRatio": "20:13",
                                            "aspectMode": "cover",
                                            "action": {
                                                "type": "uri",
                                                "uri": "http://linecorp.com/"
                                            }
                                        },
                                        "body": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "Brown Cafe",
                                                    "weight": "bold",
                                                    "size": "xl"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "baseline",
                                                    "margin": "md",
                                                    "contents": [
                                                        {
                                                            "type": "icon",
                                                            "size": "sm",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                                        },
                                                        {
                                                            "type": "icon",
                                                            "size": "sm",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                                        },
                                                        {
                                                            "type": "icon",
                                                            "size": "sm",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                                        },
                                                        {
                                                            "type": "icon",
                                                            "size": "sm",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                                        },
                                                        {
                                                            "type": "icon",
                                                            "size": "sm",
                                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "4.0",
                                                            "size": "sm",
                                                            "color": "#999999",
                                                            "margin": "md",
                                                            "flex": 0
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "margin": "lg",
                                                    "spacing": "sm",
                                                    "contents": [
                                                        {
                                                            "type": "box",
                                                            "layout": "baseline",
                                                            "spacing": "sm",
                                                            "contents": [
                                                                {
                                                                    "type": "text",
                                                                    "text": "Place",
                                                                    "color": "#aaaaaa",
                                                                    "size": "sm",
                                                                    "flex": 1
                                                                },
                                                                {
                                                                    "type": "text",
                                                                    "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                                                                    "wrap": true,
                                                                    "color": "#666666",
                                                                    "size": "sm",
                                                                    "flex": 5
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "type": "box",
                                                            "layout": "baseline",
                                                            "spacing": "sm",
                                                            "contents": [
                                                                {
                                                                    "type": "text",
                                                                    "text": "Time",
                                                                    "color": "#aaaaaa",
                                                                    "size": "sm",
                                                                    "flex": 1
                                                                },
                                                                {
                                                                    "type": "text",
                                                                    "text": "10:00 - 23:00",
                                                                    "wrap": true,
                                                                    "color": "#666666",
                                                                    "size": "sm",
                                                                    "flex": 5
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "footer": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "spacing": "sm",
                                            "contents": [
                                                {
                                                    "type": "button",
                                                    "style": "link",
                                                    "height": "sm",
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "CALL",
                                                        "uri": "https://linecorp.com"
                                                    }
                                                },
                                                {
                                                    "type": "button",
                                                    "style": "link",
                                                    "height": "sm",
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "WEBSITE",
                                                        "uri": "https://linecorp.com"
                                                    }
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [],
                                                    "margin": "sm"
                                                }
                                            ],
                                            "flex": 0
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