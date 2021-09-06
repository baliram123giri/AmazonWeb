// import area

import React from "react"
import { Component } from "react";

class App extends Component{
    render(){
        return(
           <>
              <header>
                 {/* --header-top-- */}
                 <div className="header-top"></div>
                 <div className="header-bottom"></div>
              </header>
              {/* ---MainArea---Start-- */}
              <div className="main"></div>
              {/* ---MainArea---End-- */}
              {/* ---footer--Start-- */}
            <footer>

            </footer>
              {/* ---footer--End-- */}
           </>
        )
    }
}
export default App