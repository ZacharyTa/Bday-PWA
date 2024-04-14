// src/app/_app.js
import '../app/globals.css'; // Import existing global styles
import '@radix-ui/themes/styles.css'; // Import Radix UI theme styles
import { Theme } from '@radix-ui/themes'; // Import Theme component from Radix UI

function MyApp({ Component, pageProps }) {
  return (
    <Theme appearance='dark'> {/* Wrap the page content inside the Theme component */}
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
