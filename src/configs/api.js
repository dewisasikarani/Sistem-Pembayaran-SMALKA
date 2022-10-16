let api = "http://localhost:3000";
if (window.location.hostname === "localhost") {
  api = "http://localhost:3000";
} else {
  api = "https://ppdbsmamalkautsarpk.vercel.app";
}

export default api;