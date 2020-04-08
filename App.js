import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/store"

import Fitness from "./Fitness"


const App = () => {
  
  return (
    <Provider store={store}>
      <Fitness />
    </Provider>
  )
}


export default App
