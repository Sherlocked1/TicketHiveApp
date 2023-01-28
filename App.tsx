import Main from "./src/main";
import {Provider} from 'react-redux'
import store from "./src/redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;