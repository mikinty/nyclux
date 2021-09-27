import React from "react";
import { useParams } from 'react-router-dom'

import { APARTMENTS } from "../data";

/**
 * Information page for a building, describing its features.
 */

export default function BuildingPage() {
  const { name } = useParams();
  const data = APARTMENTS[name];
  return <div>{JSON.stringify(data)}</div>;
}
