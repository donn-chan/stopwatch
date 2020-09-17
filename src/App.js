import React from 'react';

import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';

const App = () => {
    return (
        <div className="container">
            <h1 className="app-title">Timers</h1>
            <div>
                <Stopwatch />
                <Countdown />
            </div>
        </div>
    )
}

export default App;