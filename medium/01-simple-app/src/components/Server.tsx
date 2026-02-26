export default function Server() {
  const isOffline = false;

  if (isOffline) {
    return <div>Server is offline</div>;
  }

  return <div>Server is online</div>;
}
