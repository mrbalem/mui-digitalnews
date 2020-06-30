import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const calculateMargin = (selfIndex: number, slideIndex: number, speed = 50) => {
  const diff = selfIndex - slideIndex;
  if (Math.abs(diff) > 1) return 0;
  return `${diff * speed}%`;
};

export interface ParallaxSlideProps {
  transition?: string;
  children: any;
  renderElements: (value: {
    index: number;
    onChangeIndex: (i: number) => void;
  }) => void;
}
/**
 * @author rony cb
 * @version 1.0.0
 * @param props Props necesarios para el funcionamiento
 * @deprecated SwipeableViewn in StricMode
 */
const ParallaxSlide: React.SFC<ParallaxSlideProps> = (props) => {
  const { transition = "0.8s", children, renderElements } = props;
  const [index, setIndex] = useState(0);
  const [fineIndex, setFineIndex] = useState(index);
  const onChangeIndex = (i: number) => {
    setIndex(i);
    setFineIndex(i);
  };

  const views = children({
    fineIndex,
    injectStyle: (slideIndex: any, speed: any) => ({
      marginLeft: calculateMargin(slideIndex, fineIndex, speed),
      transition: fineIndex === index ? transition : "none",
    }),
  });
  const isSingleView = views.length < 2;
  return (
    <>
      <SwipeableViews
        disabled={isSingleView}
        resistance
        springConfig={{
          duration: "0.6s",
          easeFunction: "",
          delay: "0s",
        }}
        enableMouseEvents
        // {...props}
        index={index}
        onChangeIndex={onChangeIndex}
        onSwitching={(i) => {
          setFineIndex(i);
        }}
      >
        {views}
      </SwipeableViews>
      {!isSingleView && renderElements({ index, onChangeIndex })}
    </>
  );
};

export default ParallaxSlide;

// ParallaxSlide.propTypes = {
//   transition: PropTypes.string,
//   children: PropTypes.func.isRequired,
//   renderElements: PropTypes.func,
// };
// ParallaxSlide.defaultProps = {
//   transition: "0.8s",
//   renderElements: () => {},
// };
