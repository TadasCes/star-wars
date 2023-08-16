import Link from "next/link";

type NavElementProps = {
  title: string;
  to: string;
};

export const NavElement = ({ title, to }: NavElementProps) => {
  return (
    <Link href={to}>
      <div className="p-2 flex justify-center">
        <div>{title}</div>
      </div>
    </Link>
  );
};
