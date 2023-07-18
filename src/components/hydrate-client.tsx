"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;

/* https://blog.gogrow.dev/setting-up-react-query-in-your-next-js-13-app-e8edea0d20cc */