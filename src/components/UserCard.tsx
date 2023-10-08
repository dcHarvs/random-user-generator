import useUser from "../lib/hooks/useUser";
import LoadingSpinner from "./LoadingSpinner";
import RefreshButton from "./RefreshButton";

export default function UserCard() {
  const { user, isLoading, isError, refetch } = useUser();

  const fullname = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;

  return user && (
    <div className="p-8 flex-1 max-w-lg h-56 mx-auto rounded-2xl border shadow-md flex flex-col items-center justify-between gap-4 relative md:flex-row md:justify-start md:h-40">
      {isLoading || !user
        ? <div className="flex-1 flex justify-center items-center">
          <LoadingSpinner />
        </div>
        : isError
        ? <p>Something went wrong. Please try reloading later.</p>
        : <>
          <img
            src={user.picture?.large as string}
            alt="user-photo"
            className="w-24 h-24 border rounded-full"
          />
          <div className="text-center flex-1 md:text-left">
            <p className="text-2xl font-semibold">{fullname}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </>}
      <RefreshButton onClick={refetch} />
    </div>
  )
}
