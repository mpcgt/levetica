import NavBarNew from './assets/components/NavbarNew.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HomeText from './home-text.tsx'
import BannerHome from './assets/components/banner.tsx'

function App() {
  return (
    <>
      <NavBarNew />
      <HomeText />
      <BannerHome />
  </>
  )
}

export default App