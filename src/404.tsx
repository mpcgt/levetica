import { useNavigate } from 'react-router-dom';
import Error404 from './assets/404.gif'
import './App.css'

function Error() {
  const navigate = useNavigate();
  return (
    <>
<div className='text-center'>
      <br />
        <br />
        <br />
        <br />
        <img src={Error404} height="300" width="300" className="logo mx-auto" alt="Error 404" />
        <br />
        <br />
        <h4>D'une manière ou d'une autre, vous vous êtes perdu dans les profondeurs de l'espace.</h4>
        <br />
        <button className='ms-3 btn btn-secondary' onClick={() => navigate("/")}>Retour</button>
</div>
  </>
  )
}
export default Error;