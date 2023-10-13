"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Route } from "next";

export const ActiveLink = <T extends string>({
  href,
  children,
  exact,
  className,
  activeClassName,
}: {
  href: Route<T>;
  children: React.ReactNode;
  exact: boolean;
  className: string;
  activeClassName: string;
}) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const classNames = clsx(className, isActive && activeClassName);

  return (
    <Link href={href} className={classNames} aria-current>
      {children}
    </Link>
  );
};
