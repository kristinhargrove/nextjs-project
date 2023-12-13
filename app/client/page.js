"use client";

import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        INCREASE
      </button>
    </div>
  );
};

export default Client;
