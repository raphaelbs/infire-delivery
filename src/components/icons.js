import React from 'react';

const containerStyles = {
  display: 'inline-block',
  width: 32,
  height: 32,
  position: 'relative',
  overflow: 'hidden',
  verticalAlign: 'middle',
  marginLeft: 4,
};

const svgStyles = {
  borderRadius:'50%',
  position:'absolute',
  top:0,
  left:0,
  width:'100%',
  height:'100%',
};

export const InstagramIcon = () => (
  <div style={containerStyles}>
    <svg style={svgStyles} viewBox="0 0 64 64" fillRule="evenodd"><circle cx="32" cy="32" r="31" fill="transparent"/><path d="M43.5 29.7h-2.6c.2.7.3 1.5.3 2.3 0 5.1-4.1 9.2-9.2 9.2s-9.2-4.1-9.2-9.2c0-.8.1-1.6.3-2.3h-2.6v12.7c0 .6.5 1.2 1.2 1.2h20.8c.6 0 1.2-.5 1.2-1.2V29.7zm0-8.1c0-.6-.5-1.2-1.2-1.2h-3.5c-.6 0-1.2.5-1.2 1.2v3.5c0 .6.5 1.2 1.2 1.2h3.5c.6 0 1.2-.5 1.2-1.2v-3.5zM32 26.2c-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-3.2-2.6-5.8-5.8-5.8M43.5 47h-23c-1.9 0-3.5-1.6-3.5-3.5v-23c0-1.9 1.5-3.5 3.5-3.5h23.1c1.9 0 3.5 1.5 3.5 3.5v23.1c-.1 1.8-1.6 3.4-3.6 3.4" fill="#fff"/><path d="M41.2 32c0 5.1-4.1 9.2-9.2 9.2s-9.2-4.1-9.2-9.2c0-.8.1-1.6.3-2.3h-2.6v12.7c0 .6.5 1.2 1.2 1.2h20.8c.6 0 1.2-.5 1.2-1.2V29.7h-2.6c0 .7.1 1.5.1 2.3zM32 37.8c3.2 0 5.8-2.6 5.8-5.8 0-3.2-2.6-5.8-5.8-5.8-3.2 0-5.8 2.6-5.8 5.8 0 3.2 2.6 5.8 5.8 5.8zm10.4-17.3h-3.5c-.6 0-1.2.5-1.2 1.2v3.5c0 .6.5 1.2 1.2 1.2h3.5c.6 0 1.2-.5 1.2-1.2v-3.5c-.1-.7-.6-1.2-1.2-1.2zM0 0v64h64V0H0zm47 43.5c0 1.9-1.5 3.5-3.5 3.5h-23c-1.9 0-3.5-1.6-3.5-3.5v-23c0-1.9 1.5-3.5 3.5-3.5h23.1c1.9 0 3.5 1.5 3.5 3.5v23z" fill="#050505"/></svg>
  </div>
);

export const WhatsAppIcon = () => (
  <div style={containerStyles}>
    <svg style={svgStyles} viewBox="0 0 64 64" fillRule="evenodd"><circle cx="32" cy="32" r="31" fill="transparent"/><path d="M48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 01-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59zM32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.223 13.223 0 007.27 2.164c7.281 0 13.207-5.875 13.207-13.101 0-7.227-5.926-13.106-13.21-13.106zm7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836-.32-.766-.64-.637-.863-.637-.226 0-.484-.031-.738-.031-.258 0-.676.093-1.027.476-.356.383-1.348 1.309-1.348 3.188 0 1.879 1.379 3.695 1.57 3.949.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816zm0 0" fill="#fff"/><path d="M0 0v64h64V0H0zm48 31.59c0 8.605-7.031 15.586-15.71 15.586-2.755 0-5.34-.703-7.595-1.942L16 48l2.836-8.363a15.43 15.43 0 01-2.254-8.047c0-8.61 7.031-15.59 15.707-15.59C40.97 16 48 22.98 48 31.59zM32.29 18.484c-7.282 0-13.208 5.88-13.208 13.106 0 2.867.938 5.52 2.516 7.68l-1.649 4.867 5.074-1.61a13.223 13.223 0 007.27 2.164c7.281 0 13.207-5.875 13.207-13.101 0-7.227-5.926-13.106-13.21-13.106zm7.933 16.696c-.098-.16-.352-.258-.739-.45-.382-.187-2.277-1.113-2.629-1.242-.355-.125-.613-.191-.867.192-.258.383-.996 1.242-1.218 1.5-.227.254-.45.285-.836.093-.387-.191-1.625-.593-3.098-1.894-1.145-1.012-1.918-2.262-2.14-2.645-.223-.382-.024-.59.167-.78.176-.173.387-.446.578-.669.196-.223.258-.383.387-.637.129-.257.063-.48-.035-.671-.094-.192-.867-2.07-1.188-2.836-.32-.766-.64-.637-.863-.637-.226 0-.484-.031-.738-.031-.258 0-.676.093-1.027.476-.356.383-1.348 1.309-1.348 3.188 0 1.879 1.379 3.695 1.57 3.949.196.258 2.664 4.238 6.578 5.77 3.914 1.53 3.914 1.019 4.621.956.707-.066 2.278-.925 2.602-1.816.32-.894.32-1.66.223-1.816zm0 0" fill="#050505"/></svg>
  </div>
);