import * as React from "react";

export interface ThumbProps {
  alt: string;
  title?: string;
  className?: string;
  src: string;
  style?: React.CSSProperties;
  height?: number;
}

/**
 * @author RonyCB
 * @param props
 * @version 1.0.0
 */

const Thumb: React.SFC<ThumbProps> = (props) => {
  const { alt, className, height, src, style, title } = props;
  return (
    <div className={className} style={style}>
      <img height={height} src={src} alt={alt} title={title} />
    </div>
  );
};

export default Thumb;
