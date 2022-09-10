import React from "react";

function SocialIcons({ Icons }) {
  return (
    <div className="text-[#FCAC12]">
      {Icons.map((icon) => (
        <span key={icon.name} className="p-2 curser-pointer inline-flex items-center">
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
}

export default SocialIcons;
