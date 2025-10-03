export interface ApiListResult<T> {
    info: ApiListInfo;
    results: T;
}

export interface ApiListInfo {
    pages: number;
    results: Movie[];
    total_page: number;
    total_result: number;
    
}

export interface Movie {
    // original_title: string;
    // adult: boolean;
    // backdrop_path: string;
    // genre_id: number;
    // id: number;
    // original_language: string;
    // overview: string;
    // popularity: number;
    // origin: {
    //     poster_path: string;
    // }
    // release_date: string;
    // title: string;
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title:string;
    overview: string;
    popularity: number;
    poster_path:string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}