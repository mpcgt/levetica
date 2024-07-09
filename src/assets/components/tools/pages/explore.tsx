import NavbarTools from "../NavBarTools";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <>
      <NavbarTools />
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex={-1}
        role="dialog"
        id="modalChoice"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-3 shadow bg-dark">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-0">Oh non... 😓</h5>
              <p className="mb-0">
                Cette page est actuellement en cours de développement... 🚧
              </p>
            </div>
            <div className="modal-footer flex-nowrap justify-content-center p-0">
              <Link to="/products">
                <button
                  type="button"
                  className="btn btn-lg btn-primary mt-3 mb-3"
                >
                  <strong>D'accord !</strong>
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-lg btn-secondary mt-3 mb-3"
                  data-bs-dismiss="modal"
                >
                  Aller dans la page d'accueil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Explore;
