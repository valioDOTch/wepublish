import React from 'react'
import {MockedProvider as MockedProviderBase} from '@apollo/client/testing'
import {ArticleMetadataPanel} from '../../src/client/panel/articleMetadataPanel'
import {AuthorListDocument} from '../../src/client/api'
import {mount} from 'enzyme'

//import {act} from 'react-dom/test-utils'
import {updateWrapper} from '../utils'

const MockedProvider = MockedProviderBase as any

const article = {
  slug: 'the-properties-of-moonstone',
  preTitle: 'Moonstone Uses',
  title: 'The Properties of Moonstone',
  lead: '',
  authors: [
    {
      id: 'authorId2',
      name: 'Hermione Granger'
    }
  ],
  tags: ['moonstone', 'potions'],
  properties: [
    {
      key: 'abc',
      value: 'def',
      public: false
    }
  ],
  image: undefined,
  shared: false,
  breaking: true
}

const mocks = [
  {
    request: {
      query: AuthorListDocument,
      variables: {
        first: 10,
        filter: undefined
      }
    },
    result: () => ({
      data: {
        authors: {
          nodes: [
            {
              __typename: 'Author',
              id: 'authorId1',
              name: 'Ron Weasley',
              slug: 'ron-weasley',
              links: [{title: 'Link Title', url: 'www.link-url.ch/'}],
              image: undefined
            },
            {
              __typename: 'Author',
              id: 'authorId2',
              name: 'Hermione Granger',
              slug: 'hermione-granger',
              links: [{title: 'Link Title', url: 'www.link-url.ch/'}],
              image: undefined
            }
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          },
          totalCount: 2
        }
      }
    })
  }
]

describe('Article Metadata Panel', () => {
  test('should render', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ArticleMetadataPanel value={article} />
      </MockedProvider>
    )
    await updateWrapper(wrapper, 100)

    const panel = wrapper.find('ArticleMetadataPanel')
    expect(panel).toMatchSnapshot()
  })
})
