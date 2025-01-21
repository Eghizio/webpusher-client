import { classed } from "@tw-classed/react";
import { Page, useNavigation } from "../../context/NavigationContext";
import { config } from "../../config";
import { useCallback } from "react";

const pages = Object.values(Page);

export const Header = () => {
  const { navigateTo } = useNavigation();

  const goHome = () => navigateTo(Page.Dashboard);

  return (
    <TopBar className="justify-between">
      <Logo className="cursor-pointer hover:brightness-95" onClick={goHome}>
        Web Pusher
      </Logo>

      {config.debug ? (
        <Side>
          {pages.map((page) => (
            <PageButton key={page} page={page} />
          ))}
        </Side>
      ) : null}
    </TopBar>
  );
};

const TopBar = classed.header("p-3 w-full flex items-center gap-2 bg-blue-500");

const Logo = classed.h1("font-bold text-2xl text-orange-500");

// Debug, or maybe add Navigation for Home, Profile/Settings & Notifications.
const Side = classed.nav("flex gap-4");
const LinkButton = classed.a(
  "flex items-center justify-center cursor-pointer hover:underline",
  "px-3 py-1 bg-blue-600 rounded hover:brightness-95",
  {
    variants: {
      active: {
        true: "underline text-orange-500",
      },
    },
  }
);

export const PageButton = ({ page }: { page: Page }) => {
  const { page: currentPage, navigateTo } = useNavigation();

  const active = currentPage === page;

  const navigate = useCallback(() => navigateTo(page), [page]);

  return (
    <LinkButton active={active} onClick={navigate}>
      {page}
    </LinkButton>
  );
};
