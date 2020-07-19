import * as React from "react";
import Checkbox from "../../../../components/checkbox";
import "./_filter.style.scss";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@material-ui/core";
import Esqueleton from "../../../../components/squeleton";

export interface FilterProps {
  updateFilters: (elements: any[]) => void;
  filters?: Array<any>;
  categories: Array<{ uid: string; name: string }>;
  getCategory: (category: string) => void;
  initialCategory: string;
}

const availableSizes = ["32", "33", "34", "35", "36", "37", "38"];

/**
 * @author RonyCb
 * @version 1.0.0
 * @param props
 */

const Filter: React.FC<FilterProps> = (props) => {
  const { updateFilters, categories, getCategory, initialCategory } = props;

  const [value, setValue] = React.useState(initialCategory || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    getCategory && getCategory((event.target as HTMLInputElement).value);
  };

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

  //[*]set category
  React.useEffect(() => {
    initialCategory && setValue(initialCategory);
  }, [initialCategory, setValue]);

  return (
    <div className="filters">
      <FormControl component="fieldset">
        <FormLabel className="title">Categorias</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          {!categories && <Esqueleton quantity={4} type="category" />}

          {categories &&
            categories.map((category) => (
              <FormControlLabel
                key={category.uid}
                value={category.uid}
                control={<Radio />}
                label={category.name}
              />
            ))}
          {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Divider />
      <br />
      <FormLabel className="title">Tallas</FormLabel>
      <br />
      <br />
      {/* <h4 className="title">Tallas:</h4> */}
      {createCheckboxes()}
      {/* <GithubStarButton /> */}
    </div>
  );
};

export default Filter;
