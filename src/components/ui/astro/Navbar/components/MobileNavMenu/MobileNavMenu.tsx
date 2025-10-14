import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import type { NavLink } from "@ui-components/astro/Navbar";
import { useState } from "react";

interface Props {
  navLinks: NavLink[];
}

export const MobileNavMenu = ({ navLinks }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={"flex items-center justify-center md:hidden"}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <HamburgerMenuIcon
            color="var(--color-text-contrast)"
            width={"1.5rem"}
            height={"1.5rem"}
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content className="glass absolute top-0 z-50 flex h-[100dvh] w-[100dvw] flex-col p-4 px-6 pt-[25dvh] transition-opacity duration-300 ease-in-out data-[state=closed]:animate-[fadeOut_0.2s_ease-in-out] data-[state=open]:animate-[fadeIn_0.2s_ease-in-out]">
            <Dialog.Title className="hidden">Navigaion menu</Dialog.Title>
            <Dialog.Description className="hidden">
              Navigate to different sections of the website
            </Dialog.Description>
            <Dialog.Close className="absolute top-6 left-6">
              <Cross1Icon
                width={"1.5rem"}
                height={"1.5rem"}
                color="var(--color-text-contrast)"
              />
            </Dialog.Close>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ label, ariaLabel, link }) => (
                <li key={label}>
                  <a
                    href={link}
                    aria-label={ariaLabel}
                    className="text-text-contrast text-4xl font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
