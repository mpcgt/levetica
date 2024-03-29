import Navbar from './assets/components/Navbar.tsx'
import imagePath from './assets/levetica.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HomeText from './home-text.tsx'

function App() {
  let items = ["Accueil","Produits","Articles","À propos"];
  return (
    <>
        <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath}
        navItems={items}
        />
      <HomeText />
  </>
  )
}

export default App