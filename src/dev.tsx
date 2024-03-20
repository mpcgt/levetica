import Navbar from './assets/components/Navbar.tsx'
import imagePath from './assets/levetica.svg'
import tools from '../src/assets/images/tools.png'
import './App.css'
import './index.css'

function Dev() {
  let items = ["Accueil","Produits","Articles","À propos"];
  return (
    <>
      <Navbar 
        brandName='Levetica' 
        imageSrcPath={imagePath}
        navItems={items}
      />
      <div className='center'>
        <img alt="Tools" height="450" width="700" src={tools} />
      </div>
      <br />
      <br />
      <br />
      <h1>Bientôt disponible !</h1>
    </>
  )
}

export default Dev;