import React from 'react'
import {MockedProvider as MockedProviderBase} from '@apollo/client/testing'
import {ArticleMetadataPanel} from '../../src/client/panel/articleMetadataPanel'
import {AuthorListDocument} from '../../src/client/api'
import {mount} from 'enzyme'

import {UIProvider} from '@karma.run/ui'
import {act} from 'react-dom/test-utils'
import {updateWrapper} from '../utils'
import * as fela from 'fela'
import {createDefaultValue} from '../../src/client/blocks/richTextBlock'

const MockedProvider = MockedProviderBase as any

const styleRenderer: fela.IRenderer = {
  renderRule: jest.fn(),
  renderKeyframe: jest.fn(),
  renderFont: jest.fn(),
  renderStatic: jest.fn(),
  renderToString: jest.fn(),
  subscribe: jest.fn(),
  clear: jest.fn()
}
const article = {
  slug: 'the-properties-of-moonstone-and-its-uses',
  preTitle: 'Moonstone Uses',
  title: 'The Properties of Moonstone And Its Uses',
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
              id: 'authorId2',
              name: 'Hermione Granger',
              slug: 'hermione-granger',
              //url: 'www.hg.ch/',
              links: [{title: 'Link Title', url: 'www.link-url.ch/'}],
              //bio: createDefaultValue(),
              image: undefined
            }
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
          },
          totalCount: 1
        }
      }
    })
  }
]

describe('Article Metadata Panel', () => {
  test('should render', async () => {
    const wrapper = mount(
      <UIProvider styleRenderer={styleRenderer} rootElementID={'fskr'}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ArticleMetadataPanel value={article} />
        </MockedProvider>
      </UIProvider>
    )
    await updateWrapper(wrapper, 100)

    const panel = wrapper.find('ArticleMetadataPanel')
    expect(panel).toMatchSnapshot()
  })
})
