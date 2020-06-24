 import React from "react";
 import Header from '../header/Header';
 import './Main.css';

 export default props =>
 <React.fragments>
     <Header {... props }/>
     <main>
         conteudo
     </main>
 </React.fragments>