let endpointUrl = "";
const port = 4000;
if (process.env.NODE_ENV == "development") {
  endpointUrl = `http://localhost:${port}`;
}
if (process.env.NODE_ENV == "production") {
  // TODO: change this endpoint for production, it shouldn"t be localhost:4000
  //   endpointUrl = `http://localhost:${port}`;
  throw new Error("you need to set production sever url here");
}

export default endpointUrl;
