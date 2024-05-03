const FrameComponent1 = ({ onChevronRightIconClick }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border max-w-full text-left text-5xl text-white font-inter">
      <div className="flex-1 bg-darkblue flex flex-row items-start justify-between pt-[18.3px] pb-[15.3px] pr-[47px] pl-3 box-border max-w-full gap-[20px] z-[1] mq450:flex-wrap mq1150:pr-[23px] mq1150:box-border">
        <img
          className="h-[63.9px] w-[863px] relative hidden max-w-full"
          alt=""
          src="/rectangle-11.svg"
        />
        <div className="w-[268px] flex flex-row items-start justify-start gap-[3px]">
          <img
            className="h-[25.2px] w-[38px] relative cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/chevronright.svg"
            onClick={onChevronRightIconClick}
          />
          <div className="flex-1 relative z-[1] mq450:text-lgi">Section-1</div>
        </div>
        <div className="h-[16.1px] relative text-orange inline-block min-w-[51px] z-[1] mq450:text-lgi">
          99%
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
