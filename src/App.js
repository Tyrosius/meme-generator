
import './App.css';

function App() {
  /* Level 1 */
  /* fetch from URL: https://api.imgflip.com/get_memes mit useState speichern und mit useEffect herunterladen */
  /* res.data.memes[0] first meme */
  /* res.data.memes[0].url link to first image in useState speichern */
  /* res.data.memes[0].box_count anzahl der textfelder? oder nur 2(oben und unten)? eingabe mit useState speichern */
  /* bild position:relative textfelder position:absolute */
  /* button"random": res.data.memes[random.floor*res.data.memes.length() (zufälliger index)] index in useState speichern */
  /* next/back button: index +/- 1 (index=res.data.memes.length-1 => kein next /index=0 => kein back) index in useState speichern */

  /* Level 2 */
  /* input type="file" accept="image/" image in useState speichern /dem memes Array hinzufügen? */
  /* fixed size to prevent overflow */

  /* Level 3 */
  /* dom-to-image für speicherfunktion(exportieren) */
  /* reste button: useState für texts leeren ("") und für index auf 0, useState für image auf res.data.memes[0].url setzen */


  return (
    <div className="App">

    </div>
  );
}

export default App;
