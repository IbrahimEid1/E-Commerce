import { memo } from "react";
import AsideIphone from "./AsideIphone";
import MainContentIphones from "./MainContent";

const ContentCategoryIphone = () => {
  return (
    <div className="flex h-[160vh]">
      <aside className="w-[20%] h-[100%] bg-gray-100 p-4 overflow-auto">
        <AsideIphone />
      </aside>
      <MainContentIphones />
    </div>
  );
};

export default memo(ContentCategoryIphone);
