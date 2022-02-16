import * as S from './style';
import { 
  HelloWorldClass, 
  HelloWorldFunction, 
  StateRender,
  ArrowFunction,
  Map,
  Counter
} from './tasks';

export default function App() {
  const msg1 = 'Olá mundo';
  const msg2 = 'Estou usando React hihi!';

  return (
    <S.App>
      <HelloWorldFunction message={msg1} />
      <HelloWorldClass message={msg2} />
      <StateRender />
      <ArrowFunction />
      <Map />
      <Counter />
    </S.App>
  );
}
