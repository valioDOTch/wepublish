import React from 'react'
import {MockedProvider as MockedProviderBase} from '@apollo/client/testing'
import {AuthorEditPanel} from '../../src/client/panel/authorEditPanel'
import {CreateAuthorDocument, AuthorDocument} from '../../src/client/api'
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
