import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";

const GuideView = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUsageTextClick = useCallback(() => {
    navigate("/guideview");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkblue overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[25px] box-border gap-[28px] leading-[normal] tracking-[normal]">
      <Navbar1
        onHomeIconClick={onHomeIconClick}
        onUsageTextClick={onUsageTextClick}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <section className="w-[1241px] flex flex-col items-start justify-start gap-[89px] max-w-full text-left text-5xl text-white font-open-sans mq450:gap-[22px] mq800:gap-[44px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-29xl font-open-sans-hebrew">
            <div className="w-[663px] flex flex-col items-start justify-start gap-[28px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[63px] mq450:pl-5 mq450:box-border">
                <h1 className="m-0 h-[65px] w-[310px] relative text-inherit font-bold font-inherit inline-block mq450:text-10xl mq800:text-19xl">
                  {" "}
                  Usage Guide
                </h1>
              </div>
              <div className="relative text-5xl font-open-sans mq450:text-lgi">
                Following are some important guidelines for using our tool.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[57px] mq800:pb-[37px] mq800:box-border">
            <div className="relative mq450:text-lgi">
              <ol className="m-0 text-inherit pl-8">
                <li className="mb-0">
                  <b className="font-open-sans-hebrew">
                    Be careful with type of text that is uploaded.
                  </b>
                  <span>{` `}</span>
                </li>
              </ol>
              <p className="m-0">{`It is quite easy to upload text or documents which do not meet the scope of the usage. `}</p>
              <p className="m-0">Be mindful of this.</p>
              <p className="m-0">&nbsp;</p>
              <ol className="m-0 font-open-sans-hebrew text-inherit pl-8">
                <li className="mb-0">
                  <b>The tool is meant for inter-dependence not reliance</b>
                </li>
              </ol>
              <p className="m-0">{`This means that you are supposed to still use your own skill to decide changes without completely `}</p>
              <p className="m-0">
                relying on the AI systems outputs. This is bad practice!
              </p>
              <p className="m-0">&nbsp;</p>
              <ol className="m-0 font-open-sans-hebrew text-inherit pl-8">
                <li className="mb-0">
                  <b>Be wary of the limitations.</b>
                </li>
              </ol>
              <p className="m-0">
                The tool is currently in Alpha mode. Things may go wrong.
                Certain type of textual inputs may not be completely
              </p>
              <p className="m-0">
                supported such as Math Jax, LaTeX, etc. However, this is just
                the start!.
              </p>
              <ol className="m-0 font-open-sans-hebrew text-inherit pl-8">
                <li className="mb-0">
                  <b>
                    Send a report or contact support if something goes horribly
                    wrong.
                  </b>
                </li>
              </ol>
              <p className="m-0">{`We acknowledge the limitations and therefore believe it should be easy to report mistakes or contact `}</p>
              <p className="m-0">developer in unforeseen cases.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[46px] box-border max-w-full mq800:pl-[23px] mq800:box-border">
            <div className="w-[407px] flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 relative inline-block max-w-full mq450:text-lgi">
                Made with 🤍 by Team NordX 2024
              </div>
              <div className="flex-1 relative inline-block max-w-full z-[1] ml-[-407px] mq450:text-lgi">
                Made with 🤍 by Team NordX 2024
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GuideView;
