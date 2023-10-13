import { notFound } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";
import { getTotalCountOfProducts } from "@/api/products";

type Props = {
  pageNumber: string;
};

export const Pagination = async ({ pageNumber }: Props) => {
  const products = await getTotalCountOfProducts();

  const pages = Math.ceil(products / 5);

  // console.log(pages);
  // console.log(pageNumber);
  // let leftPagination = Number(pageNumber) - 1;
  // let rightPagination = Number(pageNumber) + 1;
  // let centerPagination = Number(pageNumber);
  // if (pageNumber === "1") {
  //   leftPagination = 1;
  //   centerPagination = 2;
  //   rightPagination = 3;
  // }
  if (Number(pageNumber) > pages) {
    notFound();
  }
  return (
    <div className="flex justify-center mt-7">
      <ul className="flex flex-row space-x-4">
        {Number(pageNumber) >= 2 ? (
          <li>
            <ActiveLink
              href={`/products/${Number(pageNumber) - 1}`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              {Number(pageNumber) - 1}
            </ActiveLink>
          </li>
        ) : null}
        <li>
          <ActiveLink
            href={`/products/${pageNumber}`}
            exact={true}
            className={"text-blue-400 hover:text-blue-600 text-2xl"}
            activeClassName={"underline"}
          >
            {pageNumber}
          </ActiveLink>
        </li>
        {Number(pageNumber) < pages ? (
          <li>
            <ActiveLink
              href={`/products/${Number(pageNumber) + 1}`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              {Number(pageNumber) + 1}
            </ActiveLink>
          </li>
        ) : null}

        {/* {Number(pageNumber) >= 3 ? (
          <li>
            <ActiveLink
              href={`/products/1`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              1
            </ActiveLink>
          </li>
        ) : null}
        {Number(pageNumber) >= 4 ? <li>...</li> : null}
        <li>
          <ActiveLink
            href={`/products/${leftPagination}`}
            exact={true}
            className={"text-blue-400 hover:text-blue-600 text-2xl"}
            activeClassName={"underline"}
          >
            {leftPagination}
          </ActiveLink>
        </li>
        {Number(pages) >= Number(pageNumber + 1) ? (
          <li>
            <ActiveLink
              href={`/products/${centerPagination}`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              {centerPagination}
            </ActiveLink>
          </li>
        ) : null}
        {Number(pageNumber) >= pages ? null : (
          <li>
            <ActiveLink
              href={`/products/${rightPagination}`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              {rightPagination}
            </ActiveLink>
          </li>
        )}
        {Number(pageNumber) <= pages - 3 ? <li>...</li> : null}

        {Number(pageNumber) <= pages - 2 ? (
          <li>
            <ActiveLink
              href={`/products/${pages}`}
              exact={true}
              className={"text-blue-400 hover:text-blue-600 text-2xl"}
              activeClassName={"underline"}
            >
              {pages}
            </ActiveLink>
          </li>
        ) : null} */}
      </ul>
    </div>
  );
};
