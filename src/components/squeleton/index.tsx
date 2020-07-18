import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { createRangeArray } from "../../utils/other";

export interface EsqueletonProps {
  type: "shoping" | "card";
  quantity?: number;
}

const Content: React.SFC<{ children: React.ReactNode }> = (props) => (
  <Grid style={{ padding: 10 }} container spacing={2}>
    {props.children}
  </Grid>
);

const Esqueleton: React.SFC<EsqueletonProps> = (props) => {
  const { type, quantity = 12 } = props;

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
                <Skeleton variant="rect" width={"100%"} height={118} />
                <div className="center-flex">
                  <Skeleton variant="text" width={"80%"} />
                </div>
                <div className="center-flex">
                  <Skeleton variant="text" width={"30%"} />
                </div>
                <div className="center-flex">
                  <Skeleton variant="text" width={"50%"} />
                </div>
              </Paper>
              <br />
              <Paper>
                <Skeleton variant="rect" width={"100%"} height={30} />
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
              style={{ background: "#ff3366", margin: 10 }}
              key={(e + index).toString()}
              variant="rect"
              width="31.5%"
              height={200}
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
