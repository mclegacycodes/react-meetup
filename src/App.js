import {Route, Switch} from 'react-router-dom';
import AllMeetUpsPage from './pages/Allmeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';

function App(){
  return (
    <Layout>
     
      <Switch>
      <Route path='/' exact>
        <AllMeetUpsPage/>
      </Route>

      <Route path='/new'>
        <NewMeetupsPage/>
      </Route>

      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;