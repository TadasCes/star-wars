import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

type NavControlProps = {
  onMenuButtonClick(): void;
  open: boolean;
};

export const NavControl = ({ open, onMenuButtonClick }: NavControlProps) => {
  return (
    <nav
      className={`flex align-center justify-end text-zinc-600 rounded z-10 px-2 h-12
      transition-transform .3s ease-in-out md:translate-x-0 
    `}
    >
      <button onClick={onMenuButtonClick}>
        {!open ? (
          <GiHamburgerMenu className="h-6 w-6" />
        ) : (
          <AiOutlineClose className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
};
