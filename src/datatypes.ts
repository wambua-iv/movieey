export interface MovieItem{
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number
}

export interface MovieObject {
	page : 1;
	results : MovieItem[];
	total_pages : number;
	total_results: number;
}