import { ReactNode, useCallback } from "react";
import { Home, Users, Bell, Settings } from "lucide-react";
// import { classed } from "@tw-classed/react";
import { Page, useNavigation } from "../../context/NavigationContext";

// Todo: Decouple.

export const Link = ({
  page,
  children,
  mobile = false,
}: {
  page: Page;
  mobile?: boolean;
  children: ReactNode;
}) => {
  const { page: currentPage, navigateTo } = useNavigation();

  const active = currentPage === page;

  const navigate = useCallback(() => navigateTo(page), [page]);

  const style = `flex items-center p-3 rounded cursor-pointer hover:bg-gray-100`;
  const highlight = active
    ? `text-gray-900 bg-gray-200`
    : `text-gray-600 hover:text-gray-900`;

  const cn = mobile ? [style, "flex-col", highlight] : [style, highlight];

  return (
    <a className={cn.join(" ")} onClick={navigate}>
      {children}
    </a>
  );
};

const avatars = Array.from({ length: 8 }, (_, i) => i + 1).flatMap((n) => [
  `/assets/penguins/${n}.png`,
  `/assets/punks/${n}.png`,
]);

// const avatars = ["/assets/penguin.png", "/assets/me.jpeg"]; // Penguin 9 for me.

const avatar = avatars[Math.floor(Math.random() * avatars.length)];

export const Layout = ({ children }: { children: ReactNode }) => {
  // Todo: Clicking Logo navigates to Home/Dashboard, Clicking User navigates to Settings
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">WebPush Demo</h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link page={Page.Dashboard}>
                <Home className="mr-2" size={20} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link page={Page.Users}>
                <Users className="mr-2" size={20} />
                Users
              </Link>
            </li>
            <li>
              <Link page={Page.Notifications}>
                <Bell className="mr-2" size={20} />
                Notifications
              </Link>
            </li>
            <li>
              <Link page={Page.Settings}>
                <Settings className="mr-2" size={20} />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold md:hidden">WebPush Demo</h1>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, User</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img src={avatar} alt="User avatar" />
            </div>
          </div>
        </header>

        <div className="p-4">{children}</div>
      </main>

      {/* Bottom navigation for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2">
        <Link page={Page.Dashboard} mobile>
          <Home size={24} />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link page={Page.Users} mobile>
          <Users size={24} />
          <span className="text-xs">Users</span>
        </Link>
        <Link page={Page.Notifications} mobile>
          <Bell size={24} />
          <span className="text-xs">Notifications</span>
        </Link>
        <Link page={Page.Settings} mobile>
          <Settings size={24} />
          <span className="text-xs">Settings</span>
        </Link>
      </nav>
    </div>
  );
};
