import * as React from "react";
import Checkbox from "../checkbox";

import "./_filter.style.scss";

export interface FilterProps {
  updateFilters: (elements: any[]) => void;
  filters?: Array<any>;
}

const availableSizes = ["32", "33", "34", "35", "36", "37", "38"];

/**
 * @author RonyCb
 * @version 1.0.0
 * @param props
 */

const Filter: React.SFC<FilterProps> = (props) => {
  const { updateFilters } = props;

  const selectedCheckboxes = new Set();

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    updateFilters(Array.from(selectedCheckboxes));
  };

  const createCheckbox = (label: string, index: number) => (
    <Checkbox
      className="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label + index.toString()}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filters">
      <h4 className="title">Tallas:</h4>
      {createCheckboxes()}
      {/* <GithubStarButton /> */}
    </div>
  );
};

export default Filter;
