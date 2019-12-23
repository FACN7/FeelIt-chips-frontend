import endpointUrl from "../config";

export default async () => {
  const res = await fetch(`${endpointUrl}/auth-check`, {
    credentials: "include"
  });
  if (res.status === 401) return {isAuthenticated:false};
  const data = await res.json();
  return data;
};
