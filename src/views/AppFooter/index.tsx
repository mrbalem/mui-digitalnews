import * as React from "react";

// component material ui
import { Link, Typography, Container, Grid } from "@material-ui/core";
import { MuiTypography } from "@components/index";
import { useAppFooterStyle } from "@styles/index";

// style AppFoote

export interface AppFooterProps {}

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        ink-grid
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

/**
 * @author Rony cb
 * @version 1.1.0
 * Theme component Footer
 */

const AppFooter: React.SFC<AppFooterProps> = (props) => {
  const classes = useAppFooterStyle();
  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://material-ui.com/" className={classes.icon}>
                  <img src="/static/img/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a
                  href="https://twitter.com/MaterialUI"
                  className={classes.icon}
                >
                  <img src="/static/img/appFooterTwitter.png" alt="Twitter" />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <MuiTypography variant="h6" marked="left" gutterBottom>
              Legal
            </MuiTypography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/terms">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <MuiTypography variant="h6" marked="left" gutterBottom>
              Language
            </MuiTypography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default AppFooter;
