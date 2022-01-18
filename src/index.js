
import ReactDom from 'react-dom';

import App from "./App"
import CustomProvider from './componentes/miContexto';

ReactDom.render(
<CustomProvider>
<App/>
</CustomProvider>, document.getElementById("root"))