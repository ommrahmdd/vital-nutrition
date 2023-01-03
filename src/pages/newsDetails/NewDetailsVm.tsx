import React, { useState } from "react";
import type { INew } from "../../models/INew";

export default function useNewDetails() {
  const [_new, setNew] = useState<INew>();
  const handleUpdateNew = (data: INew) => {
    setNew(data);
  };
  return {
    _new,
    handleUpdateNew,
  };
}
