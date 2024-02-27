import * as S from '../styles/mainStyle'

export default function Section2() {
  return (
    <S.Section1 id="part-2">
      <S.Section1div>
        <S.Main>
          <S.MainBox>
            <S.MainDiv style={{ display: 'flex', flexDirection: 'column', height: '30%', justifyContent: 'space-evenly' }}>
              <span style={{ fontSize: '35px', fontWeight: 'bolder', }}>"손글씨 마스터!"
              </span>
              <S.MainP>글씨 연습장은 더 나은 글쓰기 경험을 위해 설계된 도구입니다.<br /><p style={{ margin: '5px' }} />
                편안한 자세로 앉아 등과 어깨를 펴고, 팔과 손목을 자연스럽게 위치시켜 최적의 글쓰기 자세를 유지하세요.<br /><p style={{ margin: '5px' }} />
                이렇게 하면 손글씨의 흐름과 정확성을 더욱 개선할 수 있답니다.<br /><p style={{ margin: '5px' }} />
                시작하기 전에 자세와 환경을 체크하고, 손글씨 마스터로의 여정을 시작해보세요!</S.MainP>
            </S.MainDiv>
            <S.MenuBox>
              <S.FeatureSection>
                <span></span>
                <h3>올바른 자세!</h3>
                <img
                  src="./main/pretty/giphy.gif"
                  width="120"
                  height="150"
                  frameBorder="0"
                ></img>
                <br />
                <S.FeatureP>글쓰기 연습을 할 때는 언제나 올바른 자세로! 잘못된 자세는 허리에 부담을 줄 수가 있어요!<br />
                  <a style={{ color: '#fa7400' }} href='http://www.faber-castell.co.kr/%ED%94%8C%EB%A0%88%EC%9E%89%EB%9F%AC%EB%8B%9D/%EC%93%B0%EA%B8%B0%ED%95%99%EC%8A%B5/%EC%B2%B4%EA%B3%84%EC%A0%81%EC%9D%B8-%EC%93%B0%EA%B8%B0-%ED%95%99%EC%8A%B5%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%AA%87-%EA%B0%80%EC%A7%80-%EC%B6%94%EA%B0%80-%EC%9C%A0%EC%9D%98%EC%82%AC%ED%95%AD/' target='_blank'>"올바른 자세 확인하기"</a>
                </S.FeatureP>
              </S.FeatureSection>
              <S.FeatureSection2>
                <span></span>
                <h3>밝은 장소!</h3>
                <img
                  src="./main/pretty/giphy2.gif"
                  width="120"
                  height="150"
                  frameBorder="0"
                ></img>
                <br />
                <S.FeatureP>어두운 곳에서 하는 글쓰기 연습은 시력에 안 좋은 영향을 미칠 수 가 있어요!</S.FeatureP>
              </S.FeatureSection2>
              <S.FeatureSection3>
                <span></span>
                <h3>올바른 파지법</h3>
                <img
                  src="./hand_write.png"
                  width="120"
                  height="150"
                  frameBorder="0"
                ></img>
                <br />
                <S.FeatureP>연필을 잡을 때는 언제나 올바른 파지법으로! 잘못된 파지법은 손에 부담을 줄 수가 있어요!<br />
                  <a style={{ color: '#fa7400' }} href='http://www.faber-castell.co.kr/%ED%94%8C%EB%A0%88%EC%9E%89%EB%9F%AC%EB%8B%9D/%EC%93%B0%EA%B8%B0%ED%95%99%EC%8A%B5/%EC%98%AC%EB%B0%94%EB%A5%B8-%EC%9E%90%EC%84%B8-%EC%9D%B5%ED%9E%88%EA%B8%B0/' target='_blank'>"올바른 파지법 확인하기"</a></S.FeatureP>
              </S.FeatureSection3>
            </S.MenuBox>
          </S.MainBox>
        </S.Main>
      </S.Section1div>
    </S.Section1>
  )
}