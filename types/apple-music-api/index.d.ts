// Type definitions for non-npm package Apple Music API 0.1
// Project: https://developer.apple.com/documentation/applemusicapi/
// Definitions by: Noah Chase <https://github.com/nchase>
//                 Useff Chase <https://github.com/useffc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AppleMusicApi {
    // https://developer.apple.com/documentation/applemusicapi/songresponse
    interface SongResponse {
        data: Song[];
    }

    // https://developer.apple.com/documentation/applemusicapi/relationship
    interface Relationship<ResourceType> {
        data: ResourceType[];
        href: string;
        meta?: any;
        next?: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/resource
    interface Resource {
        href?: string;
        id: string;
        type: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/song
    interface Song extends Resource {
        type: 'songs';
        // https://developer.apple.com/documentation/applemusicapi/song/attributes
        attributes?: {
            albumName: string;
            artistName: string;
            artwork?: Artwork;
            composerName?: string;
            contentRating?: string;
            discNumber: number;
            durationInMillis: number;
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            hasLyrics: boolean;
            isrc: string;
            movementCount?: number;
            movementName?: string;
            movementNumber?: string;
            name: string;
            playParams?: PlayParameters;
            previews: Preview[];
            releaseDate: string;
            trackNumber: number;
            url: string;
            workName?: string;
        };
        relationships?: SongRelationships;
    }

    // https://developer.apple.com/documentation/applemusicapi/song/relationships
    interface SongRelationships {
        albums: Relationship<Album>;
        artists: Relationship<Artist>;
        genres?: Relationship<Genre>;
        station?: { data: Station };
    }

    // https://developer.apple.com/documentation/applemusicapi/station
    interface Station extends Resource {
        type: 'stations';
        artwork: Artwork;
        durationInMillis?: number;
        editorialNotes?: EditorialNotes;
        episodeNumber?: number;
        isLive: boolean;
        name: string;
        url: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/artwork
    interface Artwork {
        width: number;
        height: number;
        url: string;
        bgColor?: string;
        textColor1?: string;
        textColor2?: string;
        textColor3?: string;
        textColor4?: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/editorialnotes
    interface EditorialNotes {
        short: string;
        standard: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/playparameters
    interface PlayParameters {
        id: string;
        kind: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/preview
    interface Preview {
        artwork?: Artwork;
        url: string;
    }

    // https://developer.apple.com/documentation/applemusicapi/artist
    interface Artist extends Resource {
        attributes?: {
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            name: string;
            url: string;
        };
        relationships?: ArtistRelationships;
        type: 'artists';
    }

    // https://developer.apple.com/documentation/applemusicapi/artist/relationships
    interface ArtistRelationships {
        albums: Relationship<Album>;
        genres: Relationship<Genre>;
    }

    // https://developer.apple.com/documentation/applemusicapi/album
    interface Album extends Resource {
        // https://developer.apple.com/documentation/applemusicapi/album/attributes
        attributes?: {
            albumName: string;
            artistName: string;
            artwork?: Artwork;
            contentRating?: 'clean' | 'explicit';
            copyright?: string;
            editorialNotes?: EditorialNotes;
            genreNames: string[];
            isComplete: boolean;
            isSingle: boolean;
            name: string;
            playParams?: PlayParameters;
            recordLabel: string;
            releaseDate: string;
            trackCount: number;
            url: string;
            isMasteredForItunes: boolean;
        };
        relationships?: AlbumRelationships;
        type: 'albums';
    }

    // https://developer.apple.com/documentation/applemusicapi/album/relationships
    interface AlbumRelationships {
        artists: Relationship<Artist>;
        genres: {};
    }

    // https://developer.apple.com/documentation/applemusicapi/genre
    interface Genre extends Resource {
        attributes: {
            name: string;
        };
        type: 'genres';
    }
}
