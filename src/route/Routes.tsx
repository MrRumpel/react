import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

interface Props { }

export const Routes: React.SFC<Props> = props => {
  return (
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  );
};
const Root = ({ route }: any) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

const Home = ({ route }: any) => (
  <div>
    <h2>Home</h2>
  </div>
);

const Child = ({ route }: any) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
);

const GrandChild = ({ someProp }: any) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild
          }
        ]
      }
    ]
  }
];
