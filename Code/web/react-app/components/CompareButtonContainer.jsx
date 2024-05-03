import { useCallback } from "react";
import UploadBox from "./UploadBox";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";

const CompareButtonContainer = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/changeview");
  }, [navigate]);

  return (
    <div className="w-[920px] flex flex-col items-start justify-start max-w-full text-left text-5xl text-white font-open-sans">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-10 text-29xl font-open-sans-hebrew">
        <b className="h-[65px] relative inline-block mq450:text-10xl mq800:text-19xl">
          NordXGPT
        </b>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[53px] pr-5 pl-[43px] text-left text-5xl text-white font-open-sans mq450:pl-5 mq450:box-border">
        <div className="relative mq450:text-lgi">
          Your Legal AI Assistant 🤗
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[23px] box-border gap-[76px] max-w-full text-black mq450:gap-[19px] mq800:flex-wrap mq1150:gap-[38px]">
        <UploadBox
          uploadOriginalFile="Upload original file"
          dragAndDropOrUploadInTxtF="Drag and drop or Upload in txt format"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[274px] max-w-full mq800:flex-1">
          <UploadBox
            uploadOriginalFile="Upload  file to compare"
            dragAndDropOrUploadInTxtF="Drag and drop or Upload in txt format."
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[34px] pr-5 pl-24 mq450:pl-5 mq450:box-border mq800:pl-12 mq800:box-border">
        <div className="relative mq450:text-lgi">
          Note: Generative AI can make mistakes. Report any mistakes.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[35px] pr-5 pl-11 text-center text-black">
        <div className="w-[182px] flex flex-row items-start justify-start pt-5 pb-2.5 pr-[18px] pl-[33px] box-border relative">
          <div
            className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-gainsboro box-border cursor-pointer border-[1px] border-solid border-black"
            onClick={onRectangleClick}
          />
          <b className="flex-1 relative z-[1] mq450:text-lgi">
            <p className="m-0">Start</p>
          </b>
          <img
            className="h-[41px] w-[43px] relative z-[1]"
            alt=""
            src="/wand.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full">
        <FrameComponent />
      </div>
    </div>
  );
};

export default CompareButtonContainer;
