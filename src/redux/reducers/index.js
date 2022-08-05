import { combineReducers } from 'redux';
import { becomeCreateReducer, contactGetReducer, sliderGetReducer, volunteerGetReducer } from './rootReducer';


export default combineReducers({
    volunteer: volunteerGetReducer,
    becomeCreate: becomeCreateReducer,
    getSlider: sliderGetReducer,
    createContact: contactGetReducer
});
