import React, { ReactNode } from "react";

const Popup: React.FC<{
  children: ReactNode;
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, play }) => {
  if (!play) return null; // Only render if `play` is true

  return (
    <div
      className={`z-50 popup ${
        play ? "open" : "close"
      }  flex items-center justify-center`}
    >
      {/* Background overlay */}
      <div className="absolute  bg-[#9b9b9b] opacity-50"></div>

      {/* Popup content */}
      <>{children}</>
    </div>
  );
};

export default Popup;
