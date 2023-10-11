// 광어 수출

import React, { PureComponent } from "react";

export default class exportFlatfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/2022_16969071533950/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="600"
            title="광어 수출"
          />
        </div>
      </div>
    );
  }
}
