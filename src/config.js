let endpointUrl = "";
const port = 4000;
if (process.env.NODE_ENV === "development") {
  endpointUrl = `http://localhost:${port}`;
}
if (process.env.NODE_ENV === "production") {
    endpointUrl = `https://feelit-backend.herokuapp.com`;
}

export default endpointUrl;
