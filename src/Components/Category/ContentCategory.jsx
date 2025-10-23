import Aside from "./Aside";
import MainContent from "./MainContent";

const ContentCategory = () => {
  return (
    <>
    <div className="flex  h-[100vh]"> 
    {MainContent ? <aside className="w-[20%] h-[100%] bg-gray-100 p-4 overflow-auto">
        <Aside />
      </aside>: null }
      <MainContent />
    </div>
    </>
  );
};

export default ContentCategory;
