import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash'


function average(arrData){
  return _.round(_.sum(arrData)/arrData.length);
}


export default (props) =>  {
  return(
    <div>
      <Sparklines svgHeight={150} svgWidth={250} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}
