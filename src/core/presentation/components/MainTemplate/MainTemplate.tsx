import React, { PropsWithChildren } from "react";

const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>navbar</div>
      <div>{children}</div>
    </div>
  );
};

export default MainTemplate;
