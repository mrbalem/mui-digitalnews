import * as React from "react";
import { Paper, Grid, makeStyles, Theme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { createRangeArray } from "../../utils/other";

export interface EsqueletonProps {
  type: "shoping" | "card" | "appbar" | "category";
  quantity?: number;
  background?: "primaryDark" | "secondaryDark" | "inforDark";
}

const Content: React.SFC<{ children: React.ReactNode }> = (props) => (
  <Grid style={{ padding: 10 }} container spacing={2}>
    {props.children}
  </Grid>
);

const useStyle = makeStyles((theme: Theme) => ({
  primaryDark: {
    background: theme.palette.primary.dark,
  },
  secondaryDark: {
    background: theme.palette.secondary.dark,
  },
  inforDark: {
    background: theme.palette.info.dark,
  },
}));

const Esqueleton: React.SFC<EsqueletonProps> = (props) => {
  const { type, quantity = 12, background = "secondaryDark" } = props;
  const classes = useStyle();
  switch (type) {
    case "shoping":
      return (
        <Content>
          {createRangeArray(1, quantity, 1).map((e, index) => (
            <Grid
              //   style={{ padding: 10 }}
              item
              key={index.toString() + e || "key"}
              md={3}
              xs={6}
            >
              <Paper>
                <Skeleton
                  className={classes[background]}
                  variant="rect"
                  width={"100%"}
                  height={118}
                />
                <div className="center-flex">
                  <Skeleton
                    className={classes[background]}
                    variant="text"
                    width={"80%"}
                  />
                </div>
                <div className="center-flex">
                  <Skeleton
                    className={classes[background]}
                    variant="text"
                    width={"30%"}
                  />
                </div>
                <div className="center-flex">
                  <Skeleton
                    className={classes[background]}
                    variant="text"
                    width={"50%"}
                  />
                </div>
              </Paper>
              <br />
              <Paper>
                <Skeleton
                  className={classes[background]}
                  variant="rect"
                  width={"100%"}
                  height={30}
                />
              </Paper>
            </Grid>
          ))}
        </Content>
      );

    case "card":
      return (
        <>
          {createRangeArray(1, quantity, 1).map((e, index) => (
            <Skeleton
              className={classes[background]}
              style={{ margin: 10 }}
              key={(e + index).toString()}
              variant="rect"
              width="31.5%"
              height={200}
            />
          ))}
        </>
      );

    case "appbar":
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {createRangeArray(1, quantity, 1).map((e, index) => (
            <Skeleton
              className={classes[background]}
              style={{ margin: 10 }}
              height={30}
              variant="text"
              width={100}
              key={(e + index).toString()}
            />
          ))}
        </div>
      );

    case "category":
      return (
        <>
          {createRangeArray(1, quantity, 1).map((e, index) => (
            <Skeleton
              key={(e + index).toString()}
              className={classes[background]}
              variant="text"
              width={250}
            />
          ))}
        </>
      );

    default:
      return (
        <Paper>
          <Skeleton variant="rect" width={210} height={118}></Skeleton>
        </Paper>
      );
  }
};

export default Esqueleton;
