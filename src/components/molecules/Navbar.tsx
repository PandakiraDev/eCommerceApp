import { ActiveLink } from "../atoms/ActiveLink";

export const Navbar = () => {
  return (
    <ul className="mt-2 flex justify-center space-x-4">
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/"
          exact={true}
        >
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/products"
          exact={false}
        >
          All
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/categories/t-shirts"
          exact={false}
        >
          T-Shirts
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/categories/hoodies"
          exact={false}
        >
          Hoodies
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/categories/accessories"
          exact={false}
        >
          Accessories
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/collections"
          exact={false}
        >
          Collections
        </ActiveLink>
      </li>
    </ul>
  );
};
