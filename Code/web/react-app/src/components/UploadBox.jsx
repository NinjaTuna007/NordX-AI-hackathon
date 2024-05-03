import { useMemo } from "react";
import './FileInput.css';

const UploadBox = ({
  uploadOriginalFile,
  dragAndDropOrUploadInTxtF,
  propFlex,
  propMinWidth,
  propAlignSelf,
  handleUploadFile,
  index
}) => {
  const uploadBoxStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const handleFileChange = (event) => {
    console.log("Triggered");
    handleUploadFile(index, event.target.files[0]);
  };

  return (
    <div
      className="flex-[0.9336] rounded-xl bg-gainsboro flex flex-col items-start justify-start pt-0 pb-[304px] pr-[11px] pl-[17px] box-border gap-[21px] min-w-[274px] min-h-[428px] max-w-full text-left text-5xl text-black font-open-sans mq450:pb-[198px] mq450:box-border mq800:flex-1"
      style={uploadBoxStyle}
    >
      <div className="w-[422px] h-[428px] relative rounded-xl bg-gainsboro hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative z-[1] mq450:text-lgi">
            {uploadOriginalFile}
          </div>
        </div>
        <div className="file-input-wrapper">
          <input type="file" onClick={handleFileChange} className="file-input" />
          <img
              className="file-input-icon h-[51px] w-[51px] relative z-[1]"
              alt=""
              src="/clouduploadvector.svg"
          />
        </div>
      </div>
      <div className="w-[331px] h-[52px] relative text-smi font-inter inline-block shrink-0 max-w-full z-[1]">
        {dragAndDropOrUploadInTxtF}
      </div>
    </div>
  );
};

export default UploadBox;
