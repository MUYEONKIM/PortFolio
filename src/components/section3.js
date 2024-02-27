import * as S from '../styles/mainStyle'

export default function Section3() {
  return (
    <S.Section2 id="part-3">
      <S.Section2div>
        <S.Function>
          <S.FunctionDiv1>
            <S.FunctionTitle>
              <h3 style={{ fontSize: '30px' }}>글씨 연습장</h3>
            </S.FunctionTitle>
            <img src="/vector/vector1.png" style={{ marginBottom: '30px' }} />
            <S.FunctionContext>
              <p style={{ textAlign: 'center', fontSize: '19.4px', marginBottom: '30px' }}>손글씨 연습장은 나만의 글씨체를 교정 및 발전시킬 수 있는 공간입니다.<br />글씨 연습을 통해 창의적인 생각과 예술적인 재능을 발전시켜 보세요.</p>
            </S.FunctionContext>
          </S.FunctionDiv1>
          <S.FunctionDiv2>
            <S.FunctionTitle>
              <h3 style={{ fontSize: '30px' }}>글씨 놀이터</h3>
            </S.FunctionTitle>
            <img src="/vector/vector2.png" />
            <S.FunctionContext>
              <p style={{ textAlign: 'center', fontSize: '19.4px' }}>손글씨 놀이터는 재미있는 게임을 통해 <br />손글씨 연습을 즐길 수 있도록 만들어졌습니다.<br />
                게임 속의 다양한 스테이지와 폰트에 도전해 보면서 <br />여러분의 손글씨 실력을 향상시켜 보세요!</p>
            </S.FunctionContext>
          </S.FunctionDiv2>
        </S.Function>
        <S.Function>
          <S.FunctionDiv3>
            <S.FunctionTitle>
              <h3 style={{ fontSize: '30px' }}>손글씨 자랑하기</h3>
            </S.FunctionTitle>
            <img src="/vector/vector3.png" />
            <S.FunctionContext>
              <p style={{ textAlign: 'center', fontSize: '19.4px' }}>열심히 연습한 당신의 손글씨를 여러 사람들에게 자랑해 보세요.<br />여러 사람들과 글씨체를 공유하고 댓글을 남기면서 소통해보세요.<br />맘에드는 글씨체에 좋아요를 누르면서 댓글로 칭찬을 남겨보아요!</p>
            </S.FunctionContext>
          </S.FunctionDiv3>
          <S.FunctionDiv4>
            <S.FunctionTitle>
              <h3 style={{ fontSize: '30px' }}>폰트 만들어보기</h3>
            </S.FunctionTitle>
            <img src="/vector/vector4.png" />
            <S.FunctionContext>
              <p style={{ textAlign: 'center', fontSize: '19.4px' }}>당신만의 독특한 폰트를 만들어보세요!<br />폰트 만들기 서비스에서는 우리 사이트에서 다듬어진 손글씨 <br />또는 좋아하는 연예인의 손글씨를 폰트로 생성할 수 있습니다.</p>
            </S.FunctionContext>
          </S.FunctionDiv4>
        </S.Function>
      </S.Section2div>
    </S.Section2>
  )
}