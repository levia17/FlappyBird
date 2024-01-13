const STORAGE_key = "gameState";
localStorage.setItem(STORAGE_key, "start");

export function setState(state) {
  if (state == "playing") {
    localStorage.setItem(STORAGE_key, "playing");
    // return localStorage.getItem(STORAGE_key);
  } else if (state == "over") {
    localStorage.setItem(STORAGE_key, "over");
    // return localStorage.getItem(STORAGE_key);
  }
  else if (state == "pause") {
    localStorage.setItem(STORAGE_key, "pause");
    // return localStorage.getItem(STORAGE_key);
  }
}

export function State() {
  const storedState = localStorage.getItem(STORAGE_key);
  if (storedState != "start") {
    return localStorage.getItem(STORAGE_key);
  } else {
    return "start";
  }
}
