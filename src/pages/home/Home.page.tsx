import './Home.page.scss';
import Button from '../../components/button/Button';

import { Link } from 'react-router-dom';

export function HomePage() {
    const imgUrl = 'https://www.smartwage.co.za/hs-fs/hubfs/logo@2x-2048x460.png?width=2048&name=logo@2x-2048x460.png';
    return (
        <div className="home">
            <header className="header">
                <img src={imgUrl} className="logo" alt="logo" />
                <h3>
                    WhatsApp Survey Results Viewer
                </h3>
                <br />
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
