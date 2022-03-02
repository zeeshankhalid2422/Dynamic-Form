import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
function App() {
  const [elements, setElements] = useState(null);
  const [newelements, setNewElements] = useState(null);

  useEffect(() => {
    setElements(formJSON[0]);
    setNewElements(formJSON[1]);
  }, []);

  const { form, header } = elements ?? {};
  const { form1, header1 } = newelements ?? {};

  console.log(formJSON);

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.form.forEach((field) => {
      setElements(newElements);
    });
    console.log(elements);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>{formJSON[0].header}</h3>
        <form>
          {form
            ? form.map((field, i) => <Element key={i} field={field} />)
            : null}
        </form>
        <h3>{formJSON[1].header}</h3>
        <form>
          {form
            ? formJSON[1].form.map((field, i) => (
                <Element key={i} field={field} />
              ))
            : null}
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
