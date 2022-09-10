import React from "react";

function Smoke(props) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem, fugit commodi inventore molestias explicabo aspernatur id mollitia non sapiente incidunt. Illum dolorum placeat ut ad, aliquid libero officiis? Explicabo!";
  const [state, setState] = React.useState(() =>
    text.split("").map(() => false)
  );

  function animate(index) {
    const copyState = [...state];
    copyState[index] = true;
    setState(copyState);

    // console.log("====================================");
    // console.log(state);
    // console.log(copyState);
    // console.log("====================================");
  }

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <button
        onClick={() => setState(() => state.map((s) => false))}
        className="bg-cyan-800 rounded-md border-2 text-white py-2 active:shadow-white active:shadow-inner"
      >
        Reset
      </button>
      <div className="cursor-pointer text-white w-2/3 m-auto flex flex-wrap">
        {text.split("").map((c, i) => (
          <span
            key={c + i}
            className={state[i] ? `animate-smoke` : ""}
            onMouseOver={() => animate(i)}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Smoke;
