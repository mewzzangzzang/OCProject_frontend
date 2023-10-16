import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class chart2 extends PureComponent {
  render() {
    return (
      <div className="all mt-4">
        <div className="tableau">
          <iframe
            src="https://public.tableau.com/views/4_16973015389420/3?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="800"
            title="태블로"
          />

          {/* <iframe
            width="800"
            height="500"
            src="https://trends.google.co.kr/trends/embed?hl=ko&q=광어,우럭&geo=KR&date=today%2012-m,today%2012-m&tz=Etc%2FGMT-9"
            frameborder="0"
            scrolling="0"
            title="test"
          ></iframe> */}
        </div>
      </div>
    );
  }
}
