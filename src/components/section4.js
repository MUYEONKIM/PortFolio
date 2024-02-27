import * as S from '../styles/mainStyle'

export default function Section4() {
  return (
    <S.Section3 id="part-4">
      <S.Section3div>
        <S.Section3Img>
          <img src="/main/A.png" />
        </S.Section3Img>
        <S.Section3Div>
          <h1>손글씨 예측을 위한 AI모델 소개</h1>
          <p style={{ fontSize: '23px', marginTop: '55px' }}>
            여러분의 손글씨를 분석하여 AI가 정해진 폰트와의 유사도를 예측하고, 판별합니다.
            글씨체의 유사도가 올라감과 동시에 사용자의 글씨도 점점 교정이 되어 예쁜 글씨를 쓸수 있게 됩니다.
            예쁘게 교정된 여러분의 손글씨를 AI를 통해 나만의 폰트로 생성해 보세요.</p>
          <p style={{ fontSize: '23px', marginTop: '15px' }}>손글씨 교정과 나만의 폰트생성 멋지지 않나요? 여러분도 한번 체험해 보세요!</p>

          <br />
          <S.MyButton1 style={{ width: '100px' }} >자세히</S.MyButton1>
        </S.Section3Div>
      </S.Section3div>
    </S.Section3>
  )
}