import { Theme, createStyles } from "@material-ui/core";

export type SignInStyleProps = {
  cover: string;
};

export type SignInStyleClassKey = keyof ReturnType<typeof SignInStyle>;

const SignInStyle = ({ breakpoints, palette }: Theme) => {
  const gradient = `linear-gradient(49deg, ${palette.primary.main})`;
  return createStyles({
    root: ({ cover }: SignInStyleProps) => ({
      minHeight: "100vh", // todo change to "100vh" or use react-div-100vh
      [breakpoints.only("xs")]: {
        position: "relative",
        minHeight: "100vg",
      },
      "& .DL01-mobileCover": {
        position: "absolute",
        zIndex: 0,
        height: 250,
        top: 0,
        width: "100%",
        background: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      "& .DL01-cover": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: gradient,
        opacity: 0.7,
      },
    }),
    progress: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "41.7%",
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    item: ({ cover }: SignInStyleProps) => ({
      textAlign: "left",
      background: `url(${cover})`,
      backgroundSize: "cover",
      position: "relative",
      "& *": {
        color: palette.common.white,
      },
      "& .DL01-content": {
        position: "relative",
        zIndex: 1,
        paddingLeft: 40,
      },
      "& .DL01-brand": {
        fontWeight: 900,
        letterSpacing: 1,
      },
      "& .DL01-description": {
        color: "rgba(255, 255, 255, 0.45)",
        maxWidth: 240,
        fontWeight: 200,
      },
    }),

    form: {
      textAlign: "center",
      [breakpoints.only("xs")]: {
        background: "#f5f5f5",
      },
      "& .DL01-form": {
        width: 343,
        [breakpoints.only("xs")]: {
          marginTop: 36,
          background: "#ffffff",
          padding: "20px 20px 32px",
          boxShadow: "0 2px 10px 0 rgba(0,0,0,0.12)",
          borderRadius: 4,
          zIndex: 1,
        },
      },
      "& .DL01-logo": {
        width: 160,
        height: 70,
        objectFit: "cover",
        [breakpoints.only("xs")]: {
          width: 150,
          height: 70,
        },
      },
      "& .DL01-signUp": {
        marginTop: 16,
      },
    },
  });
};

export default SignInStyle;
