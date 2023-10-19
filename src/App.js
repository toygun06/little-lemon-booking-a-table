import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Menupage from "./components/Menupage";
import Reservation from "./components/Reservation"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Homepage />
          <Menupage />
          <Reservation />
          <Contact />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
