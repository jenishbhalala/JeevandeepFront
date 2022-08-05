/* eslint-disable import/no-anonymous-default-export */
import {
  VOLUNTEER_GET_REQUEST, VOLUNTEER_GET_SUCCESS, VOLUNTEER_FAIL,
  BECOME_CREATE_REQUEST, BECOME_CREATE_SUCCESS, BECOME_FAIL,
  SLIDER_GET_REQUEST, SLIDER_GET_SUCCESS, SLIDER_GET_FAIL, 
  CONTACT_GET_REQUEST, CONTACT_GET_SUCCESS, CONTACT_GET_FAIL, 
  CONTACT_CREATE_REQUEST, CONTACT_CREATE_SUCCESS, CONTACT_CREATE_FAIL
} from '../types';

export const volunteerGetReducer = (state = { volunteers: [], loading: true }, action) => {
  switch (action.type) {
    case VOLUNTEER_GET_REQUEST:
      return { loading: true };
    case VOLUNTEER_GET_SUCCESS:
      return { loading: false, volunteers: action.payload };
    case VOLUNTEER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const becomeCreateReducer = (state = { becomeCreate: [], loading: true }, action) => {
  switch (action.type) {
    case BECOME_CREATE_REQUEST:
      return { loading: true };
    case BECOME_CREATE_SUCCESS:
      return { loading: false, becomeCreate: action.payload };
    case BECOME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sliderGetReducer = (state = { sliderData: [], loading: true }, action) => {
  switch (action.type) {
    case SLIDER_GET_REQUEST:
      return { loading: true };
    case SLIDER_GET_SUCCESS:
      return { loading: false, sliderData: action.payload };
    case SLIDER_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactGetReducer = (state = { createContact: [], loading: true }, action) => {
  switch (action.type) {
    case CONTACT_CREATE_REQUEST:
      return { loading: true };
    case CONTACT_CREATE_SUCCESS:
      return { loading: false, createContact: action.payload };
    case CONTACT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};