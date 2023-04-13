import React from 'react'
import pic from '../bg5.jpg'
import './Detail.scss'
import { Button } from 'bootstrap'

function Detail() {
    return (
        <div className='detail-wrap'>
            <div className='detail-pic-box mx-auto'>
                <img src={pic} className='pic' />
            </div>
            <div className='detail-word-box mx-auto mb-3'>
                <p>北投五星</p>
                <h4>極上一泊二食 | 2022ITF台北國際旅展住宿券極上一泊二食 </h4>
                <div className='d-flex justify-content-between border-word my-2 pb-3'>
                    <p>$19,999</p>
                    <button className='btn btn-info'>1張</button>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>優惠期限 : 至2023/11/04止</p>
                    <p>注意</p>
                </div>
            </div>
            <div className='detail-tic-box mx-auto'>
                <p>票券列表</p>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
                <div className='d-flex border-word justify-content-between pb-1 my-2'>
                    <p>ABC2023010120230630</p>
                    <p>詳情</p>
                </div>
            </div>
            <div className='icon-box d-flex justify-content-around position-fixed'>

            </div>
        </div>
    )
}

export default Detail