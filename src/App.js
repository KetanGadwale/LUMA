import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [state, setState] = useState('');

    useEffect(() => {
        async function getDataFromLambda() {
            const res = await fetch(
                'https://4736oofnuj34o7fpeskgmlxk5u0ekatp.lambda-url.us-east-1.on.aws/'
            );
            const data = await res.json();
            console.log(data);
            setState(data);
        }
        getDataFromLambda();
    }, []);

    return (
        <div className='App'>
            <h1>LUMA : Powering your financial Dream. {state} </h1>
        </div>
    );
}

export default App;
