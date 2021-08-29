// 모델
// 모델(model)이란 어떠한 동작을 수행하는 코드를 말한다.
// 표시 형식에 의존하지 않는다.
// 다시 말해, 사용자에게 어떻게 보일지에 대해 신경쓰지 않아도 된다.
// 모델은 순수하게 public 함수로만 이루어진다.
// 몇몇 함수들은 사용자의 질의(query)에 대해 상태 정보를 제공하고 나머지 함수들은 상태를 수정한다.

// 뷰
// MVC에서 모델은 여러 개의 뷰(view)를 가질 수 있다.
// 뷰는 모델에게 질의를 하여 모델로 부터 값을 가져와 사용자에게 보여준다.

// 컨트롤러
// MVC의 뷰는 여러 개의 컨트롤러(controller)를 가지고 있다.
// 사용자는 컨트롤러를 사용하여 모델의 상태를 바꾼다.
// 컨트롤러는 모델의 mutator 함수를 호출하여 상태를 바꾼다.
// 이때 모델의 상태가 바뀌면 모델은 등록된 뷰에 자신의 상태가 바뀌었다는 것을 알리고 뷰는 거기에 맞게 사용자에게 모델의 상태를 보여 준다.

import InputModel from './models/InputModel';

import Input from './views/Input';
import Box from './views/Box';

import InputController from './controllers/InputController';

(function main() {
  const initialInputState = {
    value: 'hello'
  };

  const inputModel = new InputModel(initialInputState);

  const inputController = new InputController(inputModel);

  const input = new Input(inputController);
  const box = new Box();

  inputModel.subscribe(input);
  inputModel.subscribe(box);

  input.render();
  box.render();

  inputController.callMutator(initialInputState);
})();
