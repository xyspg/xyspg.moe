import '@docsearch/css'

import { DocSearch } from '@docsearch/react'

function Search() {
  if (
    !process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ||
    !process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
  ) {
    return null
  }
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
      indexName="xyspg"
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
      placeholder="搜索..."
    />
  )
}

export default Search
