import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Header from './component/header/common_header';



class App extends React.Component {

    render() {
        return <div>
            <Header />
        </div>
    }

}





ReactDOM.render(<App />, document.getElementById("app"));