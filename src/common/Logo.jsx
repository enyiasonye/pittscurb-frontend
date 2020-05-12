import React from 'react';
import styled from 'styled-components';

const Base = ({ color, iconColor, textColor, lineColor, className, iconOnly }) => (
  <svg className={className} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4563 556.61">
    {!iconOnly &&
      <>
        <path fill={textColor || color} d="M1090.86,373.94v-311h135q50.67,0,78.41,24.24T1332,153.33q0,41.5-28.17,66t-78,24.46h-78.63V373.94Zm56.35-173.43h72.08q29.7,0,44.34-12.23t14.63-34.51q0-22.71-14.41-34.73t-44.56-12h-72.08Z"/>
        <path fill={textColor || color} d="M1455.18,377q-28.83,0-51.11-13.76t-34.29-39.32q-12-25.56-12-60.07,0-34.94,12.24-60.94t34.29-40.62q22.05-14.64,50.89-14.64,27.94,0,48.71,13.76t28.17,38.23l-5.24,3.06V153.33h53.73V373.94h-53.73v-49.8l5.24,1.75q-7.43,24.47-28.17,37.78T1455.18,377ZM1470,335.06q27.08,0,41.94-18.79T1526.82,263q0-35.39-14.85-54T1470,190.46q-27.52,0-42.81,19.23t-15.29,54.16q0,34.08,15.29,52.64T1470,335.06Z"/>
        <path fill={textColor || color} d="M1639.52,373.94V215.8q0-15.28-.65-31.23T1636,153.33h51.54l6.12,56.79-6.12-3.06q5.67-29.25,25.78-44.12a74.55,74.55,0,0,1,45.43-14.85A80.89,80.89,0,0,1,1771,149a46.22,46.22,0,0,1,10,2.63l-.88,49.8a73.73,73.73,0,0,0-28.83-5.68q-19.65,0-32.11,7.86a49.9,49.9,0,0,0-18.78,21.19,68.72,68.72,0,0,0-6.33,29.92V373.94Z"/>
        <path fill={textColor || color} d="M1810.76,373.94V52.42h54.61V373.94Zm151.15,0L1855.76,261.67l100.47-107.9h66.4l-114,120.57,2.62-27.52,118.82,127.12Z"/>
        <path fill={textColor || color} d="M2049.27,53.3H2110V107h-60.72Zm2.62,320.64V153.33h54.61V373.94Z"/>
        <path fill={textColor || color} d="M2165.47,373.94V215.8q0-15.28-.66-31.23a308.25,308.25,0,0,0-2.84-31.24h51.55l4.81,43.69-4.81,1.31q10.49-24.9,31.24-37.79t47.83-12.89q78.63,0,78.63,90.87V373.94h-54.6V240.7q0-25.77-9.83-37.79t-31.24-12q-25.34,0-40.4,15.95T2220.08,249V373.94Z"/>
        <path fill={textColor || color} d="M2529.79,471.35q-51.11,0-89.55-21l8.74-41.5a186.92,186.92,0,0,0,39.53,15.5,160.77,160.77,0,0,0,40.41,5q29.26,0,44.12-14.42t14.85-43.68V316.71h5.24a74.15,74.15,0,0,1-16.38,25.56,81.37,81.37,0,0,1-26.86,18.34,86.32,86.32,0,0,1-34.51,6.78q-28.85,0-51.11-13.55t-34.73-38.22q-12.45-24.67-12.45-57.88t12.45-57.88q12.45-24.68,34.73-38.45t51.11-13.76q28.38,0,49.36,14a68.89,68.89,0,0,1,28.39,37.57l-5.24.87V153.33h54.17V367q0,51.54-28.39,78T2529.79,471.35Zm.44-146.34q27.08,0,42.37-17.91t15.29-49.36q0-31.45-15.29-49.36t-42.37-17.92q-27.53,0-43.25,17.92t-15.73,49.36q0,31.45,15.73,49.36T2530.23,325Z"/>
        <path fill={textColor || color} d="M2965.75,377.43q-46.3,0-80.38-19.44t-52.2-55.26Q2815,266.93,2815,218q0-48.49,18.13-84.1a129.6,129.6,0,0,1,52.2-55q34.07-19.42,80.38-19.44a183.4,183.4,0,0,1,59.19,9.39q27.73,9.4,46.09,27.31l-18.35,41.06q-21.41-17-41.94-24.68a125.57,125.57,0,0,0-44.12-7.65q-45,0-69.67,29T2872.26,218q0,55,24.69,84.52T2966.62,332a125.34,125.34,0,0,0,44.12-7.64q20.53-7.65,41.94-24.68L3071,340.74q-18.34,17.91-46.09,27.3A183.4,183.4,0,0,1,2965.75,377.43Z"/>
        <path fill={textColor || color} d="M3119.08,373.94V52.42h54.6V197.89l-6.55.44q10.48-24.9,31.23-37.79t47.84-12.89q78.63,0,78.63,90.87V373.94h-54.61V240.7q0-25.77-10-37.79t-31-12q-25.34,0-40.41,15.95T3173.68,249V373.94Z"/>
        <path fill={textColor || color} d="M3468.11,377q-28.83,0-51.11-13.76t-34.29-39.32q-12-25.56-12-60.07,0-34.94,12.23-60.94t34.3-40.62q22.05-14.64,50.89-14.64,27.94,0,48.71,13.76T3545,199.64l-5.24,3.06V153.33h53.73V373.94h-53.73v-49.8l5.24,1.75q-7.42,24.47-28.17,37.78T3468.11,377ZM3483,335.06q27.08,0,41.94-18.79T3539.75,263q0-35.39-14.85-54T3483,190.46q-27.52,0-42.81,19.23t-15.29,54.16q0,34.08,15.29,52.64T3483,335.06Z"/>
        <path fill={textColor || color} d="M3649.83,53.3h60.72V107h-60.72Zm2.62,320.64V153.33h54.61V373.94Z"/>
        <path fill={textColor || color} d="M3766,373.94V215.8q0-15.28-.66-31.23a308.25,308.25,0,0,0-2.84-31.24h51.55l6.12,56.79-6.12-3.06q5.67-29.25,25.77-44.12a74.6,74.6,0,0,1,45.44-14.85,81,81,0,0,1,12.23.87,46,46,0,0,1,10,2.63l-.87,49.8a73.73,73.73,0,0,0-28.83-5.68q-19.67,0-32.11,7.86A49.84,49.84,0,0,0,3827,224.76a68.73,68.73,0,0,0-6.34,29.92V373.94Z"/>
      </>
    }
    {!iconOnly &&
      <>
        <polygon fill={lineColor || color} points="1727 405.61 1987 556.61 2083 556.61 1762 405.61 1727 405.61"/>
        <polygon fill={lineColor || color} points="3930 405.61 4432 527.61 4563 527.61 3965 405.61 3930 405.61"/>
        <polygon fill={lineColor || color} points="3249 405.61 3670 542.61 3801 542.61 3284 405.61 3249 405.61"/>
        <polygon fill={lineColor || color} points="802 405.61 467 405.61 470 373.61 798 373.61 802 405.61"/>
        <path fill={lineColor || color} d="M2631,469.61c-4.49,2.35-19,7-19,7l217,76,127-1L2641.16,462.5S2633.75,468.18,2631,469.61Z"/>
      </>
    }
    <polygon fill={lineColor || color} points="919 405.61 1107 556.61 1261 556.61 954 405.61 919 405.61"/>
    <polygon fill={lineColor || color} points="342 405.61 154 556.61 0 556.61 307 405.61 342 405.61"/>

    <polygon fill={iconColor || color} points="764.13 339.61 506.88 339.61 509.13 363.61 761.13 363.61 764.13 339.61"/>
    <path fill={iconColor || color} d="M770,109.61s-101.58-7-135.5-7-135.5,7-135.5,7l2.43-48s99.76-7,133.07-7c33.11,0,132.26,7,132.26,7Z"/>
    <path fill={iconColor || color} d="M634,237.61s71-3,97,0S774.07,246,774.07,246l-.07,6.63h12v38s-115,5-151,5-152-5-152-5v-38h12l-.07-6.63S512,240.61,538,237.61s97,0,97,0"/>
    <path fill={iconColor || color} d="M462.51,462.11a8.15,8.15,0,0,1-1-.05,10,10,0,0,1-9-10.92l40.5-414.5a10,10,0,1,1,19.9,2l-40.5,414.5A10,10,0,0,1,462.51,462.11Z"/>
    <path fill={iconColor || color} d="M806.49,462.11a10,10,0,0,1-9.94-9l-40.5-414.5a10,10,0,1,1,19.9-2l40.5,414.5a10,10,0,0,1-9,10.92A8.15,8.15,0,0,1,806.49,462.11Z"/>
    <path fill={iconColor || color} d="M514.49,439.11a10,10,0,0,1-9.94-9l-24.5-255.5a10,10,0,1,1,19.9-1.91l24.5,255.5a10,10,0,0,1-9,10.91C515.13,439.1,514.81,439.11,514.49,439.11Z"/>
    <path fill={iconColor || color} d="M754.7,439.11c-.32,0-.64,0-1,0a10,10,0,0,1-9-10.91l24.5-255.5a10,10,0,0,1,19.91,1.91l-24.5,255.5A10,10,0,0,1,754.7,439.11Z"/>
  </svg>
);

export default styled(Base)`
  width: fit-content;
  padding: 1rem;
`;