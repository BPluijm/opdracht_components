import React from 'react';
import './App.css';

function App() {
    const [formName, setFormName] = React.useState('');
    const [formAge, setFormAge] = React.useState('');
    const [reference, setReference] = React.useState('anders')
    const [formComments, setFormComments] = React.useState('')

    function handleSubmit(e) {
      e.preventDefault();
        console.log(formComments, reference, formAge, formName);
    }

  return (
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Gegevens</legend>

            <label htmlFor="name-details">
                Naam:
                <input
                    type="text"
                    name="name"
                    id="name-details"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                />
            </label>

            <label htmlFor="age-details">
                Leeftijd:
                <input
                    type="number"
                    name="age"
                    id="age-details"
                    value={formAge}
                    onChange={(e) => setFormAge(e.target.value)}
                />
            </label>
        </fieldset>

          <fieldset>
              <legend>Jouw review</legend>

              <p>Hoe heb je dit recept gevonden?</p>
              <select
                  name="options"
                  id="select-box"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
              >
                  <option value="google">Google</option>
                  <option value="vriend">Vriend</option>
                  <option value="advertentie">Advertentie</option>
                  <option value="anders">Anders</option>
              </select>

              <label htmlFor="comments">
                  Opmerkingen:
                  <textarea
                      name="comments"
                      id="comments"
                      rows="5"
                      cols="50"
                      placeholder="Wat vond je van het recept?"
                      value={formComments}
                      onChange={(e) => setFormComments(e.target.value)}
                  >
                  </textarea>
              </label>

              <button type="submit">
                  Versturen
              </button>
          </fieldset>
      </form>
  );
}

export default App;
