import { magOptions, minOptions, MagOptionType, MinOptionType } from "../Page";

interface GuideTextProps {
  magText: string;
  minText: string;
}

function GuideText(props: GuideTextProps) {
  return (
    <>
      <span className="guide-text">
        <b>MagFilter: </b>
        {props.magText}
      </span>
      <span className="guide-text">
        <b>MinFilter: </b>
        {props.minText}
      </span>
    </>
  );
}

interface GuideLineProps {
  magFilter: MagOptionType;
  minFilter: MinOptionType;
}

function GuideLine({ magFilter, minFilter }: GuideLineProps) {
  const getOptionText = (options: Object, value: number): string => {
    const foundEntry = Object.entries(options).find(
      ([_, val]) => val === value
    );

    return foundEntry ? foundEntry[0] : "";
  };

  return (
    <div className="guide-line">
      <div className="left-guide-wrapper">
        <GuideText
          magText={"NearestFilter"}
          minText={"LinearMipMapLinearFilter"}
        />
      </div>
      <div className="right-guide-wrapper">
        <GuideText
          magText={getOptionText(magOptions, magFilter)}
          minText={getOptionText(minOptions, minFilter)}
        />
      </div>
      <div className="divider" />
    </div>
  );
}

export default GuideLine;
