import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <h1>Hi!</h1>
      <p>The layout component can be used to wrap any page in the app and will automatically include the header and footer.<br/><br/>The header and footer are also overridable via props</p>
      <p> I am a big fan of my breadcrumb component, it automatically makes it based on the url path, click on the makea listing to see it work</p>
    </Layout>
  )
}

export default App
