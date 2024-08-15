import * as Icons from "@/icons";

const Header = () => {
  return (
    <div className="mb-8 flex gap-x-2 items-center">
      <div>
        <Icons.Back />
      </div>
      <div className="flex-1 font-bold">WikiDate Detective</div>
      <div>
        <Icons.More />
      </div>
    </div>
  );
};

export default Header;
