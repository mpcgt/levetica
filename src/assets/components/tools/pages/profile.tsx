import NavbarTools from "../NavBarTools";

function Profile() {
    return (
      <>
      <NavbarTools />
      

      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex={-1} role="dialog" id="modalSignin">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0">
        <h2 className="fw-bold mb-0 fs-2 text-dark">S'inscrire gratuitement</h2>
        <h4 className="italic mb-0 text-danger">Bientôt disponible</h4>
      </div>

      <div className="modal-body p-5 pt-0">
        <form className="">
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
            <label className="text-dark" htmlFor="floatingInput">Adresse mail</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
            <label className="text-dark" htmlFor="floatingPassword">Mot de passe</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" disabled>S'incrire</button>
          <small className="text-body-secondary">En cliquant sur "S'inscrire", vous acceptez les conditions d'utilisation.</small>
          <hr className="my-4" />
          <h2 className="fs-5 fw-bold mb-3 text-dark">Ou utiliser un application tiers</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" type="submit" disabled>
            <i className="fa-brands fa-google fs-4"></i>&nbsp;&nbsp;<span className="fw-bold">S'inscrire avec Google</span>
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit" disabled>
            <i className="fa-brands fa-facebook fs-4"></i>&nbsp;&nbsp;<span className="fw-bold">S'inscrire avec Facebook</span>
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit" disabled>
            <i className="fa-brands fa-github fs-4"></i>&nbsp;&nbsp;<span className="fw-bold">S'inscrire avec GitHub</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  export default Profile;
  