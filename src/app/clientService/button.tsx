"use client"

import React, { useState } from 'react';
import Text from './text';

export default function Btn() {

    const [count, setcount] = useState(60)

    const sum = function () { setcount(count+ 1); }

    return (
    <>
    <button onClick={sum}>나는버튼</button>
    <div>{count}</div>
    </>
    )


}

