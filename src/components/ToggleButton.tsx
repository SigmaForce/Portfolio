import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu = false,
  handleToggleMenu,
}: ToggleButtonProps) => {
  const title = isOpenMenu ? "Fechar" : "Abrir";
  return (
    <>
      <button onClick={handleToggleMenu} title={title}>
        {isOpenMenu && <Cross1Icon className="size-6 z-50 relative" />}
        {!isOpenMenu && <HamburgerMenuIcon className="size-6" />}
      </button>
    </>
  );
};
