const addMouseClickListener = (callBack) => {
  document.addEventListener('mousedown', callBack);
  document.addEventListener('touchstart', callBack);
};

const removeMouseClickListener = (callBack) => {
  document.removeEventListener('mousedown', callBack);
  document.removeEventListener('touchstart', callBack);
};

export { addMouseClickListener, removeMouseClickListener };
