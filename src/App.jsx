import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Layout } from './components'



export default function App() {
  // Any .tsx or .jsx files in /routes will become a route
  const pages = import.meta.globEager("./routes/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <BrowserRouter>
      <Layout>
        <Routes pages={pages} />
      </Layout>
    </BrowserRouter>
  );
}
