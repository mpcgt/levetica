import Navbar from './assets/components/Navbar.tsx'
import FooterEnd from './assets/components/Footer.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Dev from './dev.tsx'

function App() {
  let items = ["Accueil","Outils","Articles","À propos"];
  return (
    <>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath}
        navItems={items}
        />
      <Dev />
    <FooterEnd />
  </>
  )
}

export default App