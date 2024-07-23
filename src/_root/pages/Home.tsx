import { Models } from "appwrite";

import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers, useGetCurrentUser } from "@/lib/react-query/queries";

const Home = () => {
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  const { data: currentUser } = useGetCurrentUser();

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="text-left w-full font-bold text-[28px]">Добрый день, {currentUser?.name}</h2>


          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="el bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-lg">
              <h3 className="text-white">ГДЗ</h3>
            </div>
            <div className="el bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-lg">
              <h3 className="text-white">Послушать</h3>
            </div>
            <div className="el bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg">
              <h3 className="text-white">ChatGPT</h3>
            </div>
            <div className="el bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg">
              <h3 className="text-white">Форум</h3>
            </div>
          </div>

          <h2 className="text-left w-full font-bold text-[28px]">Последние новости</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
