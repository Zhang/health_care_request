import _get from 'lodash.get';

// should state be defaulted as an array or obj? I suppose it doesn't matter too much
const healthForm = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_FORM_DATA':
      return data;
    case 'SET_TEXT_INPUT_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [data.id]: {
            ...state.formData[data.id],
            content: data.value,
          }
        }
      };
    case 'ADD_INPUT_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [data.id]: data.style
        }
      };
    default:
      return state;
  }
}

export default healthForm;
