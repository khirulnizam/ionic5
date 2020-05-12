// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAGBtIXDTAWBRWS4SN_EkYzxJg_2GpR7IM",
    authDomain: "sharemasjid.firebaseapp.com",
    databaseURL: "https://sharemasjid.firebaseio.com",
    projectId: "sharemasjid",
    storageBucket: "sharemasjid.appspot.com",
    messagingSenderId: "260643075151",
    appId: "1:260643075151:web:977096c863b2c6a9ace63a",
    measurementId: "G-D2QVCZP0FC"
  }
  // Initialize Firebase
  //firebase.initializeApp(this.firebaseConfig);
  //firebase.analytics();
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
