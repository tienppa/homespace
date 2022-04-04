function createCounter() {
  let counter = 0;

  function increase() {
    return ++counter;
  }

  return increase;
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// =========================================

function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }

  return logger;
}

const infoLogger = createLogger("Info");
infoLogger("Error 1");
infoLogger("Error 2");
infoLogger("Error 3");

// ========================================
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

// save in localStorage
