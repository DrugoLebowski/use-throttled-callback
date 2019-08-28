// Vendor
import React from "react";

// Internal
import { useThrottledCallback } from "../..";


export default (({ cb, millisecods }) =>
  <button onClick={useThrottledCallback(cb, millisecods)} />
) as React.FC<{
  cb: () => any;
  millisecods: number;
}>;
