import endpointUrl from "../config";

export default async () => {
  const res = await fetch(`${endpointUrl}/auth-check`, {
    credentials: "include"
  });
  console.log(res.status);
  return res.status !== 401;
};
