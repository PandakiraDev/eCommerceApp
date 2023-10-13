import { ActiveLink } from "../atoms/ActiveLink";
import { NavbarSearchInput } from "../atoms/NavbarSearchInput";
import { getCartFromCookies } from "@/api/cart";

export const Navbar = async () => {
  const cart = await getCartFromCookies();
  const quantity = cart?.orderItems.length ?? 0;
  return (
    // <ul className="mt-2 flex justify-center space-x-4 z-10 fixed  ">
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/"
    //       exact={true}
    //     >
    //       Home
    //     </ActiveLink>
    //   </li>
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/products"
    //       exact={false}
    //     >
    //       All
    //     </ActiveLink>
    //   </li>
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/categories/t-shirts"
    //       exact={false}
    //     >
    //       T-Shirts
    //     </ActiveLink>
    //   </li>
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/categories/hoodies"
    //       exact={false}
    //     >
    //       Hoodies
    //     </ActiveLink>
    //   </li>
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/categories/accessories"
    //       exact={false}
    //     >
    //       Accessories
    //     </ActiveLink>
    //   </li>
    //   <li>
    //     <ActiveLink
    //       className="text-blue-400 hover:text-blue-600"
    //       activeClassName="underline"
    //       href="/collections"
    //       exact={false}
    //     >
    //       Collections
    //     </ActiveLink>
    //   </li>
    //   <NavbarSearchInput />
    //   <li>
    //     <ActiveLink
    //       href={"/cart"}
    //       exact={false}
    //       className={""}
    //       activeClassName={""}
    //     >
    //       <div className="flex justify-center text-center">
    //         <svg
    //           width="24px"
    //           height="24px"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <circle cx="16.5" cy="18.5" r="1.5" />
    //           <circle cx="9.5" cy="18.5" r="1.5" />
    //           <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
    //         </svg>
    //         <span>{quantity}</span>
    //       </div>
    //     </ActiveLink>
    //   </li>
    // </ul>
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">Shop</span>
          <div className="flex space-x-4 text-gray-900">
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/"
              exact={true}
            >
              Home
            </ActiveLink>
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/products"
              exact={false}
            >
              All
            </ActiveLink>
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/categories/t-shirts"
              exact={false}
            >
              T-Shirts
            </ActiveLink>
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/categories/hoodies"
              exact={false}
            >
              Hoodies
            </ActiveLink>
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/categories/accessories"
              exact={false}
            >
              Accessories
            </ActiveLink>
            <ActiveLink
              className="text-blue-400 hover:text-blue-600"
              activeClassName="underline"
              href="/collections"
              exact={false}
            >
              Collections
            </ActiveLink>
            <NavbarSearchInput />
            <ActiveLink
              href={"/cart"}
              exact={false}
              className={""}
              activeClassName={""}
            >
              <div className="flex justify-center text-center">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.5" cy="18.5" r="1.5" />
                  <circle cx="9.5" cy="18.5" r="1.5" />
                  <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
                </svg>
                <span>{quantity}</span>
              </div>
            </ActiveLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
