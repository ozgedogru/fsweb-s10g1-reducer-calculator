export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_REC = "MEMORY_REC";
export const MEMORY_DEL = "MEMORY_DEL";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const change_operation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clear_display = () => {
  return { type: CLEAR_DISPLAY };
};

export const memory_plus = () => {
  return { type: MEMORY_PLUS };
};

export const memory_rec = () => {
  return { type: MEMORY_REC };
};
export const memory_del = () => {
  return { type: MEMORY_DEL };
};
