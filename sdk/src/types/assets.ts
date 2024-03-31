/**
 * The assets endpoint query parameters
 */
export type AssetsQuery =
	| { key: string }
	| {
			key?: never;
			fit?: 'cover' | 'contain' | 'inside' | 'outside';
			width?: number;
			height?: number;
			quality?: number;
			withoutEnlargement?: boolean;
			format?: 'auto' | 'jpg' | 'png' | 'webp' | 'tiff' | 'avif';
			focal_point_x?: number;
			focal_point_y?: number;
			transforms?: [string, ...any[]][];
	  };
