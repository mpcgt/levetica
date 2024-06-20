import Toast from "react-bootstrap/Toast";
import Logo from "./levetica.png";

function Toasts() {
  return (
    <Toast className="position-fixed bottom-0 end-0 ">
      <Toast.Header>
        <img src={Logo} width={20} className="rounded me-2" alt="" />
        <strong className="me-auto">Levetica</strong>
        <small>À l'instant</small>
      </Toast.Header>
      <Toast.Body className="text-dark">
        Ce site web est actuellement en construction, ce site sera
        officiellement publiée le <b>1er juillet 2024 à 18h.</b>{" "}
        <i>
          Vous êtes actuellement dans la version 1.3.0-beta.7 (20 juin 2024)
        </i>
      </Toast.Body>
    </Toast>
  );
}

export default Toasts;
