
import React from "react";
import { cn } from "@/lib/utils";

type BulletListProps = {
  items: {
    title?: string;
    content: string;
    strongText?: string;
  }[];
  className?: string;
  bulletColor?: string;
  titleClassName?: string;
  contentClassName?: string;
  listItemClassName?: string;
};

const BulletList: React.FC<BulletListProps> = ({
  items,
  className,
  bulletColor = "text-dragon",
  titleClassName = "font-bold text-dragon-dark mb-2 font-academy",
  contentClassName = "text-dragon-gray",
  listItemClassName = "flex items-start",
}) => {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className={listItemClassName}>
          <span className={cn("mr-2", bulletColor)}>•</span>
          <span>
            {item.title && <h4 className={titleClassName}>{item.title}</h4>}
            <span className={contentClassName}>
              {item.strongText ? (
                <>
                  <strong>{item.strongText}</strong> {item.content.substring(item.strongText.length + 1)}
                </>
              ) : (
                item.content
              )}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
