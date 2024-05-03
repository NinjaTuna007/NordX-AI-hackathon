import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import FrameComponent1 from "../components/FrameComponent11";
import Result from "../components/Result";
import { useLocation } from 'react-router-dom';
import RichTextExample from '../components/RichText.js';



const ChangeView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { summary, pairs } = location.state;

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUsageTextClick = useCallback(() => {
    navigate("/guideview");
  }, [navigate]);

  const onChevronRightIconClick = useCallback(() => {
    // navigate("/changedview");
    // Drop down summary - use pairs
    /*
    {pairs.map((diff, index) => (
          <li key={index}>
            <p>Score: {diff.score}</p>
            <p>{diff.SDR}</p>
          </li>
        ))}
    */
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border leading-[normal] tracking-[normal]">
      <Navbar1
        onHomeIconClick={onHomeIconClick}
        onUsageTextClick={onUsageTextClick}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full">
        <section className="w-[881px] flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-5xl text-white font-open-sans">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[11px] max-w-full text-29xl font-open-sans-hebrew">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[69px] box-border max-w-full mq800:pl-[34px] mq800:box-border">
              <h1 className="m-0 h-[65px] w-[426px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
                Difference Report
              </h1>
            </div>
            <div className="self-stretch rounded-xl bg-white flex flex-col items-end justify-start pt-0 pb-px pr-[15px] pl-[13px] box-border max-w-full text-5xl text-gray font-open-sans">
          <div className="w-[881px] h-[164px] relative rounded-xl bg-white hidden max-w-full z-[1]" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
              <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <img
                    className="h-[34px] w-[34px] relative min-h-[34px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/filedownloadicon.svg"
                  />
                </div>
              </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-1.5 box-border max-w-full mt-[-2px] text-smi text-black font-inter">
              <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[19px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[516px] max-w-full mq800:min-w-full">
                  <div className="self-stretch relative z-[1]">
                    <h2>Summary</h2>
                    <RichTextExample newValue={summary}></RichTextExample>
                  </div>
                  <div className="w-[101px] flex flex-row items-start justify-start py-0 px-3 box-border">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <img
                        className="h-7 w-7 relative min-h-[28px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/likeicon.svg"
                      />
                      <img
                        className="h-7 w-7 relative min-h-[28px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/dislikeicon.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                  <img
                    className="w-[31px] h-[31px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/triangleexclamation.svg"
                  />
                </div>
              </div>
          </div>
          </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-gray">
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[3px] px-1.5 pb-[40.8px] box-border gap-[24.5px] max-w-full mq800:pt-5 mq800:pb-[27px] mq800:box-border">
              <div className="self-stretch h-[519px] relative rounded-xl bg-white hidden" />
              <div className="w-[847px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                  <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-lgi">
                    Section Name
                  </div>
                  <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-lgi">
                    Percentage Change
                  </div>
                </div>
              </div>
              <FrameComponent1
                onChevronRightIconClick={onChevronRightIconClick}
              />
              <Result />
              <FrameComponent1 />
              <Result />
              <Result />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[50px] box-border max-w-full mq800:pl-[25px] mq800:box-border">
            <div className="w-[407px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
              Made with 🤍 by Team NordX 2024
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChangeView;
