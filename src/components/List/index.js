import React from "react";
import { Card } from "../Card";

export const List = ({ list }) => {
  return (
    <>
      {list.map((item, i) => 
        <Card key={i} itemFood={item} />
      )}
    </>
    // <div>

    //     {/* <pre>{JSON.stringify(list,null,4)}</pre> */}

    // </div>
  );
};
