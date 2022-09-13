import { useState, useEffect } from "react";
import { Image } from "react-native";

export default ({ source = {}, style = {}, width = 0 }) => {
  const [height, setHeight] = useState(100);

  useEffect(() => {
    if (source.uri) {
      // 网络图
      Image.getSize(source.uri, (w, h) => {
        setHeight((width * h) / w);
      });
    } else {
      // 本地图
      const result = Image.resolveAssetSource(source);
      let h = result.height;
      let w = result.width;
      const finalHeight = (width * h) / w;
      setHeight(finalHeight);
    }
  }, [source, width]);

  return <Image style={[style, { height, width }]} source={source} />;
};
