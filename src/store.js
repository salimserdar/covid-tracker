import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import totalCaseRuducer from "./reducer/totalCaseReducer";
import allCountryCases from "./reducer/allCountryCases";
import selectedCountryReducer from "./reducer/selectedCountryReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
  thunk,
];

const rootReducer = combineReducers({
  totalCaseRuducer,
  allCountryCases,
  selectedCountryReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
