# Test

## 测试思想

- TDD：Test-Driven Development（测试驱动开发）：先编写测试代码，后只编写使测试通过的功能代码，通过测试来推动整个开发的进行
- BDD：Behavior-Driven Development（行为驱动开发）：先根据设计开发功能，后对所开发的功能进行自动化的测试

## 测试分类

- 单元测试(Unit Test)：是指对软件中的最小可测试单元进行检查和验证，通常指的是独立测试单个函数。(高)
- 集成测试(Integration Test)：测试应用中不同模块如何集成，如何一起工作。(中)
- UI 测试(UI Test)：对图形交互界面的测试。（仅测试前端，脱离真实后端环境，mock 数据）(低)
- 端到端测试（e2e）：站在用户角度的测试，把程序看成是一个黑盒，不关心内部实现，直接使用，看是否达到预期。（完全在真实环境中）

## 框架

- 单元测试：Mocha, Ava, Karma, Jest, Jasmine 等。
- UI 测试：ReactTestUtils, Test Render, Enzyme, React-Testing-Library, Vue-Test-Utils 等。
- e2e：Nightwatch, Cypress, Phantomjs, Puppeteer

## 编写原则

- 关注输入输出，不考虑内部实现
- 数据尽量模拟现实
- 充分考虑数据的边界条件
- 对重点、复杂、核心代码，重点测试
- 测试描述表达力强，一个单元测试只测一个分支，只准备能体现测试业务的最小数据
- 利用 AOP(beforeEach、afterEach)，减少测试代码数量，避免无用功能
- 测试、功能开发相结合，有利于设计和代码重构

## 规范

- 单元测试和 UI 测试的文件夹统一命名为 \_\_tests\_\_，测试文件以 .test.tsx? 为后缀
- 将 \_\_tests\_\_ 文件夹与它们正在测试的代码放在同级目录下
- e2e 测试的文件夹命名为 e2e，放在根目录下

## 编写套路

- 编排(Arrange): 编排初始化上下文环境的代码
- 执行(Act): 执行模拟用户应该执行的操作
- 断言(Assert): 对期望结果进行断言

## React Test

|    架构层级     |                                                测试内容                                                 |         测试策略          |                           解释                            |
| :-------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------: | :-------------------------------------------------------: |
| action(creator) |                                        是否正确创建 action 对象                                         |      一般不需要测试       |          由于 action 结构比较简单，一般不会出错           |
|     reducer     |                                            是否正确完成计算                                             | 有逻辑的 reducer100%覆盖  | reducer 输入输出明确，又包含业务计算，非常适合 Unit test  |
|    selector     |                                            是否正确完成计算                                             | 有逻辑的 selector100%覆盖 | selector 输入输出明确，又包含业务计算，非常适合 Unit test |
|      saga       | 是否获取了正确的参数；是否正确调用了 api；是否使用了正确的返回值存储回 redux 中；业务分支逻辑；异常逻辑 | 这五个业务点尽量 100%覆盖 |                                                           |
|    component    |                                            组件分支渲染逻辑                                             |         100%覆盖          |         这个点最为复杂，按低代价、高收益原则进行          |
|                 |                                     交互事件是否以正确的参数被调用                                      |         100%覆盖          |                                                           |
|                 |                                         redux connect 过的组件                                          |             -             |                                                           |
|       UI        |                                            组件是否正确渲染                                             |             -             |                      不稳定、成本高                       |
|      utils      |                                            输入输出是否正确                                             |    无副作用的 100%覆盖    |

redux connect 测试：成本高，收益低。

- 要配置依赖（配置 store、\<Provider />；@connect 组件里套 @connect 组件的场景）；
- 收益只是可能覆盖到了几个偶尔出现的场景（比如接入错误的字段、写字段时写错等）；

UI 测试：对比 snapshot，打断开发节奏，没啥用

### [jest](https://jestjs.io/)

#### jest.config.js

```js
module.exports = {
  // 可以指定测试环境
  testEnviroment: 'jest-environment-node' | 'jest-enviroment-jsdom',
  // 指定模块加载目录
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  // 此项可以映射路径别名，mock引入的文件模块。identity-obj-proxy 支持在 jest 中引入 css, 同时支持 css 的模块化
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  // 对不同文件进行转化
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  // 不转化的模块（此处为不转化node_modules，但转化其中的three模块）
  transformIgnorePatterns: ['/node_modules/(?!three).+\\.js$'],
  // 不进行测试的文件
  testPathIgnorePatterns: ['node_modules/'],
  // before jest is loaded(不依赖 jest)
  setupFiles: ['jest-webgl-canvas-mock', 'jest-localstorage-mock'],
  // after jest is loaded(依赖 jest)
  setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js'),
  // 测试覆盖率收集目录
  collectCoverageFrom: ['src/**/*.js'],
  // 指定测试覆盖率需要需要达到的阈值
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80
    }
  },
  // 增强 watch 模式体验: $ npm install --save-dev jest-watch-typeahead
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
```

#### jest-dom

jest-dom 封装了测试 dom 的方法。报错的信息可以更加准确。

```js
import 'jest-dom/extend-expect'
expect(input).toHavaAttribute('type', 'number') // 是否有某个属性
expect(..).toHaveTextContent()                  // 是否有某个内容
```

#### dom-test-library

```js
// 增加了更多的操作, 比如根据 label 找对应的节点;
// 支持正则匹配;
import { queries } from 'dom-testing-library';
```

#### mock

对于被待测试文件用到但本测试并不关心的模块和函数，或当前环境不支持的 api 函数对象等，可以进行手动 mock，营造被测试模块的上下文环境

##### mock 请求后端接口数据

```js
// 当需要测试接口返回的真实数据时可以对其进行集成测试。
jest.spyOn(global, 'fetch').mockImplementation(() => {
  Promise.resolve({
    json: () => Promise.resolve(mockData)
  });
});
```

##### mock 模块/组件

```js
// jest.mock => 模块
// jest.fn => 函数

// 对当前组件的测试影响不大的第三方模块, 可mock其模块/组件
jest.mock('someComponent', () => {
  return props => {
    return <span>mock Component</span>;
  };
});

// --------------------------------------------

// Mock HTTP Requests with jest.mock in React Component Tests
import { render, fireEvent, wait } from 'react-testing-library'
import {loadGreeting as mockLoadGreeting} from '../api'

jest.mock('../api', () => {
  return {
    loadGreeting: jest.fn(subject =>
      Promise.resolve({data: {greeting: `Hi ${subject}`}}),
    ),
  }
})

test('loads greetings on click', () => {
  const {getByLabelText, getByText, getByTestId} = render(<GreetingLoader />)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  await wait(() => expect(getByTestId('greeting')).toHaveTextContent())
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
})

// --------------------------------------------

// Mock react-transition-group in React Component Tests with jest.mock
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null),
  }
})

// --------------------------------------------

// 将 console.error() mock 掉
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore() // spyOn后要restore释放掉
})


```

##### mock 时间类 api

```js
//  jest.useFakeTimers()，jest.runAllTimers()，jest.useRealTimers()

// 如果测试用例中遇到 setTimeout(fn, 5000) 真的等上 5s 后才执行 fn 测试效率是非常低效的, 因此可以使用 jest 提供的 jest.useFakeTimers() 来 mock 与时间有关的 api。

jest.useFakeTimers();
// move ahead in time by 100ms
act(() => {
  jest.advanceTimersByTime(100);
});

// -----

// act 确保其函数里的单元方法(比如 rendering、用户事件、数据获取)在执行步骤 make assertions 之前已经全部执行完
// 例如 react-dom 要求将更新 state 的逻辑包在 act 方法中，确保act内部逻辑执行完，也就是页面更新渲染完毕，再执行下面的断言
act(() => {
  // render components
});
// make assertions
```

### [react-testing-library](https://testing-library.com/)

@testing-library/react 在 dom-test-library 的基础上查找 React 组件

### [redux-saga-test-plan](http://redux-saga-test-plan.jeremyfairbank.com)

#### 测量维度

1. 行覆盖率(line coverage)：是否测试用例的每一行都执行了
2. 函数覆盖率(function coverage)：师傅测试用例的每一个函数都调用了
3. 分支覆盖率(branch coverage)：是否测试用例的每个 if 代码块都执行了（`||，&&，？，！，if语句，switch语句`）
4. 语句覆盖率(statement coverage)：是否测试用例的每个语句都执行了

## e2e 测试

### [puppeteer](https://github.com/puppeteer/puppeteer/blob/v4.0.0/docs/api.md)
