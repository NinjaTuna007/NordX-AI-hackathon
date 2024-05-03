import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";

const ChangedView: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUsageTextClick = useCallback(() => {
    navigate("/guideview");
  }, [navigate]);

  const onChevronRightIconClick = useCallback(() => {
    navigate("/changeview");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkblue overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border leading-[normal] tracking-[normal]">
      <Navbar1
        onHomeIconClick={onHomeIconClick}
        onUsageTextClick={onUsageTextClick}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5 box-border max-w-full">
        <section className="w-[881px] flex flex-col items-start justify-start gap-[30px] max-w-full text-left text-29xl text-white font-open-sans-hebrew">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[11px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[69px] box-border max-w-full mq800:pl-[34px] mq800:box-border">
              <h1 className="m-0 h-[65px] w-[426px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-19xl mq450:text-10xl">
                Difference Report
              </h1>
            </div>
            <div className="self-stretch rounded-xl bg-white flex flex-row flex-wrap items-end justify-center pt-0 px-[13px] pb-px box-border gap-[19px] max-w-full text-5xl text-gray font-open-sans">
              <div className="self-stretch w-[881px] relative rounded-xl bg-white hidden max-w-full" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[520px] max-w-full mq800:min-w-full">
                <div className="relative font-semibold inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[112px] z-[1] mq450:text-lgi">
                  Summary
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border max-w-full text-smi text-black font-inter">
                  <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                    <div className="flex-1 relative inline-block max-w-full z-[1]">
                      <ul className="m-0 font-inherit text-inherit pl-[17px]">
                        <li className="mb-0">
                          Directive 2000/78/EC primarily deals with ensuring
                          equal treatment and combating discrimination in the
                          workplace based on specified characteristics. It
                          emphasizes fostering inclusive employment practices
                          and prohibiting discriminatory behavior.
                        </li>
                        <li>
                          GDPR, on the other hand, concentrates on safeguarding
                          individuals' privacy rights and regulating the
                          handling of personal data by organizations. It seeks
                          to empower individuals with greater control over their
                          personal information and holds businesses and
                          institutions accountable for how they manage data.
                        </li>
                      </ul>
                    </div>
                    <img
                      className="h-[34px] w-[34px] absolute !m-[0] top-[-32px] right-[-14px] z-[2]"
                      alt=""
                      src="/editicon.svg"
                    />
                  </div>
                </div>
                <div className="w-[113px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
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
                <div className="flex flex-col items-start justify-start gap-[75px]">
                  <img
                    className="w-[34px] h-[34px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/filedownloadicon.svg"
                  />
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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-5xl text-gray font-open-sans">
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[3px] px-[7px] pb-[42px] box-border gap-[26px] max-w-full mq800:pt-5 mq800:pb-[27px] mq800:box-border">
              <div className="self-stretch h-[519px] relative rounded-xl bg-white hidden" />
              <div className="w-[845px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                  <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-lgi">
                    Section Name
                  </div>
                  <div className="relative font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-lgi">
                    Percentage Change
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.1px] max-w-full text-white font-inter">
                <div className="self-stretch bg-darkblue flex flex-row flex-wrap items-start justify-between pt-[11.9px] pb-[13.9px] pr-[47px] pl-[18.3px] box-border max-w-full gap-[20px] z-[1] mq1150:pr-[23px] mq1150:box-border">
                  <img
                    className="h-[63.9px] w-[863px] relative hidden max-w-full"
                    alt=""
                    src="/rectangle-11.svg"
                  />
                  <div className="w-[261.7px] flex flex-row items-start justify-start gap-[9.4px]">
                    <img
                      className="self-stretch w-[25.3px] relative max-h-full object-contain min-h-[38px] cursor-pointer z-[1]"
                      alt=""
                      src="/chevronright1@2x.png"
                      onClick={onChevronRightIconClick}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
                      <div className="self-stretch relative z-[1] mq450:text-lgi">
                        Section-1
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[6.8px] px-0 pb-0 text-orange">
                    <div className="h-[16.1px] relative inline-block shrink-0 min-w-[51px] z-[1] mq450:text-lgi">
                      99%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[3px] box-border max-w-full">
                  <textarea
                    className="[border:none] bg-darkgray h-[341px] w-auto [outline:none] flex-1 relative rounded-xl max-w-full z-[1]"
                    rows={17}
                    cols={43}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[50px] box-border max-w-full text-left text-5xl text-white font-open-sans mq800:pl-[25px] mq800:box-border">
            <div className="w-[407px] relative inline-block shrink-0 max-w-full mq450:text-lgi">
              Made with 🤍 by Team NordX 2024
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default ChangedView;
