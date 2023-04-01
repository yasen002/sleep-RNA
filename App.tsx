import { Provider } from "react-redux";
import { store } from "./app/store";
import Main from "./src/Main";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
