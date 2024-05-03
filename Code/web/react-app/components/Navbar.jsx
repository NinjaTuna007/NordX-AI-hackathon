import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onUsageTextClick = useCallback(() => {
    navigate("/guideview");
  }, [navigate]);

  return (
    <header className="self-stretch bg-gainsboro flex flex-row items-start justify-start pt-[17px] px-[25px] pb-2 box-border gap-[36px] top-[0] z-[99] sticky max-w-full text-left text-17xl text-gray font-open-sans mq800:gap-[18px]">
      <div className="h-[91px] w-[1512px] relative bg-gainsboro hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
        <img
          className="w-[41px] h-10 relative object-cover z-[1]"
          alt=""
          src="/17178841-homepnghomeiconfree-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full">
        <div className="w-[231px] flex flex-row items-start justify-start gap-[6px] mq1350:hidden">
          <b
            className="h-[38px] flex-1 relative inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer z-[1]"
            onClick={onUsageTextClick}
          >
            <p className="m-0">Guide</p>
          </b>
          <b className="relative inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[100px] z-[1]">
            Team
          </b>
        </div>
      </div>
      <img
        className="h-[51px] w-[238px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/1024pxnordea-1@2x.png"
      />
      <img
        className="h-[66px] w-[110px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/aws-logo@2x.png"
      />
    </header>
  );
};

export default Navbar;
