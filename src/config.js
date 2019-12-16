let endpointUrl = "";
const port = 4000;
if (process.env.NODE_ENV == "development") {
  endpointUrl = `http://localhost:${port}`;
}
if (process.env.NODE_ENV == "production") {
    endpointUrl = `http://ec2-3-122-193-228.eu-central-1.compute.amazonaws.com:${port}`;
}

export default endpointUrl;
