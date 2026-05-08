import Notecontext from "./noteContext"

const Notestate = (props) => {
  const state = {
    "name": "SintuKumar",
    "course": "bca"
  }
  return (
    <Notecontext.Provider value={state}>
      {props.children}
    </Notecontext.Provider>

  );

}
export default Notestate