import React from 'react';

export default function UrlIdComp({
  params
}: {
  params: { urlId: string };
}) {
  return <h1>{params?.urlId}입니다.</h1>;
}