import React from 'react'
import Header from './component/header/common_header';
import ReservableForm from './component/form/ReservableForm';

// import Meta from './components/wrapper/meta'


class ReserveSetting extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>予約可能時間登録</h1>
                </div>
                <ReservableForm />
            </div>
        )
    }
}


export default ReserveSetting;