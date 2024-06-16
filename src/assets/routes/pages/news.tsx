import LvtcLogo from './images/levetica-purple.png'

function News() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
     <div className='center'>
        <div className='ahsing'><h1>Articles Levetica</h1></div>
      <br />
      <hr />
      </div>

      <br />

      <div className="card-group">
  <div className="card">
    <img src={LvtcLogo} className="card-img-top" alt="Logo Levetica" />
    <div className="card-body">
      <h5 className="card-title text-light">Bientôt disponible</h5>
      <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic nihil et quod earum eum, ullam dignissimos quo consectetur mollitia.</p>
    </div>
    <div className="card-footer bg-secondary rounded-bottom">
      <small className="text-light">Dernière mise à jour le 16 juin 2024</small>
    </div>
  </div>
  <div className="card">
    <img src={LvtcLogo} className="card-img-top" alt="Logo Levetica" />
    <div className="card-body">
      <h5 className="card-title text-light">Bientôt disponible</h5>
      <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio similique non asperiores nisi illum sequi saepe, adipisci quos voluptatum culpa!</p>
    </div>
    <div className="card-footer bg-secondary rounded-bottom">
      <small className="text-light">Dernière mise à jour le 16 juin 2024</small>
    </div>
  </div>
  <div className="card">
    <img src={LvtcLogo} className="card-img-top" alt="Logo Levetica" />
    <div className="card-body">
      <h5 className="card-title text-light">Bientôt disponible</h5>
      <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nulla obcaecati assumenda quis maxime qui rem impedit cum officia porro!</p>
    </div>
    <div className="card-footer bg-secondary rounded-bottom">
      <small className="text-light">Dernière mise à jour le 16 juin 2024</small>
    </div>
  </div>
</div>
</div>
  )
}

export default News;