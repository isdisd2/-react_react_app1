import React, { Component, useState, useEffect, useRef, useMemo } from "react";

function Storage() {
    let var1 = { name: "xxx" };
    const date = new Date();
    localStorage.setItem("LocStorage", JSON.stringify(var1));
    sessionStorage.setItem("SessStorage", JSON.stringify(var1));
    document.cookie =
        "name=CokyName1; expires=" +
        new Date(date.getTime() + 1 * 10000).toUTCString();
}

export default Storage;
