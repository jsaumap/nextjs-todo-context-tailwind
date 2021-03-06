import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/taskContext";

export const Layout = ({ children }) => {
  const { tasks } = useTasks();
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="bg-gray-800  flex px-28 py-5 items-center">
        <Link href="/">
          <a>
            <h1 className="font-black text-lg">Task App</h1>
          </a>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">{tasks.length} Tasks</span>
        <div className="flex-grow text-right">
          <button
            className="bg-green-600 hover:bg-green-500
           px-5 py-2 inline-flex items-center text-bold rounded-sm"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>
      <main className="px-28 py-10 flex items-center">{children}</main>
    </div>
  );
};
