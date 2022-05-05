import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const khabar1 = (props) => {
  const ruter = useRouter();

  return (
    <div>
      {ruter.query.id == 22 ? <h1>22</h1> : 
          <div> 
              <Head>
                  <title>صفحه مورد نظر یافت نشد</title>
              </Head>
               <img src="/images/404.svg" width={100}/>
          </div>}

      {ruter.query.id == 23 ? <h1>23</h1> : <h1></h1>}
    </div>
  );
};

export default khabar1;
