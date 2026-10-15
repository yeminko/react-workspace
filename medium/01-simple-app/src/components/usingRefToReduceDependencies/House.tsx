import { useEffect, useState } from "react";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

export default function House() {
  const [cleanBedroom, setCleanBedroom] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={() => setCleanBedroom((prev) => !prev)}>
        Clean Bedroom
      </button>
      <div style={{ display: "flex", gap: "20px" }}>
        <LivingRoom />
        <Bedroom />
      </div>
    </>
  );
}
