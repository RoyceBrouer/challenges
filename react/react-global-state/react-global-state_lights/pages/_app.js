import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import { uid } from "uid";

const initialLights = [
  { name: "Living Room", id: uid(), isOn: false },
  { name: "Kitchen", id: uid(), isOn: false },
  { name: "Bedroom", id: uid(), isOn: false },
  { name: "Bathroom", id: uid(), isOn: false },
  { name: "Garage", id: uid(), isOn: false },
  { name: "Porch", id: uid(), isOn: false },
  { name: "Garden", id: uid(), isOn: false },
  { name: "Office", id: uid(), isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const handleToggle = (id) => {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} handleToggle={handleToggle} />
    </Layout>
  );
}
