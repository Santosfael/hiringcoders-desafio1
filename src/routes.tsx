import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;