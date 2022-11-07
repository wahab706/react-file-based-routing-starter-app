import React, { Suspense } from 'react';
import { Header, Footer } from '../../components';

export function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className='visibility-hidden'>
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Suspense>
          <Header />
        </Suspense>
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
