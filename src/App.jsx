import './App.css'
import { MyForm } from './components/form';
import { Layout } from './components/layout';

function App() {

  return (
  <>
  <Layout>
    <MyForm isAuthenticated={false}/>
  </Layout>
  </>
  );
}

export default App
