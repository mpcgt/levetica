function News() {
  return (
    <>
 <section className="articles">
    
    <div className="article">
     <div className="left">
       <img src="https://i.gifer.com/origin/60/60120cc1d020a156a8401a3a2db12c4d.gif" alt="Clavier" />
     </div>
     <div className="right">
       <p className="date">Samedi 20 mai 2023, 22h00</p>
       <h1>Bienvenue dans mon blog !</h1>
       <p className="description">...</p>
       <p className="auteur">Levetica</p>
     </div>
   </div> 
   
   
   <div className="article">
     <div className="left">
       <img src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg" alt="Paris" />
     </div>
     <div className="right">
       <p className="date">Dimanche 9 juillet 2023, 14h10</p>
       <h1>Voici la Tour Eiffel !</h1>
       <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cupiditate repellendus dolor necessitatibus. Modi, quos! Explicabo voluptates vero ullam quis ipsum impedit illum numquam cum quaerat animi? Ad, fugiat neque.</p>
       <p className="auteur">Levetica</p>
     </div>
   </div>
   
   <div className="article">
     <div className="left">
       <img src="https://www.lepoint.fr/images/2020/07/28/20580909lpw-20580940-article-jpg_7259436_1250x625.jpg" alt="Poulet-frites" />
     </div>
     <div className="right">
       <p className="date">Mercredi 6 septembre 2023, 18h30</p>
       <h1>Les poulet et les frites, plat préféré des français.</h1>
       <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cupiditate repellendus dolor necessitatibus. Modi, quos! Explicabo voluptates vero ullam quis ipsum impedit illum numquam cum quaerat animi? Ad, fugiat neque.</p>
       <p className="auteur">Levetica</p>
     </div>
   </div>
 </section>
  </>
  )
}
export default News;