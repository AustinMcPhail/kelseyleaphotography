// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import album from './documents/album'
import photo from './documents/photo'
import siteSettings from './documents/website'
import pckg from './documents/package'
import questionAnswer from './objects/questionAnswer'

// Object types
import albumReference from './objects/albumReference'
import siteImage from './objects/siteImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    photo,
    album,
    siteSettings,
    pckg,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    albumReference,
    siteImage,
    questionAnswer
  ])
})
