import {
  createStore,
  createSubscriber,
  createHook,
  createContainer,
  Action,
} from "react-sweet-state";

type State = { SSID: string | undefined };
type Actions = typeof actions;

const initialState: State = {
  SSID: undefined,
};

const actions = {
  setSSID:
    (val: string | undefined): Action<State> =>
    ({ setState, getState }) => {
      setState({
        SSID: val,
      });
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useSession = createHook(Store);
