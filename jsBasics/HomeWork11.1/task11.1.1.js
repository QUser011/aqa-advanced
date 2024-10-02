const delayedTextMessage = (text, delay) => {
  setTimeout(() => {
    console.log(text);
  }, delay);
};

delayedTextMessage("text delay", 2000);
