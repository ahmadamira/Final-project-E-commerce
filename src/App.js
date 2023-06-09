
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routers from "./Routes";
import Productsprovider from "./Provider/Productsprovider";
import Carttotalprovider from "./Provider/Carttotalprovider";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { AuthContextProvider } from "./Context/Authcontext";
function App() {
  return (
    <AuthContextProvider>
      <Carttotalprovider>
        <Productsprovider>
          <SnackbarProvider>
            <Header />
            <Routers />
            <Footer />
          </SnackbarProvider>
        </Productsprovider>
      </Carttotalprovider>
    </AuthContextProvider>
  );
}

export default App;
