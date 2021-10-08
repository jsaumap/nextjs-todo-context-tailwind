import { useTasks } from "../context/taskContext";
import { Layout } from "../components/Layout";
import { VscTrash } from "react-icons/vsc";
import { useRouter } from "next/router";


const Home = () => {
  const { tasks, deleteTask } = useTasks();
  const { push } = useRouter();

  return (
    <Layout>
      <div className="justify-center flex">
        {tasks.length === 0 ? (
          <h2> There are no Task</h2>
        ) : (
          <div className="w-full">
            {tasks.map((task, i) => (
              <div
              key={task.id}
              onClick={() => push(`/edit/${task.id}`)}
                className="bg-gray-700 hover:bg-gray-600 item-center
            cursor-pointer px-20 py-5 m-2 flex justify-start "
              >
                <span className="text-5xl mr-5">{i+1}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                    <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteTask(task.id)
                    }}
                    className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center">
                    <VscTrash/>
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
