CREAZIONE FRONTEND DA 0

1 creaziopne main script ""
    -clono la cartella da github

2 creazione scafolding:
    bash: npm create vite@latest  <AppName> -- --template react
    App.js: camcello il codice superfluo
    index.css: cancello tutto il codice all'intrno
    elimino il file App.css

3 installazione pacchetto node-modules
bash: npm install

4 creazione .env e inizializziamo le variabili d'ambiente
bash: ni .env 
    -PORT = 3000
    -DB_HOST=localhost
    -DB_USER=root
    -DB_PASSWORD=<password>
    -DB_NAME=<nome-database>

5 attribuzione alias al main sript aggiungendo a quest'ultimo gli attributi necesssaai per il refresh automatico e la possibilità di importare variabili d'ambiente dal file .env
pakage.json:
package.json 
    "scripts": {
        "dev": "Vite"
    },

6 settaggio documento al fine di utilizzare la sintassi ES6 di js
    package.json:
        -{
            "name": "b-doctor-fe",
            "private": true,
            "version": "0.0.0",
            "type": "module", 👈
            ...

7 permesso per la ricezione di dati da piu server
    eslint.config.js:
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ..reactHooks.configs.recommended.rules,
            "react/prop-types": 0, 👈
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },


8 aggiungo al .gitignore i file da non pushare
    package-lock.json
    .env
    node-modules


9 installazione pacchetti necessari
bash:
    -npm install bootstrap
    -npm install axios
    -npm install react-router-dom

10 context
    10.1 creo la cartella >context dentro components
    10.2 creo il file GlobalContext.jsx
        GlobalContext.jsx:
            10.2.1 importo i metodi necessari e creo la costante per gestire i context
                -import { createContext, useState, useEffect } from "react";
                -import axios from "axios";
                -const GlobalContext = createContext();
            10.2.2 creo la funzione GlobalProvider 
                -export default GlobalProvider({ children }) {return ();};
            10.2.3 creazione variabile di stato per salvare i dati che saranno presi dal db (GlobalProvider({ children }) <qui> {return ();})
                const [serverData, setServerData ] = useState([]);
            10.2.4 creazione funzione di stato per salvare i dati che saranno presi dal db (GlobalProvider({ children }) <qui> {return ();})
                function getServerData() {
                    axios
                        .get("http://localhost:3000/people")
                        .then((response) => {
                            setServerData(response.data.items)
                        })
                        .catch((error) => console.log(error))
                        .finally("Data fetch completed")
                    }
                useEffect(getServerData, [])
            10.2.5 definizione variabili globali (GlobalProvider({ children })  {return (<qui>);})
                -<GlobalContext.Provider value={{ serverData, altreEventualiVariabiliDiStato }}>
                    {children}
                </GlobalContext.Provider>


	    

11 definiamo il Layout tramite il file Defaultlayout.jsx:
    >component:
        11.1 creo 3 cartelle
            ->layout
            ->page
            ->common
        11.2 nella cartella layout creo il file DefaultLayout.jsx
        11.3 definiamo il layout delle pagine:
            DefaultLayout.jsx:
                11.3.1 importiamo metodi e variabili necessari
                    -import { Outlet } from "react-router-dom";
                    -import HeaderComponent from "../components/HeaderComponent";
                    -import FooterComponent from "../components/FooterComponent";
                11.3.2 creo la funzione per la gestione del layout
                    -export default function DefaultLayout() {
                        return ()
                    }
                11.3.3 definiamo il return di DefaultLayout (export default function DefaultLayout() {return (<qui>)})
                    -<div>
                        <HeaderComponent />
                            <main className="container">
                                <Outlet />
                            </main>
                        <FooterComponent />
                    </div>
  						
		
      
12 organiziamo il rooting tra le pagine
    App.jsx
        12.1 importiamo i metodi necessari per il routing
            -import { BrowserRouter, Routes, Route } from 'react-router-dom';
        12.2 unserimento il routing nell file App.jsx (function App() { return (<qui>) })
            -<GlobalProvider>
                -<BrowserRouter>
                    <Routes>
                        <Route path="/" Component={HomePage} />
                        <Route path="/people" > 👈👈👈
                            <Route index Component={PeoplePage} /> 👈
                            <Route path=":id" Component={PersonPage} /> 👈
                            <Route path="subscribe" Component={AddPersonPage} /> 👈
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>



13 creazione pagine 
    13.1 dentro le cartelle >components >pages
    13.2 creo il file <...>Page.jsx
        <...>Page.jsx
            13.2.1 importi metodi e variabili necessari
                -import { useContext } from "react"
                -import { GlobalContext } from "../../context/GlobalContext"
            13.2.2 creao la funzione per renderizzare la pagina
                -export default function <...>Page() { return ()}
            13.2.3 prendo le variabili globali dal context (export default function <...>Page() { <qui> return ()})
                -const { serverdata, altreEventualiVariabiliDiStato } = useContext(GlobalContext);
            13.2.4 definisco il return della pagina (export default function <...>Page() { return (<qui>)})
                -<div>...</div>
                    

14 creazione componenti 
    14.1 dentro le cartelle >components >common
    14.2 creo il file <...>Component.jsx
        <...>Component.jsx
            14.2.1 importi metodi e variabili necessari
                -import { useContext } from "react"
                -import { GlobalContext } from "../../context/GlobalContext"
            14.2.1 creao la funzione per renderizzare il componente
                -export default function <...>Component() { return ()}
            14.2.1 prendo le variabili globali dal context (export default function <...>Component() { <qui> return ()})
                -const { serverdata, altreEventualiVariabiliDiStato } = useContext(GlobalContext);
            14.2.1 definisco il return del componente (export default function <...>Page() { return (<qui>)})
                -<div>...</div>

e niente...




