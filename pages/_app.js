import "@/styles/globals.css";
import Layout from "../layout/Layout";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import '@/styles/bootstrap.js';

const queryClient = new QueryClient();

const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;
  const [reload, setreload] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let VNXuser = localStorage.getItem("VNXUser")
      ? JSON.parse(localStorage.getItem("VNXUser"))
      : null;
    if (VNXuser) {
      setCurrentUser(VNXuser);
    } else {
      setCurrentUser(null);
    }
  }, [URL]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          reload,
          setreload
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export function useApppContext() {
  return useContext(AppContext);
}
