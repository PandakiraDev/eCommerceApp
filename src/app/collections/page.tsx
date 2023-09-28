import { ActiveLink } from "@/components/atoms/ActiveLink";

const CollectionsPage = async () => {
  return (
    <>
      <p>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/collections/new-in"
          exact={false}
        >
          New In
        </ActiveLink>
      </p>
      <p>
        <ActiveLink
          className="text-blue-400 hover:text-blue-600"
          activeClassName="underline"
          href="/collections/throwback"
          exact={false}
        >
          Throwback
        </ActiveLink>
      </p>
    </>
  );
};

export default CollectionsPage;
