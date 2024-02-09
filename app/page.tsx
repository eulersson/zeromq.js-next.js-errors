import Image from "next/image";

import { Push } from "zeromq";

export default function Home() {

  // This throws an error
  const sock = new Push();

  return (
    <p>Example app</p>
  );
}
