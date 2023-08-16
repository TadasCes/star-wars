import { NavControl } from "./NavControl";

type HeaderProps = {
  onMenuButtonClick(): void;
  open: boolean;
};

export const Header = ({ open, onMenuButtonClick }: HeaderProps) => {
  return (
    <div className="col-span-6 row-span-1 md:hidden h-fit py-4">
      <div className="grid grid-cols-2 ">
        <div></div>
        <NavControl onMenuButtonClick={onMenuButtonClick} open={open} />
      </div>
    </div>
  );
};
