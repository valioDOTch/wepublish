import React from 'react'
import {MockedProvider as MockedProviderBase} from '@apollo/client/testing'
import {ArticleMetadata, ArticleMetadataPanel} from '../../src/client/panel/articleMetadataPanel'
//import {  } from '../../src/client/api'
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
/*
describe('Article Metadata Panel', async () => {
  test('should render', () => {
    const wrapper = mount(
      <UIProvider styleRenderer={styleRenderer} rootElementID={'fskr'}>
        <MockedProvider  addTypename={false}>
          <ArticleMetadataPanel />
        </MockedProvider>
      </UIProvider>
    )
    await updateWrapper(wrapper, 100)

    const panel = wrapper.find('PeerEditPanel')
    expect(panel).toMatchSnapshot()
  }
*/
