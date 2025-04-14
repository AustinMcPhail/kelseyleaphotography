import { Album } from "./documents/album";
import { Package } from "./documents/package";
import { Photo } from "./documents/photo";
import { SiteSettings } from "./documents/website";
import { AlbumReference } from "./objects/albumReference";
import { QuestionAnswer } from "./objects/questionAnswer";
import { SiteImage } from "./objects/siteImage";

export const schemaTypes = [
    Album,
    Package,
    Photo,
    SiteSettings,
    AlbumReference,
    QuestionAnswer,
    SiteImage
]