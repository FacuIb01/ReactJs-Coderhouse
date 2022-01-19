
import ReactDom from 'react-dom';

import App from "./App"
import CustomProvider from './componentes/miContexto';
import 'react-toastify/dist/ReactToastify.css';

ReactDom.render(
<CustomProvider>
<App/>
</CustomProvider>, document.getElementById("root"))