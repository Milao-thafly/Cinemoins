// <reference types="vite/client" />
declare module "*.css";
declare module "*.svg";
declare module "*.png";

interface ImportMetaEnv {
    readonly VITE_TMDB_API_KEY: string
}


interface ImportMeta {
    readonly env: ImportMetaEnv
}