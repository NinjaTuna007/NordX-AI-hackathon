import Navbar from "../components/Navbar";
import CompareButtonContainer from "../components/CompareButtonContainer";

const MacBookPro141 = () => {
  return (
    <div className="w-full relative bg-darkblue overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[25px] box-border gap-[23px] leading-[normal] tracking-[normal]">
      <Navbar />
      <main className="w-[1492px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <CompareButtonContainer />
      </main>
    </div>
  );
};

export default MacBookPro141;
