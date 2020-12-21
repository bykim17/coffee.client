import "../assets/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
//ต่อ fontend backend
import { ApolloProvider } from "@apollo/react-hooks";
import AuthProvider from "../appState/AuthProvider";
import apolloClient from "../apollo/apolloClient";
import fetch from "isomorphic-unfetch";
import cookie from "cookie";

const QUERY_USER = {
  query:` 
    query {
      user {
        id
        name
        username
        email
      }
    }
  `,
};


function MyApp({ Component, pageProps, apollo, user }) {
  return (
    <ApolloProvider client={apollo}>
      <AuthProvider userData={user}>
        <Navbar />
        <Menu />
        <Component {...pageProps} />{" "}
      </AuthProvider>
    </ApolloProvider>
  );
}


MyApp.getInitialProps = async ({ ctx, router }) => {
  if (process.browser) {
    return __NEXT_DATA__.props.pageProps;
  }

  // console.log(ctx.req.headers)
  // console.log("Router : ",router)
  const { headers } = ctx.req;

  const cookies = headers && cookie.parse(headers.cookie || "");

  const token = cookies && cookies.jwt;
  // console.log(token)

  // Route Protection
  if (!token) {
    if (router.pathname === "/cart") {
      ctx.res.writeHead(302, { Location: "/signin" });
      ctx.res.end();
    }
    if (
      router.pathname === "/slaughter/sell" ||
      router.pathname === "/slaughter/importcow" ||
      router.pathname === "/slaughter/food" ||
      router.pathname === "/slaughter/treat" ||
      router.pathname === "/slaughter/toslaughter" ||
      router.pathname === "/slaughter/grade" ||
      router.pathname === "/slaughter/senttwo" ||
      router.pathname === "/slaughter/sentfour" ||
      router.pathname === "/slaughter/sentlump" ||
      router.pathname === "/slaughter/transport" ||
      router.pathname === "/slaughter/tracking" ||
      router.pathname === "/slaughter/tracking/[trackingId]" ||
      router.pathname === "/slaughter/trace"
    ) {
      ctx.res.writeHead(302, { Location: "/signin" });
      ctx.res.end();
    }
    return null;
  }
  // Route Protection /login
  if (token) {
    if (router.pathname === "/login") {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }

  const response = await fetch("http://localhost:9090/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}` || "",
    },
    body: JSON.stringify(QUERY_USER),
  });


  if (response.ok) {
    const result = await response.json();
    // console.log(result)
    return { user: result.data.user };
  } else {
    // Route Protection
    if (router.pathname === "/cart") {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    }
    if (
      router.pathname === "/slaughter/sell" ||
      router.pathname === "/slaughter/importcow" ||
      router.pathname === "/slaughter/food" ||
      router.pathname === "/slaughter/treat" ||
      router.pathname === "/slaughter/toslaughter" ||
      router.pathname === "/slaughter/grade" ||
      router.pathname === "/slaughter/senttwo" ||
      router.pathname === "/slaughter/sentfour" ||
      router.pathname === "/slaughter/sentlump" ||
      router.pathname === "/slaughter/transport" ||
      router.pathname === "/slaughter/tracking" ||
      router.pathname === "/slaughter/tracking/[trackingId]" ||
      router.pathname === "/slaughter/trace" ||
      router.pathname === "/slaughter/trace/[trackingId]" ||
      router.pathname === "/slaughter/report" ||
      router.pathname === "/slaughter/setting" ||
      router.pathname === "/slaughter/report/cuttwo" ||
      router.pathname === "/slaughter/report/entrail" ||
      router.pathname === "/slaughter/report/quarter" ||
      router.pathname === "/slaughter/report/lump" ||
      router.pathname === "/slaughter/report/chop" ||
      router.pathname === "/slaughter/setting/info-quarter" ||
      router.pathname === "/slaughter/setting/price-quarter" ||
      router.pathname === "/slaughter/setting/info-lump" ||
      router.pathname === "/slaughter/setting/price-lump" ||
      router.pathname === "/slaughter/setting/bbe" ||
      router.pathname === "/slaughter/setting/create-lump" ||
      router.pathname === "/slaughter/setting/delete-lump"
    ) {
      ctx.res.writeHead(302, { Location: "/signin" });
      ctx.res.end();
    }
    return null;
  }
  // calls page's `getInitialProps` and fills `appProps.pageProps`
};


export default apolloClient(MyApp);
