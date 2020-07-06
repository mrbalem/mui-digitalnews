import * as React from "react";
import { Container, ButtonBase } from "@material-ui/core";
import { MuiTypography } from "@components/index";
import { useProductCategories } from "@styles/index";

export interface ProductCategoriesProps {
  title: string;
  images: Array<{ title: string; url: string; width: string }>;
}

/**
 * @author Rony cb
 * @version 1.0.0
 * @description views ProductCategories
 */
const ProductCategories: React.SFC<ProductCategoriesProps> = (props) => {
  const classes = useProductCategories();
  const { images, title } = props;
  return (
    <Container className={classes.root} component="section">
      <MuiTypography variant="h4" marked="center" align="center">
        {title}
      </MuiTypography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <MuiTypography
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </MuiTypography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
};

export default ProductCategories;
