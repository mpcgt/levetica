import NavBarNew from './assets/components/NavbarNew.tsx'
import tools from '../src/assets/images/tools.png'
import './App.css'
import './index.css'

function Dev() {
  return (
    <>
      <NavBarNew />
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