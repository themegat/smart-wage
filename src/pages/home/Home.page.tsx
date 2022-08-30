import logo from '../../logo.svg';
import './Home.page.scss';
import Button from '../../components/button/Button';

import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>


                <Link to="/surveys">
                    <Button value="Go to Surveys" icon='chevron-right' click={test} />
                </Link>
            </header>
        </div>
    );
}

function test() {
    console.log("This is the test message");
}
