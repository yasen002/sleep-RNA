import { Provider } from "react-redux";
import { store } from "./app/store";
import Main from "./src/Main";
import { TailwindProvider, Utilities } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  const util: Utilities = utilities;
  return (
    <Provider store={store}>
      <TailwindProvider utilities={util}>
        <Main />
      </TailwindProvider>
    </Provider>
  );
}
