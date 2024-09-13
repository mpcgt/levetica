/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

const CLIENT_ID = "Ov23liU3WPWyMJvgbhv9"

function Login() {
  const [rerender, setRerender] = useState(false)
  const [userData, setUserData] = useState({})
  // Transférer l'utilisateur vers l'écran de connexion de GitHub (nous transmettons l'ID du client)
  // L'utilisateur est maintenant du côté de GitHub et se connecte (github.com/login)
  // Lorsque l'utilisateur décide de se connecter ... il est redirigé vers levetica.vercel.app
  // MAIS levetica.vercel.app/?code=ASDFASDFASDFASDF
  // Utiliser le code pour obtenir le jeton d'accès (le code ne peut être utilisé qu'une seule fois)
  
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam= urlParams.get("code");
    console.log(codeParam);
    
    // Come back and still be logged in with GitHub (Local Storage)
    
    if(codeParam && (localStorage.getItem("accessToken") === null)) {
      async function getAccessToken() {
        await fetch("https://levetica.vercel.app/getAccessToken?code=" + codeParam, {
          method: "GET"
        }).then((response) => {
          return response.json()
        }).then((data) => {
          console.log(data)
          if(data.access_token) {
            localStorage.setItem("accessToken", data.access_token)
            setRerender(!rerender)
          }
        })
      }
      getAccessToken()
    }
  }, []);

  async function getUserData() {
    await fetch("https://levetica.vercel.app/getUserData", {
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + localStorage.getItem("accesstoken") // Porter ACCESSTOKEN
      }
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      // data = { name: "Elon Musk", date of birth: "some day", }
      setUserData(data)
    })
  }
}
  
function OAuth() {
  window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)

  function setRerender(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

  return localStorage.getItem("accessToken") ? (
    <>
      <h1>Vous êtes bien connecté !</h1>
      <button
        onClick={() => {
          localStorage.removeItem("accessToken")
          setRerender(false)
        }}
      >
        Se déconnecter
      </button>
    </>
  ) : (
    <>
      <h3>Vous n'êtes pas connecté ?</h3>
      <button onClick={OAuth}>Se connecter</button>
    </>
  )
  
}
    
    export default OAuth;