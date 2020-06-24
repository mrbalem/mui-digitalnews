import { Theme } from "@material-ui/core";

export type ProductHeroStyleProps = {
  backgroundImage: string;
  backgroundColor?: string;
  backgroundPosition?: string;
};

export type ProductHeroStyleClassKey = keyof ReturnType<
  typeof ProductHeroStyle
>;

const ProductHeroStyle = (theme: Theme) => ({
  background: ({
    backgroundImage = "",
    backgroundColor = "#7fc7d9",
    backgroundPosition = "center",
  }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: backgroundColor, // Average color of the background image.
    backgroundPosition: backgroundPosition,
  }),
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
  },
});

export default ProductHeroStyle;
