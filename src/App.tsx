import Navbar from './assets/components/Navbar.tsx'
import FooterEnd from './assets/components/Footer.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Text from './index.tsx'
import './App.css'
import './index.css'

function App() {
  let items = ["Accueil","Outils","Articles","À propos"];
  return (
    <>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath} 
        navItems={items}
        />
      <Text />
    <FooterEnd />
  </>
  )
}

export default App