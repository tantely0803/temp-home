"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Title from "./Title";

export default function Descrition({ descrition }: { descrition: string }) {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = descrition.split("");
  const isLongDescription = words.length > 100;

  const toogleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join("") + "..."
      : descrition;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toogleDescription}>
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}
