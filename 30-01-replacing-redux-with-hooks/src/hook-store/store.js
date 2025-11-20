import { useEffect, useState } from "react";

let globalState = {};

let listeners = [];

let actions = {};

export const useStore = (shouldListen = true) => {
  const setSate = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setSate);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setSate);
      }
    };
  }, [setSate, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
