import transition from "./transition"

// eslint-disable-next-line react-refresh/only-export-components
function News() {
  return (
    <div>
      <br />
      <br />
     <div className='center'>
        <div className='ahsing fs-1'><h1>Articles Levetica</h1></div>
      <br />
      <hr />
      </div>

      <br />

      <main className="container">
  <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div className="col-lg-6 px-0">
      <h1 className="display-4 fst-italic">Nouvelle version 1.3.0</h1>
      <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">En savoir plus&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <div className="text-start">
          <strong className="d-inline-block mb-2 text-primary-emphasis">Bientôt disponible</strong>
          <h3 className="mb-0">Bientôt disponible</h3>
          <div className="mb-1 text-body-secondary">21/06/2024</div>
          <p className="card-text mb-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci exercitationem facere reprehenderit soluta nihil doloremque quo quam praesentium cupiditate.</p>
          <a href="#" className="icon-link gap-1 text-dark icon-link-hover stretched-link">
            En savoir plus
            <i className="fa-solid fa-arrow-right"></i>
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
          </div>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="20%" y="50%" fill="#eceeef" dy=".3em">Bientôt disponible</text></svg>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
        <div className="text-start">
        <strong className="d-inline-block mb-2 text-primary-emphasis">Bientôt disponible</strong>
        <h3 className="mb-0">Bientôt disponible</h3>
        <div className="mb-1 text-body-secondary">21/06/2024</div>
        <p className="card-text mb-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci exercitationem facere reprehenderit soluta nihil doloremque quo quam praesentium cupiditate.</p>
        <a href="#" className="icon-link gap-1 text-dark icon-link-hover stretched-link">
            En savoir plus
            <i className="fa-solid fa-arrow-right"></i>
            <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
          </a>
        </div>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="20%" y="50%" fill="#eceeef" dy=".3em">Bientôt disponible</text></svg>
        </div>
      </div>
    </div>
  </div>
  </main>
</div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default transition(News);