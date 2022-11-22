import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ReadDCsgo() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>read d cs go</h1>
    </>
  );
}
